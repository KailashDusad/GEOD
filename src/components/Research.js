import React from 'react';
import MyNavbar from './Navbar';
// import ResearchData from './ResearchData';
import useReasearch from './ResearchData';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Heading from './Heading';
import '../styles/Research.css'; 
import Footer from './Footer';

const Research = () => {
  const ResearchData = useReasearch();
  return (
    <>
      <MyNavbar />
      <Heading headingText="Our Research Projects" />
      <Container className="my-5">
        <Row className="gy-4">
          {ResearchData.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="research-card h-100">
                {/* <Card.Img variant="top" src={project.image} alt={project.title} className="card-img-top" /> */}
                <Card.Img variant="top" src={require(`../assets/${project.image}`)} alt={project.title} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Lead: {project.lead}</Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />

    </>
  );
};

export default Research;
