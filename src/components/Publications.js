import React from 'react';
import MyNavbar from './Navbar';
// import publicationData from './PublicationData';
import useReasearch from './PublicationData';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Heading from './Heading';
import '../styles/Publications.css';
import Footer from './Footer';

const Publications = () => {
  const publicationData = useReasearch();
  return (
    <>
      <MyNavbar />
      <Heading headingText="Our Publications" />
      <Container className="my-5">
        <Row className="gy-4">
          {publicationData.map((publication, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="publication-card h-100">
                <Card.Img variant="top" src={publication.image} alt={publication.title} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{publication.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{publication.authors}</Card.Subtitle>
                  <Card.Text><strong>Journal:</strong> {publication.journal}</Card.Text>
                  <Card.Text><strong>Year:</strong> {publication.year}</Card.Text>
                  <Card.Text>{publication.description}</Card.Text>
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

export default Publications;
