import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Archive from "./pages/archive/Archive";
import Information from "./pages/information/Information";
import SampleProject from "./pages/sampleproject/SampleProject";
import SampleProject2 from "./pages/sampleproject2/SampleProject2";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const pageTitles = {
    "/": "Home | Rizzbrand Site | ",
    "/projects": "Projects | Rizzbrand Site |",
    "/archive": "Archive | Rizzbrand Site |",
    "/information": "Information | Rizzbrand Site | ",
    "/sample-project": "NFC card | Rizzbrand Site | ",
    "/sample-project2": "Rizzbrand OS | Rizzbrand Site |",
    "/coming-soon": "Coming Soon | Rizzbrand Site |",
  };

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || "Rizzbrand Site";
    document.title = currentTitle;

    if (location.pathname !== "/archive") {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 700);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/information" element={<Information />} />
          <Route path="/sample-project" element={<SampleProject />} />
          <Route path="/sample-project2" element={<SampleProject2 />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
