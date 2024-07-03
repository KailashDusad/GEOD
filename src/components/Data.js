import React from 'react';
import MyNavbar from './Navbar';
// import Dataset from './Dataset';
import useDataset from './Dataset';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Heading from './Heading';
import '../styles/Data.css';
import Footer from './Footer';

const Data = () => {
  const Dataset = useDataset();
  return (
    <>
      <MyNavbar />
      <Heading headingText="Research Datasets" />
      <Container className="my-5">
        <Row className="gy-4">
          {Dataset.map((dataset, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="dataset-card h-100">
                <Card.Img variant="top" src={dataset.image} alt={dataset.title} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{dataset.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Lead: {dataset.lead}</Card.Subtitle>
                  <Card.Text>{dataset.description}</Card.Text>
                  <Button variant="primary" href={`/datasets/${index}`}>View Dataset</Button> {/* Updated href */}
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

export default Data;
