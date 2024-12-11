import Header from './components/header/Header';
// import Carousel from './components/hero/Carousel';
import Brands from './components/brands/Brands';
import Services from './components/services/Services';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Hero from './components/hero/Hero';
// import Accordion from './components/header/Accordion';


const App = () => {
  return (
    <div>
      <Hero />
      {/* <Carousel /> */}
      <Header />
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