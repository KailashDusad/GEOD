import React, { useEffect, useState } from 'react';
import '../styles/Gallery.css';
import MyNavbar from './Navbar';
import images from './Images';
import Footer from './Footer';
import Heading from './Heading';
import Loader from './Loader'; 

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.lightbox) {
      window.lightbox.init();
    }
  }, []);

  return (
    <>
      <MyNavbar />
      <Heading headingText="Gallery" />

      {loading ? (
        <Loader /> 
      ) : (
        <div className="grid-gallery">
          {images.map((image, index) => (
            <div className="grid-item" key={index}>
              <a href={image.src} data-lightbox="gridImage">
                <img src={image.src} alt={image.caption} />
              </a>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
