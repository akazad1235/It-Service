import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import serviceData from '../FakeData/ServiceFakedata';

const Service = () => {
    return (
        <div className="service-container py-2 " id="service">
                    <h1 className="text-center my-5">Our Service</h1>
                    <Container className="my-5">
                        <Row> 
                            
                            {
                                serviceData.map( service => {
                                    return <>
                                        <Col lg={4} xl={3} md={6} sm={12} xm={12}>
                                            <Card className="my-2">
                                                <Card.Img variant="top" className="service-img my-3 img-fluid" src={service.img} />
                                                <Card.Body>
                                                    <Card.Title className="text-center"><Link to="details" className="text-decoration-none">{service.title}</Link></Card.Title>
                                                    <Card.Text className="text-justify">{service.desc}</Card.Text>
                                                </Card.Body>
                                            </Card> 
                                        </Col>
                                    </>
                                } )
                                
                            }
                            
                           
                            
                            
                        </Row>
                    </Container>
        </div>
    );
};

export default Service;