import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import "./SampleProject.css";

import Transition from "../../components/transition/Transition";

import ProjectHeroImg from "../../assets/sample-projects/sample-project-hero-2.jpg";
import ProjectHeroImg2 from "../../assets/sample-projects/sample-project-hero-3.jpg";
import ProjectHeroImg3 from "../../assets/sample-projects/sample-project-hero.jpg";
import ProjectImg1 from "../../assets/sample-projects/sample-project-1.jpg";
import ProjectImg2 from "../../assets/sample-projects/sample-project-2.jpg";
import ProjectImg3 from "../../assets/sample-projects/sample-project-3.jpg";
import ProjectImg4 from "../../assets/sample-projects/sample-project-4.jpg";

const SampleProject = () => {
  return (
    <ReactLenis root>
      <div className="project">
        <div className="conainer">
          <div className="project-hero-img">
            <img src={ProjectHeroImg} alt="Project Hero Img" />
          </div>

          <div className="project-info">
            <div className="col">
              <div className="project-client">
                <p>Client &#x2192; RCA</p>
              </div>
              <div className="project-studio">
                <p>Studio &#x2192; Rizzbrand</p>
              </div>
            </div>
            <div className="col">
              <div className="project-year">
                <p>Year &#x2192; 2025</p>
              </div>
            </div>
          </div>

          <div className="project-copy">
            <div className="col">
              <h1>
                Dynamic Vision: <br />
                RB site x RCA
              </h1>
            </div>

            <div className="col">
              <p>

                A next-generation smart card designed to empower creators and amplify brand visibility. 
                With a simple tap on any smartphone, effortlessly share your portfolio, social links, contact details. instantly
                connect fans, collaborators - no apps, no QR codes, just instant connections. 

                {/* A campaign designed to capture the innovation, creativity, and
                energy that TechCorp brings to the forefront of technology.
                Highlighting the cutting-edge developments for their latest
                product launch, this project emphasizes the fusion of technology
                and art, creating a visually striking and engaging experience. */}
              </p>

              <div className="project-sub-info">
                <div className="sub-col">
                  <span>Branding</span>
                  <span>Portfolio Design</span>
                  <span>Product Design</span>
                  <span>Compartible with both ios and andriod </span>
                </div>

                <div className="sub-col">
                <span><Link to="/">&#x2192;Pre - Order</Link></span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-hero-img-2">
            <img src={ProjectHeroImg2} alt="" />
          </div>

          <div className="project-copy">
            <div className="col"></div>

            <div className="col">
              <p>
               This project embodies the future of creator-brand collaboration, ensuring
               that every interaction leaves a lasting impression. Bold, innovative, it redefines
               how to network in this digital era.
              </p>
            </div>
          </div>

          {/* <div className="project-imgs">
            <div className="img">
              <img src={ProjectImg1} alt="" />
            </div>

            <div className="img">
              <img src={ProjectImg4} alt="" />
            </div>
          </div> */}

          {/* <div className="project-imgs">
            <div className="img">
              <img src={ProjectImg3} alt="" />
            </div>

            <div className="img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div> 

          <div className="project-hero-img-3">
            <img src={ProjectHeroImg3} alt="" />
          </div> */}

          <div className="next-project-cta">
            <Link to="/sample-project2">
              <h1>Next Project</h1>
            </Link>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(SampleProject);
