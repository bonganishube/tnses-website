import React, { useState } from 'react';
import './About.css';
import thumbnailImg from '../../assets/about/thumbnail.jpg'; 
import { FaPlayCircle } from "react-icons/fa";
import video from '../../assets/about/about.mp4'; // Import the video file

const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    };

    const handleCloseVideo = () => {
        setIsVideoPlaying(false);
    };

    return (
        <div className="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-left">
                        {!isVideoPlaying && (
                            <div className="thumbnail-container">
                                <img src={thumbnailImg} alt="video thumbnail" className="thumbnail" />
                                <button onClick={handleVideoPlay} className="faplaycircle-button">
                                    <FaPlayCircle className='faplaycircle' />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="about-right">
                        <h2>About Us</h2>
                        <p>
                            We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our mindful guide on how to meditate.
                        </p>
                    </div>
                </div>

                {isVideoPlaying && (
                    <div className="video-overlay">
                        <div className="video-container">
                            <video
                                controls
                                autoPlay
                                className="video-player"
                                onClick={handleCloseVideo}
                            >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <button onClick={handleCloseVideo} className="video-close-button">
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;
