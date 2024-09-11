import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoBlack from '../assets/logo_black.png';
import name from '../assets/logo-no-background.png';
import '../styles/Footer.css';
import { FaArrowUp, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <>
        {showScroll && 
            <a href="#top" style={{float:'right'}} id='btn-circle' className="btn btn-floating" role="button">
                <FaArrowUp />
            </a>
        }
        <footer className="footer bg-light">
            <Container>
                <Row className="pt-4">
                    <Col md={6} className="text-md-left">
                        <a href='/'><img
                            alt="name"
                            src={name}
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                        /></a>
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
                    <Col md={5}>
                        <Row>
                            <Col md={4} xs={4}>
                                <h6>Quick links</h6>
                                <div style={{display:'flex'}}>
                                <ul className="list-unstyled">
                                    <li><a className='hvr-underline-from-center-footer' href="/">Home</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/research">Research Areas</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/data">Data</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/publications">Publications</a></li>
                                </ul>
                                <ul className="list-unstyled" style={{marginLeft:'30px'}}>
                                    <li><a className='hvr-underline-from-center-footer' target='_blank' href="https://iitgn.ac.in">IITGN</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/people">People</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/contact">Contact Us</a></li>
                                    <li><a className='hvr-underline-from-center-footer' href="/gallery">Gallery</a></li>
                                </ul>
                                </div>
                            </Col>
                            <Col md={4} xs={4}>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                    <Col>
                    <a href="https://github.com/KailashDusad/geod" target='_blank' style={{textDecoration:'none', color:'black'}}>
                    <span style={{fontSize:'16px', float:'right', clear:'both'}}>Designed & Developed by <i>Kailash Dusad</i> <FaGithub size={20} /></span></a>
                        <p className="mb-0">© 2024 GEOD IITGN. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    );
};

export default Footer;