import React from 'react';
import AboutTeam from '../Component/AboutTeam';
import Header from '../Component/Header';
import NavBar from '../Component/NavBar';

const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <AboutTeam/>
        </div>
    );
};

export default Homepage;