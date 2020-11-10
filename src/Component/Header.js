import React from 'react';
import {Button, Col, Container, Row } from 'react-bootstrap';
import bgVideo from '../Assets/video/background.mp4'

const Header = () => {
    return (
        <div className="header-container" id="home">
             <Container className="">
                <Row className="header-box">
                    <Col lg={12} className="text-white mt-5 m-auto">
                        <h1 className="font-weight-bold text-center m-3">Inspirational <span className="text-danger">Technologies</span></h1>
                        <p className="text-center mx-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora corporis alias accusantium. Ex accusantium voluptates, repellendus libero eligendi voluptatum inventore nobis omnis atque tempore dolore placeat necessitatibus? Assumenda, odio velit.</p>
                        <div className="text-center">
                             <Button className="btn btn-danger btn-lg my-3">LEARN  MORE</Button>   
                        </div>
                    </Col>
                </Row>   
           </Container>
           <video autoPlay loop muted className="w-100">
                <source src={bgVideo} type="video/mp4"/>
           </video>
        </div>
    );
};

export default Header;