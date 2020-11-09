import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className="bg-dark" >
            <Container className="h-100 ">
                <Navbar expand="lg"  sticky="top" className="top-0">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;