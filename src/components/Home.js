import React from 'react';
import MyNavbar from './Navbar';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './Footer';
import logo from '../assets/logo_black.png';

const Home = () => {
  return (
    <>
      <MyNavbar />
      <header className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <h1>Welcome to Our Research Hub</h1>
              <p>Explore our projects, datasets, publications, and meet our dedicated team.</p>
              <Button as={Link} to="/contact" variant="primary" size="lg">Get in Touch</Button>
            </Col>
            <Col lg={6} className="text-center">
              <img src={logo} alt="Research Hub" style={{height:'300px', width:'300px'}} className="img-fluid rounded-3" />
            </Col>
          </Row>
        </Container>
      </header>
      <Container className="my-5">
        <Row className="gy-4">
          <Col xs={12} md={4}>
            <Card className="info-card h-100">
              <Card.Body className="text-center">
                <Card.Title>Our Research Projects</Card.Title>
                <Card.Text>Discover the innovative projects our team is working</Card.Text>
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
      <Footer />
    </>
  );
};

export default Home;
