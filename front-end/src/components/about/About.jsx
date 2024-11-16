import React, { useState } from 'react';
import './About.css';
import thumbnailImg from '../../assets/about/thumbnail.jpg';
import video from '../../assets/about/about.mp4';
import { FaPlayCircle } from "react-icons/fa";

const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Set initial state to true to autoplay video

    const handleCloseVideo = () => {
        setIsVideoPlaying(false);
    };

    return (
        <div className="about-section" id="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-left">
                        <h1>About Us</h1>
                        <p>
                            We lower our stress levels, we get to know our pain, we connect better, 
                            we improve our focus, and we're kinder to ourselves. Let us walk you 
                            through the basics in our mindful guide on how to meditate.
                        </p>
                    </div>
                    <div className="about-right">
                        {isVideoPlaying ? (
                            <div className="video-overlay">
                                <div className="video-container">
                                    <video
                                        controls
                                        autoPlay // Autoplay the video
                                        className="video-player"
                                        onEnded={handleCloseVideo} // Close video when it ends
                                    >
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <button onClick={handleCloseVideo} className="video-close-button">
                                        X
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="thumbnail-container">
                                <img
                                    src={thumbnailImg}
                                    alt="video thumbnail"
                                    className="thumbnail"
                                />
                                <button
                                    onClick={() => setIsVideoPlaying(true)}
                                    className="faplaycircle-button"
                                >
                                    <FaPlayCircle className="faplaycircle" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
