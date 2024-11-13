import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
        <div className='contact-container'>
            <div className='contact-info'>
                <div>
                    <h2>Contact Info</h2>
                    <ul className='info'>
                        <li>
                            <span><i className="fa-solid fa-location-dot"></i></span>
                            <span>Belhar, Pentech, <br />
                            Cape Town, <br />
                            Western Cape <br />
                            7493</span>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-envelope"></i></span>
                            <span><a href='mailto:info@tnses.org'>info@tnses.org</a></span>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-phone"></i> +27 12 345 67-89</span>
                            <span>+27 12 234 56-78</span>
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
                        <input type='text' name='firstName' required />
                        <span>First Name</span>
                    </div>
                    <div className='input-box w50'>
                        <input type='text' name='lastName' required />
                        <span>Last Name</span>
                    </div>
                    <div className='input-box w50'>
                        <input type='email' name='email' required />
                        <span>Email Address</span>
                    </div>
                    <div className='input-box w50'>
                        <input type='tel' name='mobile' required />
                        <span>Mobile Number</span>
                    </div>
                    <div className='input-box w100'>
                        <textarea name='message' required></textarea>
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
}

export default Contact;
