import React, { useEffect, useState } from 'react';
import MyNavbar from './Navbar';
// import Dataset from './Dataset';
import useDataset from './Dataset';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Heading from './Heading';
import '../styles/Data.css';
import Footer from './Footer';
import Loader from './Loader';

const Data = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const Dataset = useDataset();
  const getImagePath = (image) => {
    try {
      return require(`../assets/${image}`);
    } catch (e) {
      return `/public/images/team/${image}`;
    }
  };
  return (
    <>
      <MyNavbar />
      <Heading headingText="Research Datasets" />
      {loading ? (
        <Loader /> 
      ) : (
      // <Container className="my-5">
      //   <Row className="gy-4">
      //     {Dataset.map((dataset, index) => (
      //       <Col key={index} xs={12} md={6} lg={4}>
      //         <Card className="dataset-card h-100">
      //           {/* <Card.Img variant="top" src={dataset.image} alt={dataset.title} className="card-img-top" /> */}
      //           <Card.Img variant="top" src={getImagePath(dataset.image)} alt={dataset.title} className="card-img-top" />
      //           <Card.Body>
      //             <Card.Title>{dataset.title}</Card.Title>
      //             <Card.Subtitle className="mb-2 text-muted">Lead: {dataset.lead}</Card.Subtitle>
      //             <Card.Text>{dataset.description}</Card.Text>
      //             <Button variant="primary" href={`/datasets/${index}`}>View Dataset</Button> {/* Updated href */}
      //           </Card.Body>
      //         </Card>
      //       </Col>
      //     ))}
      //   </Row>
      // </Container>
      <h4 style={{marginLeft:'150px', marginTop:'0px', marginBottom:'20px'}}>Dataset will be updated soon...</h4>
      )}
      <Footer />
    </>
  );
};

export default Data;
