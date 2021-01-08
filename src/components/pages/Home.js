import React from "react";
import "../../App.css";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="c-full">
        <h1 className="greeting">Hello there!</h1>
        <p className="greetingtext">
          This is my portfolio site, where you can learn about me, and get an
          insight to my interests by having a look at my works...well the
          "products" of my hobbies and interests.
        </p>
      </div>
      <div className="waves">
        <div className="wave2"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default Home;
