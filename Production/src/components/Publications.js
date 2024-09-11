import React, {useEffect, useState } from 'react';
import MyNavbar from './Navbar';
import usePublication from './PublicationData';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import Heading from './Heading';
import '../styles/Publications.css';
import Footer from './Footer';
import Loader from './Loader';

const Publications = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const publicationData = usePublication();
  // const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All");

  // const handleSearch = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  const filteredPublications = publicationData.filter((publication) => {
    // const matchesQuery = publication.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || publication.type === selectedType;
    const matchesYear = selectedYear === "All" || publication.year === parseInt(selectedYear);
    const matchesAuthor = selectedAuthor === "All" || publication.authors.toLowerCase().includes(selectedAuthor.toLowerCase());
    // const matchesAuthor = selectedAuthor === "All" || publication.authors === selectedAuthor;
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
      <Heading headingText="Our Publications" />
      {loading ? (
        <Loader /> 
      ) : (
      <Container className="">
        <Form style={{border:'none'}}>
          <Row className="">
            <Col md={4}>
              <Form.Group controlId="searchType" >
                <Form.Label>Select Type</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  >
                  <option>All</option>
                  {/* Add options dynamically based on publication types */}
                  {[...new Set(publicationData.map((pub) => pub.type))].map((type, index) => (
                    <option key={index}>{type}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="searchYear" >
                <Form.Label>Year</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  >
                  <option>All</option>
                  {[...new Set(publicationData.map((pub) => pub.year))].sort().map((year, index) => (
                    <option key={index}>{year}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="searchAuthor" >
                <Form.Label>Author</Form.Label>
                <Form.Control
                  as = "select"
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
        <Row className="gy-4 mt-4" >
          {filteredPublications.map((publication, index) => (
            <Col key={index} xs={12}>
              <div className="publication-entry">
                <div className="publication-index">{index + 1}.</div>
                <div className="publication-content" style={{ fontSize: `${getFontSize()}` }}>
                  <a href={publication.link} className='' style={{textDecoration:'none', color:'black'}} target="_blank" rel="noopener noreferrer">
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
