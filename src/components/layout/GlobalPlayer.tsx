"use client";

import { usePlayerStore } from "@/lib/store/playerStore";
import { Play, Pause, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { Howl } from "howler";

export default function GlobalPlayer() {
    const { isPlaying, currentTrack, volume, togglePlay } = usePlayerStore();
    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        if (currentTrack) {
            if (soundRef.current) {
                soundRef.current.unload();
            }
            soundRef.current = new Howl({
                src: [currentTrack.src],
                html5: true,
                volume: volume,
                onend: () => {
                    // Handle track end (next track or stop)
                    usePlayerStore.setState({ isPlaying: false });
                }
            });

            if (isPlaying) {
                soundRef.current.play();
            }
        }
    }, [currentTrack]);

    useEffect(() => {
        if (soundRef.current) {
            if (isPlaying) {
                soundRef.current.play();
            } else {
                soundRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        if (soundRef.current) {
            soundRef.current.volume(volume);
        }
    }, [volume]);


    if (!currentTrack) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal-900/90 backdrop-blur-md border-t border-white/5 px-6 py-4"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {currentTrack.cover && (
                            <img src={currentTrack.cover} alt={currentTrack.title} className="w-12 h-12 object-cover rounded-sm" />
                        )}
                        <div>
                            <h4 className="text-sm font-medium text-white">{currentTrack.title}</h4>
                            <p className="text-xs text-gray-400">{currentTrack.artist}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={togglePlay}
                            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gold-200 transition-colors"
                        >
                            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-2 w-32">
                        <Volume2 size={16} className="text-gray-400" />
                        <div className="h-1 bg-gray-700 rounded-full flex-1 overflow-hidden">
                            <div className="h-full bg-white w-1/2"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
