import React from "react";
import './About.css';
import Profile from '../assets/profile.png';
import leet from '../assets/leetcodelogo.jpg';
import hack from '../assets/hackerrank-logo.png';
import codec from '../assets/codechef-logo.png';
const About = () => {
    return (
        <div id="about_1" className='about'>
            <div className="about-title">
                <h1>About Me</h1>

            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img  src={Profile} alt="hi" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi! 👋 I'm Robbi Taruni Ramya Rani, a passionate Full Stack Developer with a strong foundation in front-end and back-end technologies</p>
                        <p>I specialize in building dynamic and responsive web applications using React, JavaScript, HTML, CSS, and Node.js.</p>
                        <p>I have experience working on React Native for mobile development, along with a solid understanding of computer networking and AI-based applications</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "100%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Mongo DB</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>React Native</p><hr style={{ width: "100%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achivement">
                    <h1>Leetcode</h1>
                    <a href="https://leetcode.com/u/taruniramya/" target="_blank" rel="noopener noreferrer">
                    <img src={leet} alt="h1" />
                    </a>
                    <h2>click Above👆</h2>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>CodeChef</h1>
                    <a href="https://www.codechef.com/users/taruniramya" target="_blank" rel="noopener noreferrer">
                    <img src={codec} alt="h1" />
                    </a>
                    <h2>click Above👆</h2>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>Hacker Rank</h1>
                    <a href="https://www.hackerrank.com/profile/taruniramya2003" target="_blank" rel="noopener noreferrer">
                    <img src={hack} alt="h1" />
                    </a>
                    <h2>click Above👆</h2>
                </div>
            </div>
        </div>
    )
}
export default About;