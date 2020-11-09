import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import serviceData from '../FakeData/ServiceFakedata';

const Service = () => {

        const [service, setService] = useState(serviceData);
        console.log(service);
        console.log(service.title);
        
    

    return (
        <div className="service-container py-2 ">
                    <h1 className="text-center my-5">Our Service</h1>
                    <Container className="my-5">
                        <Row> 
                            
                            {
                                serviceData.map( service => {
                                    console.log(service.title);
                                    console.log(service.img);
                                    return <>
                                        <Col lg={3} xl={3} md={6} sm={12} xm={12}>
                                            <Card>
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