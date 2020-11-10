import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogFakedata from '../FakeData/BlogData';

const Blog = () => {
    return (
        <div className="my-5" id="blog">
            <h1 className="text-center my-5">Latest News</h1>
            <Container>
                <Row>
                    {
                        blogFakedata.map(data => {
                            return <>
                                <Col lg={4} xl={4} md={6} sm={12} xm={12}>
                                    <Card  className="my-2">
                                        <Card.Img variant="top" src="https://livedemo00.template-help.com/wt_prod-19259/images/landing-it-company-7-570x415.jpg" />
                                        <Card.Body>
                                            <div className="d-flex my-3">
                                                <h6 className="mr-auto badge badge-danger">Techonology</h6>
                                                <h6 className="">by <strong className="text-danger">ak azad</strong></h6>
                                            </div>
                                        <Card.Title className="my-2"><Link to="/blogDetails" className="text-decoration-none">Why Outsourcing IT Services</Link> </Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                            <div className="d-flex my-3">
                                                <p className="mr-auto">15 Nov 2020</p>
                                                <p><i class="far fa-comment-alt"></i> 3</p>
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

export default Blog;