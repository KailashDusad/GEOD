import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Heading from './Heading';
import usePublication from './PublicationData';
import Loader from './Loader';
import MyNavbar from './Navbar';
import Footer from './Footer';

const Publications = () => {
  const { type } = useParams();
  const [loading, setLoading] = useState(true);
  const publicationData = usePublication();
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredPublications = publicationData.filter((publication) => {
    const matchesType = type.toLowerCase() === "All" || publication.type.toLowerCase().includes(type.toLowerCase());
    const matchesYear = selectedYear === "All" || publication.year === parseInt(selectedYear);
    const matchesAuthor = selectedAuthor === "All" || publication.authors.toLowerCase().includes(selectedAuthor.toLowerCase());
    return matchesType && matchesYear && matchesAuthor;
  });
  function getFontSize() {
    const screenWidth = window.innerWidth;
    let fontSize = "1rem";
    if (screenWidth <= 576) {
      fontSize = "0.8rem";
    } else if (screenWidth <= 768) {
      fontSize = "0.9rem";
    } else if (screenWidth <= 992) {
      fontSize = "1rem";
    } else if (screenWidth <= 1200) {
      fontSize = "1.2rem";
    } else {
      fontSize = "1.4rem";
    }
    return fontSize;
  }

  return (
    <>
      <MyNavbar />
      <Heading headingText={type.charAt(0).toUpperCase() + type.slice(1)} />
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Form style={{ border: 'none' }}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="searchYear">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option>All</option>
                    {[...new Set(publicationData.map((pub) => pub.year))].map((year, index) => (
                      <option key={index}>{year}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="searchAuthor">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedAuthor}
                    onChange={(e) => setSelectedAuthor(e.target.value)}
                  >
                    <option>All</option>
                    {[...new Set(publicationData.flatMap((pub) => pub.authors.split(', ')))].map((author, index) => (
                      <option key={index}>{author}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Row className="gy-4 mt-4">
            {filteredPublications.map((publication, index) => (
              <Col key={index} xs={12}>
                <div className="publication-entry">
                  <div className="publication-index">{index + 1}.</div>
                  <div className="publication-content" style={{ fontSize: `${getFontSize()}` }}>
                    <a href={publication.link} className='' style={{ textDecoration: 'none', color: 'black' }} target="_blank" rel="noopener noreferrer">
                      {publication.title}
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    <Footer />
    </>
  );

  
};

export default Publications;
