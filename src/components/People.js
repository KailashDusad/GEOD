import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import Heading from './Heading';
import TeamInfo from './TeamInfo';
const Team = () => {
  return (
    <>
    <Navbar />
    <Heading headingText="Our Team" />
    <Container className="my-5">
      
      <Row>
        {TeamInfo.map((member, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" style={{height:'400px'}} src={member.image} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                <Card.Text>{member.description}</Card.Text>
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

export default Team;
