
import React from "react";
import './Home1.css';
import profile from "../assets/profile.png";
import Type from "./Type.jsx";
import resumePDF from "../assets/R.TaruniRamyaRani(Resume)(U).pdf"; 

const Home1 = () => {
  return (
    <div id="home" className="Hm">
      <div className='home'>
        <h1 style={{ paddingBottom: 15 }} className="heading">
          Hi
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1 className="heading-name">
          I'M
          <strong className="main-name"> ROBBI TARUNI RAMYA RANI</strong>
        </h1>

        <div style={{ padding: 50, textAlign: "left" }}>
          <Type />
        </div>
                
        <a href={resumePDF} download>
          <button className="Resume-connect">Download Resume</button>
        </a>
      </div>

      <div className="Profile">
        <img src={profile} className="pro_size" alt="profile" />
      </div>
    </div>
  );
};

export default Home1;



