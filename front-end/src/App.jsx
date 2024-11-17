import React from 'react';
import Carousel from './components/hero/Carousel';
import Navbar from './components/navbar/Navbar';
import Brands from './components/brands/Brands';
import Services from './components/services/Services';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

const App = () => {
  return (
    <div>
      <Carousel />
      <Navbar />
      <Brands />
      <Services /> 
      <About />
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App