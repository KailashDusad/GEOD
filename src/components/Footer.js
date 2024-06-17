import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoBlack from '../assets/logo_black.png';
import name from '../assets/logo-no-background.png';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <>
        {/* <footer className="footer bg-light">
            <Container>
                <Row className="pt-4">
                    <Col md={6} className="text-md-left">
                        <img
                            alt="name"
                            src={name}
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                        />
                        <img
                            style={{marginLeft:'7px'}}
                            alt="logo"
                            src={logoBlack}
                            width="50"
                            height="50"
                            className="d-inline-block align-top ml-2"
                        />
                        <p className="mt-2">
                            GEOD,<br />
                            AB-12/406,<br />
                            Indian Institute of Technology Gandhinagar,<br />
                            Palaj, Gandhinagar, Gujarat, PIN - 382355.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={4} xs={6}>
                                <h6>Quick links</h6>
                                <ul className="list-unstyled">
                                    <li><a className='hvr-underline-from-center-footer' href="/">Home</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/research">Research Areas</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/data">Data</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="#">News</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/contact">Contact Us</a></li>
                                </ul>
                            </Col>
                            <Col md={4} xs={6}>
                                <ul className="list-unstyled mt-md-4">
                                    <li><a className='hvr-underline-from-center-footer' href="/iitgn">IITGN</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/publications">Publications</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/people">People</a></li>
                                    <li><a href="/drought-monitor">India Drought Monitor</a></li>
                                    <li><a href="/eflsp">EFLSP (IMD)</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                    <Col>
                        <p className="mb-0">© 2024 GEOD IITGN. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer> */}
        </>
    );
};

export default Footer;
