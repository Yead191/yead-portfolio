import React from 'react';
import Navbar from '../SharedPage/Navbar';
import Footer from '../SharedPage/Footer';
import { Outlet } from 'react-router-dom';
import Snowfall from 'react-snowfall';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[rgb(15_22_41/_var(--tw-bg-opacity,1))] raleway text-[#d1d5dbe6] '>
            <Snowfall />
            <nav className='h-[68px]'>
                <Navbar></Navbar>
            </nav>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;