import React from 'react';
import { useParams } from 'react-router-dom';
import MyNavbar from './Navbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import Dataset from './Dataset';
import useDataset from './Dataset';
import Heading from './Heading';
import '../styles/DatasetDetail.css';
import Footer from './Footer'; 

const DatasetDetail = () => {
  const Dataset = useDataset();
  const { id } = useParams();
  const dataset = Dataset[id];

  return (
    <>
      <MyNavbar />
      <Heading headingText={dataset.title} />
      <Container className="my-5">
        <Row>
          <Col xs={12} md={6}>
            <Card.Img variant="top" src={dataset.image} alt={dataset.title} className="card-img-top1 mb-4" />
          </Col>
          <Col xs={12} md={6}>
            <Card className="detail-card1">
              <Card.Body>
                <Card.Title>{dataset.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Lead: {dataset.lead}</Card.Subtitle>
                <Card.Text>{dataset.description}</Card.Text>
                <Button variant="primary" href={dataset.link}>Download Dataset</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DatasetDetail;
