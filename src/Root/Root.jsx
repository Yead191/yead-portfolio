import React, { useEffect, useState } from 'react';
import Navbar from '../SharedPage/Navbar';
import Footer from '../SharedPage/Footer';
import { Outlet } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import { motion } from 'framer-motion';

const Root = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    if (loading) {
        return <div className='fixed inset-0 flex items-center justify-center bg-black z-50'>
            <motion.h1
            style={{fontVariant: 'small-caps'}}
                className='text-5xl lg:text-6xl  text-white'
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 0.9, 1.1, 1] }}
                transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
            >
                Yead
            </motion.h1>
        </div>

    }
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