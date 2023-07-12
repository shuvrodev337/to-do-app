import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='space-y-12'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
        </div>
    );
};

export default Main;