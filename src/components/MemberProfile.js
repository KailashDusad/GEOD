import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import useTeamInfo from './TeamInfo';
import '../styles/MemberProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faResearchgate } from '@fortawesome/free-brands-svg-icons';

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
        <Link to="/people" className="back-link" style={{color:'black'}}>&lt; Back to Directory</Link>
        <Row className="mt-4">
          <Col md={4}>
            <img src={require(`../team/${member.image}`)} alt={member.name} className="img-fluid rounded" />
          </Col>
          <Col md={8}>
            <h2>{member.name}</h2>
            <p className='mb-2'>
              {member.email && (
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} style={{height:'35px', width:'35px', marginRight:'10px'}} />
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} style={{height:'35px', width:'35px', marginRight:'10px'}}/>
                </a>
              )}
              {member.gate && (
                <a href={member.gate} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faResearchgate} style={{height:'35px', width:'35px'}} />
                </a>
              )}
            </p>
            <p className='mt-2 mb-2'><strong>Position:</strong> {member.position}</p>
            <p className='mt-2 mb-2'><strong>Research Interest:</strong> {member.description}</p>
            {member.experience1 && (
              <p className='mt-2 mb-4'>
                <FontAwesomeIcon icon={faBriefcase} /> <strong>Experience:</strong>
                <br />{member.experience1}
                {member.experience2 && <><br />{member.experience2}</>}
                {member.experience3 && <><br />{member.experience3}</>}
                {member.experience4 && <><br />{member.experience4}</>}
                {member.experience5 && <><br />{member.experience5}</>}
                {member.experience6 && <><br />{member.experience6}</>}
              </p>
            )}
            {member.education1 && (
              <p className='mt-2 mb-4'>
                <FontAwesomeIcon icon={faGraduationCap} /> <strong>Education:</strong>
                <br />{member.education1}
                {member.education2 && <><br />{member.education2}</>}
                {member.education3 && <><br />{member.education3}</>}
              </p>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MemberProfile;
