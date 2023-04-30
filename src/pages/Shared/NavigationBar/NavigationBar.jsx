
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import React, { useContext } from 'react';

const NavigationBar = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <div className='d-flex'>

                <Button variant="danger">Latest</Button>{' '}
                <Marquee className='text-danger' speed={100} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text.......I can be a React component, multiple React components, or just some text.......
                </Marquee>

            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/category/0'>Home</Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        {user && <FaUserCircle style={{ fontSize: "40px" }}></FaUserCircle>}

                        {user ?
                            <Button variant="outline-secondary">Log Out</Button> :
                            <Link to="/login">
                                <Button variant="outline-secondary">Login</Button>
                            </Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;