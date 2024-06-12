import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logoBlack from '../assets/logo_black.png';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoBlack}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            GEOD
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" active>Home</Nav.Link>
                        <Nav.Link href="#">People</Nav.Link>
                        <Nav.Link href="#">Publication</Nav.Link>
                        <Nav.Link href="#">Data</Nav.Link>
                        <Nav.Link href="#" >Contact Us</Nav.Link>
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
