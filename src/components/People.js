import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import Heading from './Heading';
import useTeamInfo from './TeamInfo';
import '../styles/Team.css';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Team = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const TeamInfo = useTeamInfo();
  // var newP = '';

  // Separate members into categories
  const professors = TeamInfo.filter(member => member.position === 'Assistant Professor, Earth Sciences');
  const phdStudents = TeamInfo.filter(member => member.position === 'PhD Student');
  const mastersStudents = TeamInfo.filter(member => member.position === 'Masters');
  // const others = TeamInfo.filter(member => !['Assistant Professor, Earth Sciences', 'PhD Student', 'Masters'].includes(member.position));

  const filteredProfessors = professors.filter(member => member.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredPhdStudents = phdStudents.filter(member => member.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredMastersStudents = mastersStudents.filter(member => member.name.toLowerCase().includes(searchTerm.toLowerCase()));
  // const filteredOthers = others.filter(member => member.name.toLowerCase().includes(searchTerm.toLowerCase()));
  // newP = others.position;

  return (
    <>
      <Navbar />
      <Heading headingText="Our Team" />
      {loading ? (
        <Loader />
      ) : (
        <Container className="my-5">
          {/* <Form inline className="justify-content-center mb-4">
            <Form.Control
              type="text"
              placeholder="Search team members"
              className="mr-sm-2"
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-primary" onClick={() => setSearchTerm('')}>Clear</Button>
          </Form> */}
          <div className="team-category">
            <h3>Professors</h3>
            <Row>
              {filteredProfessors.map((member, index) => (
                <Col key={index} xs={12} md={6} className="mb-4">
                  <Card className="team-card">
                    <Link to={`/profile/${member.id}`} id='link'>
                      <Row noGutters>
                        <Col md={4}>
                          <Card.Img variant="top" className="team-card-img" src={require(`../team/${member.image}`)} alt={member.name} />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title className="team-card-title">{member.name}</Card.Title>
                            <Card.Subtitle className="mb-1 text-muted">{member.position}</Card.Subtitle>
                            {/* <Card.Subtitle className="mb-1 text-muted">{member.year}</Card.Subtitle> */}
                            <Card.Text>{member.description}</Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className="team-category">
            <h3>PhD Students</h3>
            <Row>
              {filteredPhdStudents.map((member, index) => (
                <Col key={index} xs={12} md={6} className="mb-4">
                  <Card className="team-card">
                    <Link to={`/profile/${member.id}`} id='link'>
                      <Row noGutters>
                        <Col md={4}>
                          <Card.Img variant="top" className="team-card-img" src={require(`../team/${member.image}`)} alt={member.name} />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title className="team-card-title">{member.name}</Card.Title>
                            <Card.Subtitle className="mb-1 text-muted">{member.position}</Card.Subtitle>
                            {/* <Card.Subtitle className="mb-1 text-muted">{member.year}</Card.Subtitle> */}
                            <Card.Text>{member.description}</Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          {/* <div className="team-category">
            <h3>{newP}</h3>
            <Row>
              {filteredOthers.map((member, index) => (
                <Col key={index} xs={12} md={6} className="mb-4">
                  <Card className="team-card">
                    <Link to={`/profile/${member.id}`} id='link'>
                      <Row noGutters>
                        <Col md={4}>
                          <Card.Img variant="top" className="team-card-img" src={require(`../team/${member.image}`)} alt={member.name} />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title className="team-card-title">{member.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                            <Card.Text>{member.description}</Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div> */}
          <div className="team-category">
            <h3>Masters Students</h3>
            <Row>
              {filteredMastersStudents.map((member, index) => (
                <Col key={index} xs={12} md={6} className="mb-4">
                  <Card className="team-card">
                    <Link to={`/profile/${member.id}`} id='link'>
                      <Row noGutters>
                        <Col md={4}>
                          <Card.Img variant="top" className="team-card-img" src={require(`../team/${member.image}`)} alt={member.name} />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title className="team-card-title">{member.name}</Card.Title>
                            <Card.Subtitle className="mb-1 text-muted">{member.position}</Card.Subtitle>
                            {/* <Card.Subtitle className="mb-1 text-muted">{member.year}</Card.Subtitle> */}
                            <Card.Text>{member.description}</Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          
        </Container>
      )}
      <Footer />
    </>
  );
};

export default Team;
