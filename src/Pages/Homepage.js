import React from 'react';
import AboutTeam from '../Component/AboutTeam';
import Client from '../Component/Client';
import Header from '../Component/Header';
import NavBar from '../Component/NavBar';
import Project from '../Component/Project';
import Service from '../Component/Service';

const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <AboutTeam/>
            <Service/>
            <Project/>
            <Client/>
        </div>
    );
};

export default Homepage;