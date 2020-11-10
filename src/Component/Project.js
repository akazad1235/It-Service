import React from 'react';
import {Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectFakedata from '../FakeData/ProjectFakedata';

const Project = () => {
    console.log(projectFakedata);

    return (
        <div className="my-5" id="project">
            <h1 className="text-center my-5 font-weight-bold">Our Project</h1>
            <Container>
                <Row>
                    {
                        projectFakedata.map(project => {
                            console.log(project.img);
                            return <>
                                <Col lg={4} xl={4} md={6} sm={12} xm={12} className="my-2 ">
                                    <div className="project-container shadow rounded">
                                        <img className="img-fluid project-img" src={project.img} alt=""/>
                                        <h4 className="my-3 p-3 text-center"><Link to="/projectDetails" className="text-decoration-none">{project.title}</Link> </h4>
                                    </div>
                                </Col>
                            </>
                        })
                    }
                    
                    
                   
                </Row>
                <div className="text-center my-4">
                    <Button className="btn btn-danger btn-lg"><Link to="/viewAllProject" className="text-white text-decoration-none">View All Project</Link></Button> 
                </div>
            </Container>
        </div>
    );
};

export default Project;