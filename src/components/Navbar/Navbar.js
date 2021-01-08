import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Logo from "../../assets/ep_kicsi.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = (i) => {
    setCurrentPath(i);
    setClick(false);
  };

  return (
    <nav className="NavbarItems">
      <a href="/portfolio/">
        <img src={Logo}></img>
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.to}
                className={currentPath == item.to ? item.active : item.cName}
                onClick={() => closeMobileMenu(item.to)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        <div className="socialm-icons">
          <a href="https://github.com/Eszter96">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/eszter-p%C3%A9terfay-69aa77170/"
            className="fab fa-linkedin"
          />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
