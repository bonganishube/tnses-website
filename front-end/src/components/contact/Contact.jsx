import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='footer-col'>
            <h4>Contact Info</h4>
            <ul className='contact-icons'>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                Belhar, Pentech, Cape Town, Western Cape 7493
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href='mailto:info@tnses.org'>info@tnses.org</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                +27 12 345 67-89
              </li>
            </ul>
          </div>
          <ul className='sci'>
            <li><a href=''><i className='fab fa-facebook'></i></a></li>
            <li><a href=''><i className='fab fa-instagram'></i></a></li>
            <li><a href=''><i className='fab fa-twitter'></i></a></li>
            <li><a href=''><i className='fab fa-youtube'></i></a></li>
          </ul>
        </div>

        <div className='contact-form'>
          <h2>Send a Message</h2>
          <div className='form-box'>
            <div className='input-box w50'>
              <input
                type='text'
                name='firstName'
                required
                placeholder='Enter your first name'
              />
              <span>First Name</span>
            </div>
            <div className='input-box w50'>
              <input
                type='text'
                name='lastName'
                required
                placeholder='Enter your last name'
              />
              <span>Last Name</span>
            </div>
            <div className='input-box w50'>
              <input
                type='email'
                name='email'
                required
                placeholder='Enter your email address'
              />
              <span>Email Address</span>
            </div>
            <div className='input-box w50'>
              <input
                type='tel'
                name='mobile'
                required
                placeholder='Enter your mobile number'
              />
              <span>Mobile Number</span>
            </div>
            <div className='input-box w100'>
              <textarea
                name='message'
                required
                placeholder='Write your message here'
              ></textarea>
              <span>Write your message here</span>
            </div>
            <div className='input-box w100'>
              <input type='submit' value='Send' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
