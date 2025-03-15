import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Connect with me </h2>
        <p>
          Hi, I'm Robbi Taruni Ramya Rani, a passionate web developer skilled in React and full-stack development. Let's connect!
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/robbi-taruni-ramya-rani-25b874287/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/taruni200"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FaGithub />
          </a>
          <a href="mailto:taruniramya2003@gmail.com" className="mail">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
