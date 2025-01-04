import React, { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.send(
                "service_nkk37bh",
                "template_7hx8mpf",
                formData,
                "1imU4eav_aXPPbbtx"
            );

            if (result.text === "OK") {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            }
        } catch (error) {
            setStatus("Failed to send the message. Please try again.");
            console.error("EmailJS error:", error);
        }
    };

    return (
        <main className="pt-20 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen">
            <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ x: '-50vh', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    Have a question or want to work together? Drop us a message!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-400">yead191@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-gray-400">+8801624343171</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-pink-500/10 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Location</h3>
                                        <p className="text-gray-400">Lakshmipur, Chittagong, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ x: '100vh', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({ ...formData, subject: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            placeholder="Your Message"
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>

                            {/* Status Message */}
                            {status && (
                                <div className={`mt-4 text-center ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                                    <p>{status}</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
