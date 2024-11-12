import React from "react";
import "./Footer.css";
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='row'>
          <div className='footer-col'>
            <div className='about-us'>
              <div className='footer-logo'>
                <img 
                  src={Logo}
                  alt='Logo'
                />
                <h1>TNSES</h1>
              </div>
              <h4 className='newsletter-heading'>
                Subscribe to our newsletter
              </h4>
              <p className='newsletter-paragraph'>
                Receive updates, tutorials, discounts sent straight in your inbox every month.
              </p>
              <form action=''>
                <input type='email' placeholder='Email' className='input-email'></input>
                <input type='submit' value='Submit' className='input-submit'></input>
              </form>
            </div>
          </div>

          {/* 2nd Column */}
          <div className='footer-col'>
            <h4>Quick Links</h4>
            <ul>
              <li><a href=''>Home</a></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Contact</a></li>
              <li><a href=''>Team</a></li>
            </ul>
          </div>

          {/* 3rd Column */}
          <div className='footer-col'>
            <h4>Services</h4>
            <ul>
              <li><a href=''>Google for Education</a></li>
              <li><a href=''>Blueprint</a></li>
              <li><a href=''>Mentorship</a></li>
            </ul>
          </div>

          {/* 4th Column */}
          <div className='footer-col'>
            <h4>Contact</h4>
            <ul className='contact-icons'>
              <li><i className="fa-solid fa-location-dot"></i>Belhar, Pentech, Cape Town, Western Cape 7493</li>
              <li><i className="fa-solid fa-envelope"></i><a href = 'mailto:info@tnses.org'>info@tnses.org</a></li>
              <li><i className="fa-solid fa-phone"></i>+27 12 345 67-89</li>
            </ul>
          </div>
        </div>

        <hr></hr>
          <div className='copyright'>
            <p>
              &#169; 2024 TNSES. All Rights Reserved.
            </p>
          </div>

          <div className='social-icons'>
              <a href=''><i className='fab brands fa-facebook'></i></a>
              <a href=''><i className='fab brands fa-instagram'></i></a>
              <a href=''><i className='fab brands fa-twitter'></i></a>
              <a href=''><i className='fab brands fa-youtube'></i></a>
            </div>
      </div>
    </footer>
  )
}

export default Footer