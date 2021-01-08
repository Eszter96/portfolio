import React from "react";
import "./Footer.css";
import Logo from "../assets/ep_kicsi_logo.png";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="inner-container">
        <img src={Logo}></img>
        <a className="email" href="mailto:peterfay.eszter8@gmail.com">
          peterfay.eszter8@gmail.com
        </a>
      </div>
    </div>
  );
}
