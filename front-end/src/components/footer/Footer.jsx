import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='row'>

          {/* 1st Column */}
          <div className='footer-col'>
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
            </div>
          </div>

          {/* 2nd Column */}
          <div className='footer-col'>
            <div className='quick-links'>
              <h4>Quick Links</h4>
              <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Contact</a></li>
                <li><a href=''>Team</a></li>
              </ul>
            </div>
          </div>

          {/* 3rd Column */}
          <div className='footer-col'>
            <div className='services'>
              <h4>Services</h4>
              <ul>
                <li><a href=''>Google for Education</a></li>
                <li><a href=''>Blueprint</a></li>
                <li><a href=''>Mentorship</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr></hr>
          <div className='copyright'>
            <p>
              &#169; 2024 TNSES. All Rights Reserved.
            </p>
          </div>
      </div>
    </footer>
  )
}

export default Footer