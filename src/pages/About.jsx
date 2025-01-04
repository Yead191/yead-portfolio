import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import aboutLottie from '../assets/about-lottie.json'
import Lottie from 'lottie-react';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <section className="min-h-screen bg-[#0f1629] py-12">
            <Helmet>
                <title>About | Yead Portfolio</title>
            </Helmet>
            <div className="w-8/12 md:w-6/12 mx-auto lg:w-4/12  xl:w-3/12 mb-12 ">
                <p style={{ fontVariant: 'small-caps' }} className="text-2xl lg:text-3xl  text-blue-400 mt-5 bg-white/10 font-semibold border border-blue-400/20 px-10 py-3 rounded-2xl backdrop-blur-md shadow-md my-4 text-center">
                    <Typewriter
                        words={['About Me']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={2000}
                    />
                </p>
            </div>
            <Fade direction="up" duration={1500} triggerOnce>

                <div className=" bg-[#0f1629] border border-blue-500 hover:border-teal-500  backdrop-blur-xl rounded-xl w-11/12 md:w-10/12 mx-auto text-white py-16 flex items-center justify-center">
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 justify-center">
                        <div className="content max-w-2xl flex-1 ">
                            <h2 style={{ fontVariant: 'small-caps' }} className="text-[#4ECCA3] text-2xl font-bold mb-6">Who I Am?</h2>
                            <p className="text-lg leading-relaxed">
                                Hi, I'm Asadur Rahaman Yead, a passionate and dedicated Full-Stack Web Developer with a flair for coding and exploring the latest technologies. I specialize in building dynamic and user-friendly web applications that bridge innovation and functionality. <br /> <br />

                                I am proficient in HTML, CSS, JavaScript, Tailwind, JS DOM, React, React Router, Firebase, MongoDB, JWT, Express.js, and Node.js, allowing me to deliver seamless front-end and robust back-end solutions. <br /> <br />

                                I hold a Bachelor’s degree in Computer Science and Engineering from Daffodil International University, where I laid the foundation for my technical expertise and problem-solving skills. <br /> <br />

                                Beyond coding, I enjoy unwinding with online games like PUBG Mobile, which helps me stay sharp and strategic even in my leisure time. <br /> <br />

                                Let’s create something extraordinary together!


                            </p>
                        </div>
                        <div className="image-container ">
                            <motion.div
                                animate={{ y: [40, -10, 40] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                className=''>
                                <Lottie animationData={aboutLottie}></Lottie>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default About;