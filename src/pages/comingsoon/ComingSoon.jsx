import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import "../SampleProject/SampleProject.css";

import Transition from "../../components/transition/Transition";

import ProjectHeroImg from "../../assets/coming-soon/sample-project-hero-2.jpg";
import ProjectHeroImg2 from "../../assets/coming-soon/sample-project-hero-3.jpg";
import ProjectHeroImg3 from "../../assets/coming-soon/sample-project-hero.jpg";
import ProjectImg1 from "../../assets/coming-soon/sample-project-1.jpg";
import ProjectImg2 from "../../assets/coming-soon/sample-project-2.jpg";
import ProjectImg3 from "../../assets/coming-soon/sample-project-3.jpg";
import ProjectImg4 from "../../assets/coming-soon/sample-project-4.jpg";

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
                Rizzbrand AI  <br />
            
              </h1>
            </div>

            <div className="col">
              <p>

              The Smartest Way for Creators & Brand Owners to Launch, Grow,  
              Monetize and Succeed in the creator economy

        
              </p>

              <div className="project-sub-info">
                <div className="sub-col">
                  <span>Branding</span>
                  <span>Generate digital product ideas</span>
                  <span>Product Design</span>
                  <span>Automate growth like a pro</span>
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
              <br /> J0IN THE WAITLIST - 
            Rizzbrand AI is launching soon to a limited 
            group of creators and brand owners.✨ Be the first to try it🔐 Get early access perks💬 Help shape the future of branding with AI


              </p>
            </div>
          </div>

          <div className="project-imgs">
            <div className="img">
              <img src={ProjectImg1} alt="" />
            </div>

            <div className="img">
              <img src={ProjectImg4} alt="" />
            </div>
          </div>
          
          <div className="project-imgs">
            <div className="img">
              <img src={ProjectImg3} alt="" />
            </div>

            <div className="img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div> 

          <div className="project-hero-img-3">
            <img src={ProjectHeroImg3} alt="" />
          </div>

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
