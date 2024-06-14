import React, { useEffect } from 'react';
import image1 from '../images/img-1.jpg';
import '../styles/Gallery.css';
import MyNavbar from './Navbar';

const Gallery = () => {
  useEffect(() => {
    // Initialize Lightbox2
    if (window.lightbox) {
      window.lightbox.init();
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="grid-gallery">
        {[...Array(18)].map((_, index) => (
          <div className="grid-item" key={index}>
            <a href={image1} data-lightbox="gridImage">
              <img src={image1} alt={`Image ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
