import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const[navbar, setNavbar] = useState(false)


    const changeBackground = () => {
        console.log(window.scrollY);
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <div className="" >
            <Container className="h-100 ">
                <Navbar expand="lg"   className={navbar ? 'header-nav sticky': 'header-nav'}>
                    <Navbar.Brand href="#home"><h3 className="text-danger font-weight-bold">Tech IT</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#home" className="mx-1 text-white">Home</Nav.Link>
                        <Nav.Link href="#about" className="mx-1 text-white">About</Nav.Link>
                        <Nav.Link href="#service" className="mx-1 text-white">Service</Nav.Link>
                        <Nav.Link href="#project" className="mx-1 text-white">Project</Nav.Link>
                        <Nav.Link href="#client" className="mx-1 text-white">Client</Nav.Link>
                        <Nav.Link href="#team" className="mx-1 text-white">Team</Nav.Link>
                        <Nav.Link href="#testimonials" className="mx-1 text-white">Testimonials</Nav.Link>
                        <Nav.Link href="#blog" className="mx-1 text-white">Blog</Nav.Link>
                        <Nav.Link href="#contact" className="mx-1 text-white">Contact</Nav.Link>
                        <Nav.Link ><NavLink to="/admin" className="text-white btn-outline-danger border rounded mx-2 resume-button d-inline px-3 p-1">Admin</NavLink></Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;