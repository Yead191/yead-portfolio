import React from "react";
import { Github, ExternalLink } from "lucide-react";
import tutorImg from '../assets/projects/tutor.png'
import equipImg from '../assets/projects/equip-mart.png'
import globalImg from '../assets/projects/global-study.png'
import gadgetImg from '../assets/projects/gadget-heaven.png'
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import { motion } from 'framer-motion'
import bistroImg from '../assets/projects/bistro_boss.png'
import parcelImg from '../assets/projects/parcel-ease.png'


const MacOsButtons = () => (
    <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Parcel Ease",
            description:
                "Parcel Ease is a delivery management web application designed to streamline the parcel booking, assignment, and delivery process. This role-based application offers distinct functionalities for users, deliverymen, and admins.",
            tags: ["React Router", "MongoDb", "Node.Js", "Firebase", "Tailwind", "Stripe", "ExpressJs", "JWT"],
            links: {
                github: "https://github.com/Yead191/Parcel-Ease-Client",
                demo: "https://parcel-ease-dc4fa.web.app/",
            },
            image: parcelImg,
            featured: true,
        },
        {
            title: "Bistro Boss",
            description:
                "Bistro Boss Restaurant is a modern restaurant management web application designed for seamless food ordering, cart management, and admin control. This role-based application provides distinct functionalities for users and admins.",
            tags: ["React Router", "MongoDb", "Firebase", "Tailwind", "Stripe", "ExpressJs", "JWT"],
            links: {
                github: "https://github.com/Yead191/bistro-boss-client",
                demo: "https://bistro-boss-76e4b.web.app/",
            },
            image: bistroImg,
            featured: true,
        },
        {
            title: "Tutor-Lagbe?",
            description:
                "TutorLagbe? is a React-based web application that connects users with language tutors from around the globe. Users can explore available tutors, book tutorials, and even add their own tutorials. The platform ensures a secure and seamless user experience through features like Firebase authentication and JWT-based security.",
            tags: ["React Router", "MongoDb", "Firebase", "Tailwind", "ExpressJs", "JWT"],
            links: {
                github: "https://github.com/Yead191/Tutor-Lagbe-client",
                demo: "https://tutor-lagbe-1f6c2.web.app/",
            },
            image: tutorImg,
            featured: true,
        },

        {
            title: "EquipMart - Cricket Equipment Store",
            description:
                "EquipMart is a modern and responsive web application for managing and selling cricket equipment. The application is built using the latest web development technologies and offers features like user authentication, product management, and personalized access controls.",
            tags: ["React Router", "MongoDb", "Firebase", "Tailwind", "ExpressJs", "JavaScript"],
            links: {
                github: "https://github.com/Yead191/equip-mart",
                demo: "https://equi-sports-c93e1.web.app/",
            },
            image: equipImg,
            featured: false,
        },
        {
            title: "Global Study",
            description:
                "Global Study is a platform dedicated to assisting students in exploring opportunities to study abroad. With detailed information about top universities, countries, and available programs, we aim to make studying abroad accessible and straightforward.",
            tags: ["React Router", "Firebase", "Tailwind", "JavaScript"],
            links: {
                github: "https://github.com/Yead191/global-study",
                demo: "https://global-study-yead-a9.netlify.app/",
            },
            image: globalImg,
            featured: false,
        },
        {
            title: "Gadget Heaven",
            description:
                "Gadget Heaven is an e-commerce platform dedicated to the latest and greatest in tech gadgets.",
            tags: ["React Router", "Tailwind", "JavaScript", "APIs"],
            links: {
                github: "https://github.com/Yead191/gadget-heaven-a8",
                demo: "https://gadget-heaven-by-yead-a8.netlify.app/",
            },
            image: gadgetImg,
            featured: false,
        },
    ];

    return (
        <div className=" min-h-screen bg-[#0f1629] p-8 text-slate-100">
            <Helmet>
                <title>Projects | Yead Portfolio</title>
            </Helmet>
            <div className="flex flex-col items-center space-y-6 mb-16">
                <div className="relative">
                    <h2 style={{ fontVariant: 'small-caps' }} className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
                        My Demo Projects
                    </h2>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 blur-xl rounded-xl" />
                </div>
                <div className="animate-pulse mt-4 w-6 h-6 border-4 border-dashed border-cyan-400 rounded-full" />
            </div>


            <motion.div
                initial={{ y: '100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="max-w-7xl mx-auto space-y-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg "
                    >
                        {/* Image Section */}
                        <div className="md:w-1/2 overflow-hidden rounded-lg ">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full  w-full overflow-hidden object-cover   transition-transform duration-500"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="md:w-1/2 h-full bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500  group-hover:shadow-2xl p-6 lg:hover:scale-105 ">
                            <MacOsButtons />

                            <div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        {
                                            project?.featured &&
                                            <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                                                Featured Project
                                            </div>
                                        }
                                        <h1 className="text-slate-100 text-3xl font-bold">
                                            {project.title}
                                        </h1>
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.links.github}
                                            className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={22} />
                                        </a>
                                        <a
                                            href={project.links.demo}
                                            className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={22} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col h-full">
                                <p className="text-slate-300 mb-6 text-lg leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

        </div>
    );
};

export default Projects;
