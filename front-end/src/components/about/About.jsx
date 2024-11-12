import React, { useState } from 'react';
import thumbnailImg from '../../assets/about/thumbnail.jpg'; // Replace with your image path
import { IoArrowForwardCircleSharp, IoPlay } from 'react-icons/io5';

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
                                <button onClick={handleVideoPlay} className="ioplay-button">
                                    <IoPlay className="ioplay" />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="about-right">
                        <h2>Start your journey to mental wellness.</h2>
                        <p>
                            We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our mindful guide on how to meditate.
                        </p>
                        <button>
                            <a href="#contact" className="about-right-button">
                                <span>Get Started</span>
                                <IoArrowForwardCircleSharp />
                            </a>
                        </button>
                    </div>
                </div>

                {isVideoPlaying && (
                    <div className="video-overlay">
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example of YouTube embed, replace with your video URL
                                title="About Video"
                                frameBorder="0"
                                allow="accelerator; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="iframe"
                            ></iframe>
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
