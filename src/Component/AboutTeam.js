import React from 'react';
import { Button,Col, Container, Row } from 'react-bootstrap';

const AboutTeam = () => {
    return (
        <>
           <Container className="my-5">
                <Row>
                    <Col lg={6} xl={6} md={6} sm={12} xm={12}>
                        <img className="img-fluid" src="https://gbksoft.com/blog/wp-content/uploads/2020/06/sw-development-teams.png" alt=""/>
                    </Col>
                    <Col lg={6} xl={6} md={6} sm={12} xm={12}>
                        <div>
                            <h1>Hi, we are <span className="text-danger">Tech IT</span></h1>
                            <p>Tech IT is a team of experts bringing you innovative web and IT solutions that combine captivating design and flawless functionality in our every project.</p>
                            <p>We’re the leading provider of IT services for companies all over the USA. We operate on a managed services model that offers proactive outsourced IT services aswell as design, development, and management services at affordable, consistent rates.</p>
                            <Button className="btn btn-danger my-3">Read More</Button>
                        </div>
                    </Col>
                </Row>
           </Container> 
        </>
    );
};

export default AboutTeam;