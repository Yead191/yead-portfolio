import React from 'react';
import yeadImg from '../assets/yead-banner.png';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (

    <div className="md:w-10/12 lg:w-8/12 mx-auto my-12">
      <Helmet>
        <title>Home | Yead Portfolio</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-center items-center  ">
        <Fade direction="up" duration={1500} triggerOnce>


          {/* Text */}
          <div className="text-white flex-1 mt-12 ">
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to my universe
              </span>
            </div>
            <h4 className=' text-2xl md:text-3xl lg:text-4xl  font-bold '>Greetings, Myself</h4>
            <h1 style={{ fontVariant: 'small-caps' }} className="gradient-text text-4xl lg:text-5xl xl:text-6xl font-bold ">Asadur Rahaman Yead</h1>
            <p className="text-2xl lg:text-3xl text-blue-400 mt-5 bg-white/10 border border-blue-400/20 px-10 py-3 rounded-2xl backdrop-blur-md shadow-md my-4">
              <Typewriter
                words={['Front End Developer', 'MERN Stack Developer', 'Full Stack Developer', 'React.js Developer']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </p>


            {/* Description */}
            <div className="relative mb-8 sm:mb-12 max-w-xl">
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                JavaScript lover 🚀 | React Router DOM specialist 🔧 | <br /> Crafting frameworks
                and Coding the future 💻✨
              </p>

              <div className='flex text-4xl gap-4 mt-4'>
                <a href="https://www.facebook.com/asadurrahman.yead.3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className='hover:border-2 border-green-400 rounded-full' />
                </a>
                <a href="https://www.instagram.com/asadur_yead/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className='hover:border-2 border-green-400 rounded-xl' />
                </a>
                <a href="https://www.linkedin.com/in/md-asadur-rahaman-yead/"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <FaLinkedin className='hover:border-2 border-green-400 rounded-lg' />
                </a>
                <a href="https://github.com/Yead191"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className='hover:border-2 border-green-400 rounded-full'></FaGithub>
                </a>
              </div>
            </div>

            <div className='flex gap-2 mt-12'>
              <Link to={'/about'}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                  <span className="relative md:text-xl flex items-center justify-center gap-2 text-white font-medium">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                  </span>
                </span>
              </Link>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href='https://drive.google.com/file/d/1etPrwQe0BDP2SIVR6mZ6mvebZOX3v4W6/view?usp=sharing'
                className="cursor-pointer group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                  <span className="relative flex items-center justify-center gap-2 md:text-xl text-gray-300 font-medium group-hover:text-white ">
                    <span className='inline-flex gap-2'> <FaDownload></FaDownload> Get Resume</span>
                    <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                  </span>
                </span>
              </a>
            </div>

          </div>
        </Fade>


        <motion.div
          animate={{ y: [0, 60, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="relative flex-1 flex justify-center mt-8 md:mt-0">
          <div className="absolute bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full w-[350px] h-[350px]"></div>
          <img
            src={yeadImg}
            alt="Asadur Rahaman Yead"
            className="relative w-[350px] h-[350px] rounded-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
