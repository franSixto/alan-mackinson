"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { usePlayerStore } from "@/lib/store/playerStore";

const allProjects = [
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
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
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
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
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
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2970&auto=format&fit=crop"
        }
    },
    {
        id: "4",
        title: "Glass Structures",
        category: "Installation",
        year: "2023",
        image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2960&auto=format&fit=crop",
        track: {
            id: "t4",
            title: "Reflections",
            artist: "Alan Mackinson",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
            cover: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2960&auto=format&fit=crop"
        }
    },
    {
        id: "5",
        title: "Midnight Tokyo",
        category: "Album",
        year: "2021",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2787&auto=format&fit=crop",
        track: {
            id: "t5",
            title: "Neon Rain",
            artist: "Alan Mackinson",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            cover: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2787&auto=format&fit=crop"
        }
    },
    {
        id: "6",
        title: "Solstice",
        category: "Film Score",
        year: "2020",
        image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2874&auto=format&fit=crop",
        track: {
            id: "t6",
            title: "Winter Sun",
            artist: "Alan Mackinson",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
            cover: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2874&auto=format&fit=crop"
        }
    }
];

const categories = ["All", "Film Score", "Album", "Symphony", "Installation"];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");
    const { setTrack } = usePlayerStore();

    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-background text-foreground">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-serif mb-8">Discography</h1>

                    <div className="flex flex-wrap gap-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-sm uppercase tracking-widest transition-colors ${filter === cat ? "text-gold-200" : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="group cursor-pointer"
                                onClick={() => setTrack(project.track)}
                            >
                                <div className="aspect-square bg-gray-900 mb-4 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <Play size={24} className="ml-1 text-white" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-serif mb-1 group-hover:text-gold-200 transition-colors">{project.title}</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">{project.category} — {project.year}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
