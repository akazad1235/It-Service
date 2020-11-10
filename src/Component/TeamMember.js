import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import TeamMemberFakedata from '../FakeData/TeamMemberFakedata';

const TeamMember = () => {
    return (
        <div id="team">
            <h1 className="text-center">Our Team</h1>
            <Container className="my-5">
                <Row>
                    {
                       TeamMemberFakedata.map(member=> {
                           return <>
                            <Col lg={3} xl={3} md={6} sm={12} xm={12}>
                                <Card>
                                    <Card.Img variant="top" src={member.img} alt="" />
                                    <div className="social-profile">

                                    </div>
                                    <Card.Body>
                                        <Card.Title>{member.name}</Card.Title>
                                    <Card.Text>
                                         <p>{member.designation}</p>
                                        <div className="text-center">
                                            <Button className="btn btn-danger">View Profile</Button>
                                        </div>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                           </>
                       }) 
                    }
                    
           

                </Row>
            </Container>
        </div>
    );
};

export default TeamMember;