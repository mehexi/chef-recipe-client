import React from 'react';
import NavBar from '../componat/NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        </>
    );
};

export default Home;