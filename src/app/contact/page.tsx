"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-background text-foreground flex flex-col justify-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">Get in Touch</h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        For commissions, collaborations, or press inquiries, please use the form below or contact us directly.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                                <input type="text" id="name" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-200 focus:outline-none transition-colors text-xl font-serif" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                                <input type="email" id="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-200 focus:outline-none transition-colors text-xl font-serif" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-200 focus:outline-none transition-colors text-xl font-serif resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="bg-white text-black px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-gold-200 transition-colors w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col justify-center space-y-12"
                    >
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Management</h3>
                            <p className="text-2xl font-serif">mgmt@alanmackinson.com</p>
                            <p className="text-gray-400 mt-2">+1 (555) 012-3456</p>
                        </div>

                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Socials</h3>
                            <div className="flex gap-6">
                                <a href="https://instagram.com/alanmackinson" target="_blank" rel="noopener noreferrer" className="hover:text-gold-200 transition-colors flex items-center gap-2">
                                    <Instagram size={24} /> <span className="text-sm">@alanmackinson</span>
                                </a>
                                <a href="https://soundcloud.com/alanmackinson" target="_blank" rel="noopener noreferrer" className="hover:text-gold-200 transition-colors flex items-center gap-2">
                                    <span className="text-sm font-serif">SoundCloud</span>
                                </a>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <p className="text-gray-500 text-sm">
                                Based in Córdoba, Argentina.<br />
                                Available for global collaboration.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
