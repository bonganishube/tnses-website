import React from 'react';
import './Contact.css';
import contactImg from '../../assets/services/blueprint.jpg';

const Contact = () => {
  return (
    <section>
        <div className='contact-container'>
            <div className='contact'>
                <div>
                    <h2>
                        Contact Info
                    </h2>
                    <ul className='info'>
                        <li>
                            <span><img src={contactImg} alt=''/></span>
                            <span>Belhar, Pentech, <br></br>
                            Cape Town, <br></br>
                            Western Cape <br></br>
                            7493</span>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-envelope"></i></span>
                            <span><a href = 'mailto:info@tnses.org'>info@tnses.org</a></span>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-phone"></i>+27 12 345 67-89</span>
                            <span>+27 12 234 56-78</span>
                        </li>
                    </ul>
                    <ul className ='sci'>
                        <li><a href=''><i className='fab brands fa-facebook'></i></a></li>
                        <li><a href=''><i className='fab brands fa-instagram'></i></a></li>
                        <li><a href=''><i className='fab brands fa-twitter'></i></a></li>
                        <li><a href=''><i className='fab brands fa-youtube'></i></a></li>
                    </ul>
                </div>
            </div>
            <div className='contact-form'>
                <h2>
                    Send a Message
                </h2>
                <div className='form-box'>
                    <div className='input-box'>
                        <input type='text' name='' required>
                        </input>
                        <span>First Name</span>
                    </div>
                    <div className='input-box'>
                        <input type='text' name='' required></input>
                        <span>Last Name</span>
                    </div>
                    <div className='input-box'>
                        <input type='text' name='' required></input>
                        <span>Email Address</span>
                    </div>
                    <div className='input-box'>
                        <input type='text' name='' required></input>
                        <span>Mobile Number</span>
                    </div>
                    <div className='input-box-message'>
                        <textarea name='' required></textarea>
                        <span>Write your message here</span>
                    </div>
                    <div className='input-box'>
                        <input type='submit' value='send'></input>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact