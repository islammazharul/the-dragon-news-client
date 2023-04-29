import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-primary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('LLLL')}</p>
            </div>
            <div>
                <Container className='d-flex'>
                    <Button variant="danger">Latest</Button>{' '}
                    <Marquee className='text-danger' speed={100} pauseOnHover={true}>
                        I can be a React component, multiple React components, or just some text.......I can be a React component, multiple React components, or just some text.......
                    </Marquee>
                </Container>
            </div>
            <Container className='mt-4'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="outline-secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;