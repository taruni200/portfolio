import React from "react";
import './Contact.css';
import { FaEnvelope, FaPhone,FaMapMarkerAlt } from "react-icons/fa";

 const Contact=()=>{


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "72fd1865-c9cb-42d9-b7d1-115df1fc1aef");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
    return(
        <div id="contact" className='contact'>
           <div className="contact-title">
            <h1>Get In Touch</h1>
           </div>
           <div className="contact-session">
            <div className="contact-left">
                <h5>Let's Talk</h5>
                <p>I’m always open to collaborations, freelance projects, and job opportunities. Feel free to reach out to me for any inquiries or discussions related to web development, full-stack projects, or technology trends!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <h1><FaEnvelope className="contact-icon"/><p>taruniramya2003@gmail.com</p></h1> 
                    </div>
                    <div className="contact-detail">
                    <h1><FaPhone className="contact-icon"/></h1><p>Contact: +91 9390820802</p>
                    </div>
                    <div className="contact-detail">
                    <h3><FaMapMarkerAlt className="contact-icon"/>Location:Rajahmundry,Andhra Pradesh, India</h3>
                    </div>
                    </div>
            </div>
            <form  onSubmit={onSubmit}className="contact-right"> 
                 <label htmlFor="">Your Name</label>
                 <input type="text" placeholder="Enter Your Name" name='name'/>
                 <label htmlFor="">Your Email</label>
                 <input type="email" placeholder="Enter Your Email" name='email'/>
                 <label htmlFor="">Write your Message Here</label>
                 <textarea name="message"  rows="8" placeholder="enter your message"></textarea>
                 <button type="submit" className="contact-submit">Submit</button>
            </form>
           </div>
        </div>
    )
 }
 export default Contact;