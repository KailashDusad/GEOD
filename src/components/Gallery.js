import React, { useEffect } from 'react';
import '../styles/Gallery.css';
import MyNavbar from './Navbar';
import images from './Images';
import Footer from './Footer';
import Heading from './Heading';


const Gallery = () => {
  useEffect(() => {
    if (window.lightbox) {
      window.lightbox.init();
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <Heading headingText="Gallery" />
      
      <div className="grid-gallery">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <a href={image.src} data-lightbox="gridImage">
              <img src={image.src} alt={image.caption} />
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};


export default Gallery;
