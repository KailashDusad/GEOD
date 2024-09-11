import React, { useEffect, useState } from 'react';
import MyNavbar from './Navbar';
import useResearch from './ResearchData';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Heading from './Heading';
import '../styles/Research.css';
import Footer from './Footer';
import Loader from './Loader';

const Research = () => {
  const [loading, setLoading] = useState(true);
  const [showFullText, setShowFullText] = useState(new Array(useResearch().length).fill(false));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  function getFontSize() {
    const screenWidth = window.innerWidth;
    let fontSize = "0.9rem";
    if (screenWidth <= 576) {
      fontSize = "0.7rem";
    } else if (screenWidth <= 768) {
      fontSize = "0.8rem";
    } else if (screenWidth <= 992) {
      fontSize = "0.9rem";
    } else if (screenWidth <= 1200) {
      fontSize = "1.1rem";
    } else {
      fontSize = "1.3rem";
    }
    return fontSize;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const researchData = useResearch();
  const getImagePath = (image) => {
    try {
      return require(`../assets/${image}`);
    } catch (e) {
      return `/public/images/team/${image}`;
    }
  };
  const toggleText = (index) => {
    setShowFullText((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const formatText = (text, showFull) => {
    const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
    const truncationLength = windowWidth < 768 ? 400 : 800;

    if (showFull) {
      return paragraphs.map((paragraph, idx) => <p key={idx} className="paragraph">{paragraph}</p>);
    }

    const truncatedText = paragraphs.join(' ').substring(0, truncationLength);
    return (
      <>
        {truncatedText}
        {truncatedText.length < text.length && '...'}
      </>
    );
  };
  

  return (
    <>
      <MyNavbar />
      <Heading headingText="Our Research Projects" />
      {loading ? (
        <Loader />
      ) : (
        <Container className="my-5">
          <Row className="gy-4">
            {researchData.map((project, index) => (
              <Col key={index} xs={12}>
                <Card className="research-card h-100 shadow-sm">
                  <div className="card-content">
                    <Card.Img 
                      variant="left" 
                      src={getImagePath(project.image)} 
                      alt={project.title} 
                      className="card-img-left"
                    />
                    <Card.Body>
                      <Card.Title className="text-primary" style={{ fontSize: `${getFontSize()}`}}>{project.title}</Card.Title>
                      <Card.Text className="text-justify" style={{ fontSize: `${getFontSize()}` }}>
                        {formatText(project.description, showFullText[index])}
                      </Card.Text>
                      {project.description.length > (windowWidth < 768 ? 400 : 800) && (
                        <Button variant="link" style={{ textDecoration: 'none', backgroundColor: 'blue', color: 'white', fontWeight: '500' }} onClick={() => toggleText(index)}>
                          {showFullText[index] ? 'Show less' : 'Read more'}
                        </Button>
                      )}
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default Research;
