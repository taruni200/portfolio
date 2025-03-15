
import React, { useState } from "react";
import { Link } from "react-scroll"; 
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="navbar">
      <h1 className="logo">Taruni</h1>
      
      
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

     
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <Link className="anchor-link" to="home" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>
            <p>Home</p>
          </Link>
        </li>
        <li onClick={() => setMenu("education")} className={menu === "education" ? "active" : ""}>
          <Link className="anchor-link" to="education" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>
            <p>Education</p>
          </Link>
        </li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
          <Link className="anchor-link" to="about_1" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>
            <p>About Me</p>
          </Link>
        </li>
        <li onClick={() => setMenu("project")} className={menu === "project" ? "active" : ""}>
          <Link className="anchor-link" to="services" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>
            <p>Projects</p>
          </Link>
        </li>
        <li onClick={() => setMenu("connect")} className={menu === "contact" ? "active" : ""}>
          <Link className="anchor-link" to="contact" smooth={true} duration={500} offset={-50} onClick={() => setIsOpen(false)}>
            <p>Contact</p>
          </Link>
        </li>
      </ul>

      {/* Connect Button */}
      <Link to="contact" smooth={true} duration={500} offset={-50} className="nav-connect">
        Connect with me
      </Link>
    </div>
  );
};

export default Navbar;




