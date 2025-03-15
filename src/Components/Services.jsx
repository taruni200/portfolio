
import React from "react";
import './Services.css';
import intdsn from "../assets/interiordsn.png";
import trav from "../assets/travelweb.png";
import elite from "../assets/elite.jpg";

const Services = () => {
    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Projects</h1>
                <div className="services-projects">
                    <div className="services-project">
                        <h5>Interior Design:</h5>
                        <img src={intdsn} alt="hi" />
                        <p>Aesthetic architects in interior design focus on creating visually appealing, functional, and harmonious spaces that blend artistic expression with architectural precision.</p>
                        <ul>Our services:
                            <li>Space Optimization</li>
                            <li>Cultural & Historical Influences</li>
                            <li>Customization & Personalization</li>
                        </ul>
                        <div className="ServiceBtn">
                            <button className="btn1" 
                                onClick={() => window.open("https://github.com/taruni200/Interior-Design", "_blank")}>
                                Git Hub
                            </button>
                            <button className="btn2"
                            onClick={() => window.open("interior_design(m).mp4", "_blank")}>
                                Demo</button>
                        </div>
                    </div>
                    <div className="services-project">
                        <h5>Trip Advisor:</h5>
                        <img src={trav} alt="hi" />
                        <p>A travel website is a digital platform that provides users with information, services, and tools related to travel, including destination guides, booking services, trip planning, and travel tips.</p>
                        <ul>Our services:
                            <li>Destination Guides</li>
                            <li>Interactive Maps & Itinerary Planning</li>
                            <li>Travel Blogs & Tips</li>
                        </ul>
                        <div className="ServiceBtn">
                            <button className="btn1" 
                                onClick={() => window.open("https://github.com/taruni200/Trip-Adivisor", "_blank")}>
                                Git Hub
                            </button>
                            
                            <button className="btn2" 
                                onClick={() => window.open("/tripAdv.mp4", "_blank")}>
                                Demo
                            </button>
                        </div>
                    </div>
                    <div className="services-project">
                        <h5>Elite Events:</h5>
                        <img src={elite} alt="hi" />
                        <p>An Elite Events website is a premium event management platform that provides exclusive and high-end event planning, organization, and booking services.</p>
                        <ul>Our services:
                            <li>Event Planning & Management</li>
                            <li>Online Booking & Reservations</li>
                            <li>Budget Estimation & Cost Calculator</li>
                        </ul>
                        <div className="ServiceBtn">
                            <button className="btn1" 
                                onClick={() => window.open("https://github.com/taruni200/Elite_Events", "_blank")}>
                                Git Hub
                            </button>
                            <button className="btn2"
                             onClick={() => window.open("Eliteeventz.mp4", "_blank")}>Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;




