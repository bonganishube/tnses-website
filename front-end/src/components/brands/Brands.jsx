import React from 'react';
import './Brands.css';
import Brand1 from '../../assets/brands/1.svg';
import Brand2 from '../../assets/brands/2.svg';
import Brand3 from '../../assets/brands/3.svg';
import Brand4 from '../../assets/brands/4.svg';
import Brand5 from '../../assets/brands/5.svg';

const Brands = () => {
  return (
    <div className='brands-container'>
      <div className='brands-items'>
        <h1>Organisations we've worked with:</h1>
        <div className='brand-image'>
          {/* Original set of brand images */}
          <img src={Brand4} alt='brand four' />
          <img src={Brand1} alt='brand one' />
          <img src={Brand3} alt='brand three'/>
          <img src={Brand2} alt='brand two' />
          <img src={Brand5} alt='brand five' />
          {/* Duplicate the brand images for seamless scrolling */}
          <img src={Brand4} alt='brand four' />
          <img src={Brand1} alt='brand one' />
          <img src={Brand3} alt='brand three'/>
          <img src={Brand2} alt='brand two' />
          <img src={Brand5} alt='brand five' />
          {/* Duplicate the brand images for seamless scrolling */}
          <img src={Brand4} alt='brand four' />
          <img src={Brand1} alt='brand one' />
          <img src={Brand3} alt='brand three'/>
          <img src={Brand2} alt='brand two' />
          <img src={Brand5} alt='brand five' />
          {/* Duplicate the brand images for seamless scrolling */}
          <img src={Brand4} alt='brand four' />
          <img src={Brand1} alt='brand one' />
          <img src={Brand3} alt='brand three'/>
          <img src={Brand2} alt='brand two' />
          <img src={Brand5} alt='brand five' />
          {/* Duplicate the brand images for seamless scrolling */}
          <img src={Brand4} alt='brand four' />
          <img src={Brand1} alt='brand one' />
          <img src={Brand3} alt='brand three'/>
          <img src={Brand2} alt='brand two' />
          <img src={Brand5} alt='brand five' />
        </div>
      </div>
    </div>
  );
}

export default Brands;
