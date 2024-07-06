import React from 'react';
import MyNavbar from './Navbar';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './Footer';
import heroImage1 from '../assets/campus1.jpg';
import heroImage2 from '../assets/campus9.jpg';
import heroImage3 from '../assets/campus2.png';
import groupPhoto from '../assets/monu5.jpg';

const Home = () => {
  return (
    <>
      <MyNavbar />
      <header className="hero-section">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={heroImage1} alt="First slide" />
            <Carousel.Caption>
              <h3>Welcome to Our Research Hub</h3>
              <p>Explore our projects, datasets, publications, and meet our dedicated team.</p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="hero-button">Get in Touch</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={heroImage2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Innovative Research Projects</h3>
              <p>Discover the innovative projects our team is working on.</p>
              <Button as={Link} to="/research" variant="primary" size="lg" className="hero-button">Learn More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={heroImage3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Comprehensive Datasets</h3>
              <p>Access comprehensive datasets used in our research.</p>
              <Button as={Link} to="/data" variant="primary" size="lg" className="hero-button">View Datasets</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
      <Container className="my-5">
        <Row className="gy-4">
          <Col xs={12} md={4}>
            <Card className="info-card h-100">
              <Card.Body className="text-center">
                <Card.Title>Our Research Projects</Card.Title>
                <Card.Text>Discover the innovative projects our team is working on.</Card.Text>
                <Button as={Link} to="/research" variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="info-card h-100">
              <Card.Body className="text-center">
                <Card.Title>Datasets</Card.Title>
                <Card.Text>Access comprehensive datasets used in our research.</Card.Text>
                <Button as={Link} to="/data" variant="primary">View Datasets</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="info-card h-100">
              <Card.Body className="text-center">
                <Card.Title>Meet the Team</Card.Title>
                <Card.Text>Get to know the experts behind our research projects.</Card.Text>
                <Button as={Link} to="/people" variant="primary">Meet the Team</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <section className="group-section">
        <Container>
          <Row>
            <Col className="text-center">
              <h2>Our Dedicated Team</h2>
              <p>Meet the talented individuals who drive our research forward.</p>
              <img src={groupPhoto} alt="Group Photo" className="img-fluid rounded-3 group-photo" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
