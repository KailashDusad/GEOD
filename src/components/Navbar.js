import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logoBlack from '../assets/logo_black.png';
import name from '../assets/logo-no-background.png';
import '../styles/Navbar.css';
import { LinkContainer } from 'react-router-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container style={{display:'flex'}}>
            
          <Navbar.Brand href="/">
              <img
                alt=""
                src={name}
                width="100"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            <img
              style={{marginLeft:'7px'}}
              alt=""
              src={logoBlack}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            
            
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/">Home</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/research">Research Areas</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/people">People</Nav.Link>
                        <Nav.Link className="hover-display " style={{ color: 'black', fontSize: '1rem' }} href="/publications">
                          Publications
                          <div title="Dropdown" className='mt-2' id="basic-nav-dropdown">
                            <LinkContainer to="/publications/Conferences">
                              <Nav.Link><span className='hvr-underline-from-center'>Conferences</span></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/publications/Journal%20Articles">
                              <Nav.Link><span className='hvr-underline-from-center'>Journal Articles</span></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/publications/Research%20Letters">
                              <Nav.Link><span className='hvr-underline-from-center'>Research Letters</span></Nav.Link>
                            </LinkContainer>
                          </div>
                        </Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/data">Data</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/gallery">Gallery</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/contact" >Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
