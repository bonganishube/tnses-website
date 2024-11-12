import React, { useState } from 'react';
import thumbnailImg from '../../assets/about/thumbnail.jpg';

const About = () => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true)
    }

    const handleCloseVideo = () => {
        setIsVideoPlaying(false)
    }
  return (
    <div className='about'>
        <div className='about-container'>
            <div className='about-content'>
                <div className='about-left'>
                    {!isVideoPlaying ? (
                        <div className='thumbnail-container'>
                            <img src={thumbnailImg} alt='video thumbnail' className='thumbnail'/>
                        </div>
                    ) : (<div></div>)
                    }
                </div>
                <div className='about-right'>
                    Right
                </div>
            </div>
        </div>
    </div>
  )
}

export default About