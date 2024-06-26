import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logoBlack from '../assets/logo_black.png';
import name from '../assets/logo-no-background.png';
import '../styles/Navbar.css';

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
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="research">Research Areas</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/people">People</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/publications">Publications</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/data">Data</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/gallery">Gallery</Nav.Link>
                        <Nav.Link className='hvr-underline-from-center' style={{color:'black', fontSize:'1rem'}} href="/contact" >Contact Us</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
