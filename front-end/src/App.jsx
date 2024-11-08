import React from 'react';
import Carousel from './components/hero/Carousel';
import Navbar from './components/navbar/Navbar';
import Brands from './components/brands/Brands';
import Services from './components/services/Services';
// import About from './components/about/About';
// import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Carousel />
      <Navbar />
      {/* <Hero /> */}
      <Brands />
      <Services />
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App