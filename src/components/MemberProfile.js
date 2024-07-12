import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import useTeamInfo from './TeamInfo';
import '../styles/MemberProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const MemberProfile = () => {
  const { id } = useParams();
  const TeamInfo = useTeamInfo();
  const member = TeamInfo.find(m => m.id === parseInt(id));

  if (!member) {
    return (
      <>
        <Navbar />
        <Container className="my-5">
          <Link to="/people" className="back-link">&lt; Back to Directory</Link>
          <h2>Member not found</h2>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Link to="/people" className="back-link">&lt; Back to Directory</Link>
        <Row className="mt-4">
          <Col md={4}>
            <img src={require(`../team/${member.image}`)} alt={member.name} className="img-fluid rounded" />
          </Col>
          <Col md={8}>
            <h2>{member.name}</h2>
            <p><strong>Position:</strong> {member.position}</p>
            <p><strong>Research Interest:</strong> {member.description}</p>
            <p>
              <FontAwesomeIcon icon={faGraduationCap} /> <strong>Education:</strong>
              <br />{member.education1}
              <br />{member.education2}
              <br />{member.education3}
            </p>
            <p>
              <FontAwesomeIcon icon={faBriefcase} /> <strong>Experience:</strong>
              <br />{member.experience1}
              <br />{member.experience2}
              <br />{member.experience3}
              <br />{member.experience4}
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>
              <a href={`mailto:${member.email}`} style={{ textDecoration: 'none', color: 'blue' }}> {member.email}</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} /> <strong>LinkedIn:</strong>
              <a href={member.linkedin} style={{ textDecoration: 'none', color: 'black' }}> {member.linkedin}</a>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MemberProfile;
