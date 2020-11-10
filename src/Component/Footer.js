import React, { Fragment } from 'react';
import {Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-container text-white" id="contact">
            <Container className="py-5">
                <Row>
                    <Col lg={3} xl={3} md={6} sm={12} xm={12}>
                        <h3 className="my-4">About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque iure illo porro aliquam fuga, recusandae vitae harum esse possimus.</p>

                    </Col>
                    <Col lg={3} xl={3} md={6} sm={12} xm={12}>
                        <h3 className="my-4">Links</h3>
                        <li> <a href="#home">Home</a> </li>
                        <li> <a href="#about">About</a> </li>
                        <li> <a href="#service">Service</a> </li>
                        <li> <a href="#project">Project</a> </li>
                        <li> <a href="#team">Team Member</a> </li>
                        <li> <a href="#blog">Leatest News</a> </li>
                     
                    </Col>
                    <Col lg={6} xl={6} md={12} sm={12} xm={12}>
                        <h3 className="my-4">Contact Us</h3>
                        <form>
                   <div className="d-flex">
                   <div className="form-group mr-auto w-100">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Type Your Name"/>
                      
                    </div>
                    <div className="form-group w-100 ml-1">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Type Your email"/>
                      
                    </div>
                   </div>
                    <div class="form-group">
                        <label for="msg">Message</label>
                        <textarea className="form-control" id="msg" placeholder="Tyep your Message"></textarea>
                        
                    </div>
                    <button type="submit" class="btn btn-danger">Send Message</button>
                    </form>

                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;