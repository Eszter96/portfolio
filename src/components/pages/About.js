import React, { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";

import "../../App.css";
import "./About.css";
import MyImage from "../../assets/cvkep.png";
import Frame1 from "../../assets/keretblue.png";
import Frame2 from "../../assets/keretorange.png";

function About() {
  const ProgrammingSkills = ({ isVisible }) => {
    return (
      <div className="programming">
        <h3>C#</h3>
        <div>
          <div className="chart3"></div>
          <div className="chart"></div>
        </div>
        <h3>Java</h3>
        <div>
          <div className="chart1"></div>
          <div className="chart"></div>
        </div>
        <h3>JavaScript</h3>
        <div>
          <div className="chart4"></div>
          <div className="chart"></div>
        </div>
        <h3>PHP</h3>
        <div>
          <div className="chart5"></div>
          <div className="chart"></div>
        </div>
        <h3>Python</h3>
        <div>
          <div className="chart2"></div>
          <div className="chart"></div>
        </div>
      </div>
    );
  };

  const OtherSkills = ({ isVisible }) => {
    return (
      <div>
        <ul>
          <li style={{ paddingBottom: "10px" }}>
            <h3>Azure</h3>
            <ul>
              <li>
                <p style={{ fontSize: "15px" }}>IoTHub</p>
              </li>
              <li>
                <p style={{ fontSize: "15px" }}>Stream Analitics</p>
              </li>
            </ul>
          </li>
          <li style={{ paddingBottom: "10px" }}>
            <h3>Google Cloud</h3>
            <ul>
              <li>
                <p style={{ fontSize: "15px" }}>SQL database</p>
              </li>
              <li>
                <p style={{ fontSize: "15px" }}>App Engine</p>
              </li>
            </ul>
          </li>
          <li style={{ paddingBottom: "10px" }}>
            <h3>RPA - UiPath Studio</h3>
          </li>
          <li style={{ paddingBottom: "10px" }}>
            <h3>Twitter API</h3>
          </li>
          <li style={{ paddingBottom: "10px" }}>
            <h3>Power Automate</h3>
          </li>
          <li style={{ paddingBottom: "10px" }}>
            <h3>PowerBi</h3>
          </li>
          <li style={{ paddingBottom: "10px" }}>
            <h3>VirtualBox</h3>
          </li>
          <li style={{ paddingBottom: "30px" }}>
            <h3>Linux</h3>
          </li>
          <li style={{ paddingBottom: "10px" }}>
            <h3>Adobe</h3>
            <ul>
              <li>
                <p style={{ fontSize: "15px" }}>Illustrator</p>
              </li>
              <li>
                <p style={{ fontSize: "15px" }}>Photoshop</p>
              </li>
            </ul>
          </li>
          <li style={{ paddingBottom: "100px" }}>
            <h3>Blender</h3>
          </li>
        </ul>
      </div>
    );
  };

  const Template = () => {
    return (
      <div className="levels0">
        <div className="beginner0"></div>
        <div className="beginner0"></div>
        <div className="intermediate0"></div>
        <div className="intermediate0"></div>
        <div className="advanced0"></div>
        <div className="advanced0"></div>
      </div>
    );
  };

  const Languages = () => {
    return (
      <div className="languages">
        <div>
          <h3>Hungarian</h3>
        </div>
        <div>
          <Template />
          <div className="levels">
            <div className="beginner"></div>
            <div className="beginner"></div>
            <div className="intermediate"></div>
            <div className="intermediate"></div>
            <div className="advanced"></div>
            <div className="advanced"></div>
          </div>
        </div>
        <div>
          <h3>English</h3>
        </div>
        <div>
          <Template />
          <div className="levels">
            <div className="beginner"></div>
            <div className="beginner"></div>
            <div className="intermediate"></div>
            <div className="intermediate"></div>
            <div className="advanced"></div>
            <div className="advanced00"></div>
          </div>
        </div>
        <div>
          <h3>Finnish</h3>
        </div>
        <div>
          <Template />
          <div className="levels">
            <div className="beginner"></div>
            <div className="beginner"></div>
            <div className="intermediate00"></div>
            <div className="intermediate00"></div>
            <div className="advanced00"></div>
            <div className="advanced00"></div>
          </div>
        </div>
        <div>
          <h3>German</h3>
        </div>
        <div>
          <Template />
          <div className="levels">
            <div className="beginner"></div>
            <div className="beginner"></div>
            <div className="intermediate00"></div>
            <div className="intermediate00"></div>
            <div className="advanced00"></div>
            <div className="advanced00"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg">
      <div className="container2" id="section1">
        <div className="c-full">
          <div className="first-section">
            <div className="image-container">
              <img src={MyImage} className="image"></img>
              <img src={Frame1} className="f1"></img>
              <img src={Frame2} className="f2"></img>
            </div>
            <p className="text-about-me">
              I consider myself a very diligent person, who is always looking
              for new challenges. I prefer such kind of activities where I can
              utilize my creativity because those make me very motivated. At the
              same time, I'm very perfectionist and as a side effect, I often
              tend to be unsatisfied with my performance. Therefore I'm
              constantly making efforts until I can feel the opposite. Sometimes
              I feel kind of lost when I decide what I want to focus on next,
              because it's an endless list and there is always a place for
              further improvements, but once I'm getting engaged with something
              I am very keen on that.
            </p>
          </div>
        </div>
      </div>
      <div className="swich">
        <section className="demo">
          <a href="#skills">
            <span></span>
          </a>
        </section>
      </div>
      <div id="skills">
        <h1>Skills</h1>
        <div className="cols">
          <div>
            <div>
              <h2>Programming skills</h2>
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible ? <ProgrammingSkills /> : <div></div>
                }
              </TrackVisibility>
            </div>
            <div>
              <h2>Languages</h2>
              <TrackVisibility once>
                <Languages />
              </TrackVisibility>
            </div>
          </div>
          <div className="right-col">
            <h2>I am also familar with:</h2>
            <TrackVisibility once>
              {({ isVisible }) => (isVisible ? <OtherSkills /> : <div></div>)}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
