import React, { useEffect } from 'react';
import '../styles/Gallery.css';
import MyNavbar from './Navbar';
import images from './Images';


const Gallery = () => {
  useEffect(() => {
    if (window.lightbox) {
      window.lightbox.init();
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <div className="grid-gallery">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <a href={image.src} data-lightbox="gridImage">
              <img src={image.src} alt={image.caption} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};


export default Gallery;
