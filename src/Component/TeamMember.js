import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const TeamMember = () => {
    return (
        <div>
            <h1 className="text-center">Our Team</h1>
            <Container className="my-5">
                <Row>
                    <Col lg={3} xl={3} md={6} sm={12} xm={12}>
                    <Card>
                        <Card.Img variant="top" src="https://livedemo00.template-help.com/wt_prod-19259/images/team-01-270x270.jpg" />
                        <div className="social-profile">

                        </div>
                        <Card.Body>
                        <Card.Title>Md. Azad Hosen</Card.Title>
                        <Card.Text>
                            <p>Web Developer</p>
                            <div className="text-center">
                                <Button className="btn btn-danger">View Profile</Button>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={3} xl={3} md={6} sm={12} xm={12}>
                    <Card>
                        <Card.Img variant="top" src="https://livedemo00.template-help.com/wt_prod-19259/images/team-02-270x270.jpg" />
                        <div className="social-profile">
                            
                        </div>
                        <Card.Body>
                        <Card.Title>Md. Azad Hosen</Card.Title>
                        <Card.Text>
                            <p>Web Developer</p>
                            <div className="text-center">
                                <Button className="btn btn-danger">View Profile</Button>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={3} xl={3} md={6} sm={12} xm={12}>
                    <Card>
                        <Card.Img variant="top" src="https://livedemo00.template-help.com/wt_prod-19259/images/team-03-270x270.jpg" />
                        <div className="social-profile">
                            
                        </div>
                        <Card.Body>
                        <Card.Title>Md. Azad Hosen</Card.Title>
                        <Card.Text>
                            <p>Web Developer</p>
                            <div className="text-center">
                                <Button className="btn btn-danger">View Profile</Button>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg={3} xl={3} md={6} sm={12} xm={12}>
                    <Card>
                        <Card.Img variant="top" src="https://livedemo00.template-help.com/wt_prod-19259/images/team-01-270x270.jpg" />
                        <div className="social-profile">
                            
                        </div>
                        <Card.Body>
                        <Card.Title>Md. Azad Hosen</Card.Title>
                        <Card.Text>
                            <p>Web Developer</p>
                            <div className="text-center">
                                <Button className="btn btn-danger">View Profile</Button>
                            </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamMember;