import React, { useState } from "react";
import { Star, Award, Calendar } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const Education = () => {


    const educationData = [
        {
            degree: "BSc. in Computer Science & Engineering",
            school: "Daffodil International University",
            mascot: "📘",
            passingYear: 2024,
            achievements: ["CGPA: 3.54", "Subject: CSE"],
        },

        {
            degree: "Higher Secondary Certificate (HSC)",
            school: "Ideal College, Dhanmondi",
            mascot: "📗",
            passingYear: 2019,
            achievements: ["GPA: 4.55", "Subject: Science"],
        },
        {
            degree: "Secondary School Certificate (SSC)",
            school: "Poura Shahid Smrity Academy",
            mascot: "📘",
            passingYear: 2017,
            achievements: ["GPA: 4.73", "Subject: Science"],
        },
    ];

    return (
        <section className="min-h-screen bg-[#0f1629] py-12">
            <Helmet>
                <title>Education | Yead Portfolio</title>
            </Helmet>
            <div className="w-8/12 md:w-6/12 mx-auto lg:w-4/12  xl:w-3/12 mb-12 ">
                <p style={{ fontVariant: 'small-caps' }} className="text-2xl lg:text-3xl text-blue-400 mt-5 bg-white/10 border border-blue-400/20 px-10 py-3 rounded-2xl backdrop-blur-md shadow-md my-4 text-center">
                    <Typewriter
                        words={['My Education Journey']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <Fade direction="up" duration={1500} triggerOnce>

                <div className="max-w-5xl mx-auto px-4">
                    <div className="space-y-8">
                        {educationData.map((edu, index) => (
                            <div
                                key={index}
                                className={`relative group border-2 rounded-xl transition-all duration-500 border-blue-400 hover:border-teal-500 hover:shadow-lg hover:transform lg:hover:scale-105`}
                            >
                                {/* Main card content */}
                                <div className="relative rounded-lg bg-[#0f1629] p-8 transition-all duration-300 hover:bg-[#1a243a]">
                                    {/* macOS-like window controls on the left */}
                                    <div className="flex justify-start gap-2 absolute top-3 left-3">
                                        <button className="w-2.5 h-2.5 bg-red-500 rounded-full transition-all hover:bg-red-600" />
                                        <button className="w-2.5 h-2.5 bg-yellow-400 rounded-full transition-all hover:bg-yellow-500" />
                                        <button className="w-2.5 h-2.5 bg-green-500 rounded-full transition-all hover:bg-green-600" />
                                    </div>

                                    <div className="mb-2 text-emerald-500 text-sm font-medium tracking-wide">
                                        FEATURED EDUCATION
                                    </div>

                                    {/* Top section */}
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{edu.mascot}</span>
                                                <h3 className="text-2xl font-bold text-slate-200">
                                                    {edu.degree}
                                                </h3>
                                            </div>
                                            <p className="text-lg text-slate-400 flex items-center gap-2">
                                                <Star className="w-5 h-5 text-teal-500" />
                                                {edu.school}
                                            </p>
                                            <p className="text-slate-500 flex items-center gap-2">
                                                <Calendar className="w-4 h-4" /> Passing Year: {edu.passingYear}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mt-6">
                                        <div className="flex flex-wrap gap-2">
                                            {edu.achievements.map((achievement, i) => (
                                                <div
                                                    key={i}
                                                    className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300 flex items-center gap-2 text-sm"
                                                >
                                                    <Award className="w-4 h-4" />
                                                    <span>{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>

        </section>
    );
};

export default Education;
