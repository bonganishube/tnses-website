import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <div className='contact-container'>
        <div className='contact-items'>
          {/* <div className='contact-info'>
            <div>
              <h4>Contact Info</h4>
              <ul className='contact-icons'>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  Belhar, Pentech, Cape Town, Western Cape 7493
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  012 345 67-89
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href='mailto:info@tnses.org'>info@tnses.org</a>
                </li>
              </ul>
            </div>
            <ul className='sci'>
              <li><a href=''><i className='fab fa-facebook'></i></a></li>
              <li><a href=''><i className='fab fa-instagram'></i></a></li>
              <li><a href=''><i className='fab fa-twitter'></i></a></li>
              <li><a href=''><i className='fab fa-youtube'></i></a></li>
            </ul>
          </div> */}
          <div className='contact-us'>
            <h1>Contact Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>

          <div className='contact-form'>
            <h2>Send a Message</h2>
            <div className='form-box'>
              <div className='input-box w50'>
                <input
                  type='text'
                  name='firstName'
                  required
                  placeholder='First Name'
                />
              </div>
              <div className='input-box w50'>
                <input
                  type='text'
                  name='lastName'
                  required
                  placeholder='Last Name'
                />
              </div>
              <div className='input-box w50'>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='Email Address'
                />
              </div>
              <div className='input-box w50'>
                <input
                  type='tel'
                  name='mobile'
                  required
                  placeholder='Mobile Number'
                />
              </div>
              <div className='input-box w100'>
                <textarea
                  name='message'
                  required
                  placeholder='Message'
                ></textarea>
              </div>
              <div className='input-box w100'>
                <input type='submit' value='Send' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
