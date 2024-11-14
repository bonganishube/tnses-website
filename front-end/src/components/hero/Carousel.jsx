import { useState, useEffect } from 'react';
import './Carousel.css';
import blueprint from '../../assets/carousel/blueprint.jpg';
import googleEducation from '../../assets/carousel/google-education.jpg';
import readiness from '../../assets/carousel/readiness.jpg';
import blueprintMobile from '../../assets/carousel/blueprint-mobile.jpg';
import googleEducationMobile from '../../assets/carousel/google-education-mobile.jpg';
import readinessMobile from '../../assets/carousel/readiness-mobile.jpg';
import { FaArrowRightLong } from "react-icons/fa6";


const CarouselImage = ({ imageSrc }) => {
  return (
    <div className="carousel-image">
      <img src={imageSrc} alt="carousel" />
    </div>
  );
};

const CarouselImageMobile = ({ imageSrcMobile }) => {
  return (
    <div className="carousel-image-mobile">
      <img src={imageSrcMobile} alt="carousel" />
    </div>
  );
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mobile = [
    {
      image: googleEducationMobile,
    },
    {
      image: blueprintMobile,
    },
    {
      image: readinessMobile,
    },
  ];

  const slides = [
    {
      text: "First slide",
      label: "Google for Education",
      description: "Registration is open!",
      image: googleEducation, // Directly use the imported image
    },
    {
      text: "Second slide",
      label: "Second slide label",
      description: "Build your digital skills.",
      image: blueprint,
    },
    {
      text: "Third slide",
      label: "Third slide label",
      description: "Register before 30 Nov.",
      image: readiness,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Fixed interval of 3 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []); // Empty dependency array ensures interval is set once on mount

  return (
      <div className="carousel-container">
        <div className="carousel-slide">
          <CarouselImage imageSrc={slides[activeIndex].image} />
          <CarouselImageMobile imageSrcMobile={mobile[activeIndex].image} />
          <div className="carousel-controls">
          <button className="carousel-control-prev" onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}>
            &#10094;
          </button>
          <button className="carousel-control-next" onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}>
            &#10095;
          </button>
        </div>
          <div className="carousel-caption">
            <h3>
              {/* {slides[activeIndex].label} */}
              <span className='g-one'>G</span>
              <span className='o-one'>o</span>
              <span className='o-two'>o</span>
              <span className='g-two'>g</span>
              <span className='l'>l</span>
              <span className='e'>e</span>
              <span className='for-education'> for Education</span>
             </h3>
            <p>{slides[activeIndex].description}</p>
            <button>Explore More 
              <FaArrowRightLong className='fa-arrow'/>
            </button>
          </div>
        </div>
      </div>

      
  );
};



export default Carousel;
