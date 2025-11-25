"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { usePlayerStore } from "@/lib/store/playerStore";

const projects = [
  {
    id: "1",
    title: "The Silent Void",
    category: "Film Score",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2988&auto=format&fit=crop",
    track: {
      id: "t1",
      title: "Void Theme",
      artist: "Alan Mackinson",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder
      cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2988&auto=format&fit=crop"
    }
  },
  {
    id: "2",
    title: "Neon Horizon",
    category: "Album",
    year: "2023",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=3000&auto=format&fit=crop",
    track: {
      id: "t2",
      title: "Night Drive",
      artist: "Alan Mackinson",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Placeholder
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=3000&auto=format&fit=crop"
    }
  },
  {
    id: "3",
    title: "Ethereal",
    category: "Symphony",
    year: "2022",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2970&auto=format&fit=crop",
    track: {
      id: "t3",
      title: "Movement I",
      artist: "Alan Mackinson",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Placeholder
      cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2970&auto=format&fit=crop"
    }
  }
];

export default function Home() {
  const { setTrack } = usePlayerStore();

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative px-6">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          {/* Abstract background placeholder */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1482160549825-59d1b614d1d5?q=80&w=2989&auto=format&fit=crop')] bg-cover bg-center grayscale" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="z-10 text-center"
        >
          <h2 className="text-gold-200 tracking-[0.2em] text-sm uppercase mb-4">Composer & Sound Artist</h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            ALAN MACKINSON
          </h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTrack(projects[0].track)}
            className="group flex items-center gap-3 mx-auto text-sm uppercase tracking-widest border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all"
          >
            <Play size={16} className="fill-current" />
            Listen to Latest
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            Sculpting silence into <span className="text-gold-200 italic">emotion</span>.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Alan Mackinson is a composer whose work transcends traditional genres. Blending orchestral textures with modern electronic soundscapes, he creates auditory experiences that are both intimate and expansive.
          </p>
          <a href="/about" className="inline-flex items-center gap-2 text-white hover:text-gold-200 transition-colors uppercase text-xs tracking-widest border-b border-white/20 pb-1">
            Read Biography <ArrowRight size={14} />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] bg-gray-900 overflow-hidden rounded-sm"
        >
          <img src="https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=2670&auto=format&fit=crop" alt="Alan Mackinson" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </section>

      {/* Selected Works */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h3 className="text-4xl font-serif">Selected Works</h3>
          <a href="/projects" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">View All</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setTrack(project.track)}
            >
              <div className="aspect-square bg-gray-800 mb-4 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Play size={20} className="ml-1" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-serif mb-1 group-hover:text-gold-200 transition-colors">{project.title}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">{project.category} — {project.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-8">Let's create something timeless.</h2>
        <a href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-gold-200 transition-colors">
          Get in touch
        </a>
      </section>
    </div>
  );
}
