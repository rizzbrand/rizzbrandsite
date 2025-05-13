import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import Transition from "../../components/transition/Transition";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");
  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";

    const inner = document.createElement("span");
    inner.className = "inner";
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);
    outer.appendChild(inner);
    element.appendChild(outer);
  });
};

const Home = () => {
  useEffect(() => {
    enhance("hero-link-01");
    enhance("hero-link-02");
  }, []);

  return (
    <>
      <div className="hero-header">
        <div id="text">
          <div className="line">
            <p className="word">Rizzbrand</p>
            <p className="word">Site</p>
          </div>
{/* 
          <div className="line">
            <p className="word">Design</p>
            <p className="word">&</p>
          </div> */}

          { <div className="line">
            <p className="word"></p>
            <p className="word"></p>
          </div> }
{
          <div className="line">
            <Link
              id="hero-link-01"
              to="https://form.typeform.com/to/JTXpvMwp"
              target="_blank"
              className="word fancy"
            > Creators
              &#x2192;
            </Link>

            <Link
              id="hero-link-02"
              to="https://form.typeform.com/to/jgKhCJQT"
              target="_blank"
              className="word fancy"
            > Brands
              &#x2192;
            </Link>
          </div> }
        </div>
      </div>
    </>
  );
};

export default Transition(Home);
