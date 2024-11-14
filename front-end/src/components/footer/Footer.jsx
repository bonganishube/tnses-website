import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-row'>

          {/* 1st Column */}
         
            <div className='newsletter'>
              <h4>
                Subscribe to our newsletter
              </h4>
              <p>
                Receive updates, tutorials, discounts sent straight to your inbox every month.
              </p>
              <form action=''>
                <input type='email' placeholder='Email' className='input-email'></input>
                <input type='submit' value='Submit' className='input-submit'></input>
              </form>
              <hr></hr>
            </div>

          

          {/* 2nd Column */}
    
            <div className='quick-links'>
              <h4>Quick Links</h4>
              <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Contact</a></li>
                <li><a href=''>Team</a></li>
              </ul>
            </div>
        

          {/* 3rd Column */}
      
            <div className='services'>
              <h4>Services</h4>
              <ul>
                <li><a href=''>Google for Education</a></li>
                <li><a href=''>Blueprint</a></li>
                <li><a href=''>Mentorship</a></li>
              </ul>
            </div>

            {/* 4th Column */}
            <div className='contact'>
              <h4>Contact</h4>
              <ul>
                <li className='location'><i className="fa-solid fa-location-dot"></i>
                Belhar, Pentech, Cape Town, Western Cape 7493</li>
                <li><i className="fa-solid fa-phone"></i>
                012 345 67-89</li>
                <li> <i className="fa-solid fa-envelope"></i>
                <a href='mailto:info@tnses.org'>info@tnses.org</a></li>
              </ul>
            </div>
        </div>

        <hr></hr>
          <div className='copyright'>
          <ul className='social-icons'>
              <li><a href=''><i className='fab fa-facebook'></i></a></li>
              <li><a href=''><i className='fab fa-instagram'></i></a></li>
              <li><a href=''><i className='fab fa-twitter'></i></a></li>
              <li><a href=''><i className='fab fa-youtube'></i></a></li>
            </ul>
            <p>
              &#169; 2024 TNSES. All Rights Reserved.
            </p>
          </div>
      </div>
    </footer>
  )
}

export default Footer