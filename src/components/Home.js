import React, { useEffect, useState } from 'react';
import MyNavbar from './Navbar';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './Footer';
import heroImage from '../assets/campus1.jpg';
import groupPhoto from '../assets/monu5.jpg';
import Loader from './Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getFontSize = () => {
    if (windowWidth >= 1200) {
      return '2rem';
    } else if (windowWidth >= 992) {
      return '1.8rem';
    } else if (windowWidth >= 768) {
      return '1.6rem';
    } else if (windowWidth >= 576) {
      return '1.4rem';
    } else {
      return '1.2rem';
    }
  };

  return (
    <>
      <MyNavbar />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <header className="hero-section text-center">
            <img className="w-100 hero-image" src={heroImage} alt="Campus" />
            <div className="hero-text">
              <h1 style={{ fontSize: getFontSize() }}>GEODynamics Lab</h1>
              <h2 style={{ fontSize: getFontSize() }}>IIT Gandhinagar</h2>
            </div>
          </header>

          <section className="welcome-section text-center my-5">
            <Container>
              <Row>
                <Col>
                  <h2 style={{ fontSize: getFontSize() }}>About Us</h2>
                  <p style={{ fontSize: getFontSize() }}>Our group encompasses students from diverse fields, including Mechanical Engineering, Civil Engineering, Geology, and Geophysics. We engage in cutting-edge research in several areas, such as Seismic Hazard Assessment (Probabilistic Approach), Ground Motion Modelling, Landslide Susceptibility, and Geodynamics Modelling. Through collaborative efforts, we address some of the major challenges related to earthquakes in India, focusing on understanding their uncertainties and perspectives.</p>
                  <p style={{ fontSize: getFontSize() }}>If you are interested in postgraduate studies (M.Tech. and Ph.D.) and have strong interests aligned with our research, we are looking for you.</p>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="group-section">
            <Container>
              <Row>
                <Col className="text-center">
                  <h2 style={{ fontSize: getFontSize() }}>Our Dedicated Team</h2>
                  <p style={{ fontSize: getFontSize() }}>Meet the talented individuals who drive our research forward.</p>
                  <img src={groupPhoto} alt="Group Photo" className="img-fluid rounded-3 group-photo" />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
