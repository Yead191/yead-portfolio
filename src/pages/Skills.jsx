import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiTailwindcss } from "react-icons/si";
import { BiGitMerge } from "react-icons/bi";
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';

const Skills = () => {
    const cards = [
        {
            icon: <FaJs />,
            title: "JavaScript",
            description:
                "JavaScript is a powerful programming language used to create interactive and dynamic web pages. It allows for client-side scripting, manipulating HTML and CSS, and handling events.",
        },
        {
            icon: <FaReact />,
            title: "React",
            description:
                "React is a JavaScript library developed by Facebook for building fast and interactive user interfaces. It uses reusable components and a virtual DOM to efficiently manage application state and updates.",
        },
        {
            icon: <FaNodeJs />,
            title: "Node.js",
            description:
                "Node.js is a runtime environment that allows JavaScript to be run on the server side. It uses an event-driven, non-blocking I/O model, making it ideal for building scalable and high-performance applications.",
        },
        {
            icon: <SiMongodb />,
            title: "MongoDB",
            description:
                "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is highly scalable and suitable for applications requiring high performance and handling large datasets.",
        },
        {
            icon: <SiExpress />,
            title: "Express.js",
            description:
                "Express.js is a fast, minimal, and flexible Node.js web application framework that provides robust features for web and mobile applications.",
        },
        {
            icon: <SiFirebase />,
            title: "Firebase",
            description:
                "Firebase is a backend-as-a-service platform by Google that offers scalable hosting, authentication, and real-time databases for building modern applications.",
        },
        {
            icon: <BiGitMerge />,
            title: "React Router",
            description:
                "React Router is a library for managing and handling navigation in React applications. It provides dynamic routing capabilities for building single-page applications.",
        },
        {
            icon: <SiTailwindcss />,
            title: "Tailwind CSS",
            description:
                "Tailwind CSS is a utility-first CSS framework for creating custom designs quickly. It provides pre-defined classes to build responsive and modern user interfaces effortlessly.",
        },
    ];
    return (
        <section className="min-h-screen py-12">
            <Helmet>
                <title>Skills | Yead Portfolio</title>
            </Helmet>
            <div className="w-8/12 md:w-6/12 mx-auto lg:w-4/12  xl:w-3/12 mb-12 ">
                <p style={{ fontVariant: 'small-caps' }} className="text-2xl lg:text-3xl  text-blue-400 mt-5 bg-white/10 font-semibold border border-blue-400/20 px-10 py-3 rounded-2xl backdrop-blur-md shadow-md my-4 text-center">
                    <Typewriter
                        words={['Skills', 'What I Do?']}
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
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-10/12  lg:w-8/12 mx-auto ">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-[#0f1629] border border-blue-500 hover:border-teal-500  shadow-md rounded-lg p-6 flex flex-col items-center text-center backdrop-blur-sm transition lg:hover:scale-110 duration-1000 hover:text-white">
                            <div className="text-4xl  mb-4">{card.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                            <p className="">{card.description}</p>
                        </div>
                    ))}
                </div>

            </Fade>
        </section>
    );
};

export default Skills;