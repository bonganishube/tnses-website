import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

import testimonialOne from "../../assets/testimonials/testimonial-one.jpg";
import testimonialTwo from "../../assets/testimonials/testimonial-two.jpg";
import testimonialThree from "../../assets/testimonials/testimonial-three.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Jane Calathan - Director at Design Garage, Cape Town",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: testimonialOne,
  },
  {
    id: 2,
    name: "John Stevens - Head of Operations at Minc, Cape Town",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: testimonialTwo,
  },
  {
    id: 3,
    name: "Nomonde Mark - CEO at Floss, Cape Town",
    text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: testimonialThree,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true, // Show navigation dots
    arrows: false, // Disable arrows
    infinite: true, // Loop infinitely
    speed: 600, // Slide transition speed
    slidesToShow: 1, // Show one testimonial at a time
    slidesToScroll: 1, // Scroll one at a time
    autoplay: false, // Enable autoplay
    autoplaySpeed: 3000, // Auto transition time (in ms)
    cssEase: "linear", // Transition effect
    fade: true, // Enable fade transition
    pauseOnHover: true, // Pause on hover
    pauseOnFocus: true, // Pause on focus
  };

  return (
    <div className='testimonials-section' id='testimonials'>
      <div className='testimonials-container'>
        <div className='testimonial-section'>
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <div key={id}>
                <div className='testimonial-card'>
                    <img src={img} alt={name} className='testimonial-image' />
                    <div className='testimonial-info'>
                        <h1>
                            Testimonials
                        </h1>
                        <p>“{text}”</p>
                        <h2>{name}</h2>
                    </div>
                    <p className='quotation-mark'>
                        ,,
                    </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
