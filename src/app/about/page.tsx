"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-background text-foreground">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-none">
                        The Architect <br /> of <span className="text-gold-200 italic">Silence</span>.
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="text-lg text-gray-400 leading-relaxed space-y-6">
                            <p>
                                Alan Mackinson is not just a composer; he is a sonic architect. Born in a small coastal town, his early exposure to the relentless rhythm of the ocean and the stark silence of winter landscapes shaped his unique auditory palette.
                            </p>
                            <p>
                                His work defies easy categorization, sitting comfortably in the liminal space between classical orchestration and avant-garde electronics. He treats silence not as an absence of sound, but as a canvas upon which emotions are painted with delicate precision.
                            </p>
                            <p>
                                "Music is the language we speak when words fail," Alan often says. This philosophy drives every composition, from intimate piano solos to sprawling cinematic scores that have captivated audiences worldwide.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-gray-900 overflow-hidden mb-4">
                                <img src="https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=2670&auto=format&fit=crop" alt="Alan Mackinson Portrait" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-gray-500 text-right">Portrait by Sarah Jenkins</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="border-t border-white/10 pt-20"
                >
                    <h2 className="text-3xl font-serif mb-12">Awards & Recognition</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { year: "2024", award: "Best Original Score", org: "Cannes Film Festival" },
                            { year: "2023", award: "Composer of the Year", org: "International Music Awards" },
                            { year: "2022", award: "Breakthrough Artist", org: "Classical FM" },
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <span className="block text-gold-200 text-sm mb-2">{item.year}</span>
                                <h3 className="text-xl font-medium mb-1 group-hover:text-white transition-colors text-gray-300">{item.award}</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-500">{item.org}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
