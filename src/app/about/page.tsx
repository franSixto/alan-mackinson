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
                        Composer & <br /> Sound <span className="text-gold-200 italic">Artist</span>.
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="text-lg text-gray-400 leading-relaxed space-y-6">
                            <p>
                                Based in Córdoba, Argentina, Alan Mackinson is a composer and sound artist whose work navigates the delicate tension between organic resonance and electroacoustic experimentation.
                            </p>
                            <p>
                                His sonic identity is forged in the intersection of the tangible and the abstract. From the cinematic landscapes of the documentary <em>"Tras un manto de neblinas"</em> to the introspective textures of <em>"Cotidianidad Esquizofónica"</em>, Alan's compositions are immersive narratives that challenge the listener's perception of time and space.
                            </p>
                            <p>
                                Selected for the prestigious <em>Escuela de Composición Electroacústica (JIME)</em>, his work with collectives like <em>Labarte Sonoro</em> and <em>Púrpura Ceniza</em> underscores a commitment to pushing the boundaries of contemporary sound. He treats silence not as an absence, but as a canvas upon which the "schizophonic" reality of modern life is deconstructed and rebuilt.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-gray-900 overflow-hidden">
                                <img src="/Alan2.webp" alt="Alan Mackinson Portrait" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" />
                            </div>
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
                    <h2 className="text-3xl font-serif mb-12">Recognition & Education</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { year: "2023", award: "Original Score", org: "Tras un manto de neblinas" },
                            { year: "2022", award: "Selected Composer", org: "JIME Electroacoustic School" },
                            { year: "2021", award: "Featured Work", org: "Cotidianidad Esquizofónica" },
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
