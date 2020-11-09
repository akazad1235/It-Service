import React from 'react';
import AboutTeam from '../Component/AboutTeam';
import Blog from '../Component/Blog';
import Client from '../Component/Client';
import Header from '../Component/Header';
import NavBar from '../Component/NavBar';
import Project from '../Component/Project';
import Service from '../Component/Service';
import TeamMember from '../Component/TeamMember';
import Testimonials from '../Component/Testimonials';

const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <AboutTeam/>
            <Service/>
            <Project/>
            <Client/>
            <TeamMember/>
            <Testimonials/>
            <Blog/>
        </div>
    );
};

export default Homepage;