import { create } from 'zustand';

interface Track {
    id: string;
    title: string;
    artist: string;
    src: string;
    cover?: string;
}

interface PlayerState {
    isPlaying: boolean;
    currentTrack: Track | null;
    volume: number;
    togglePlay: () => void;
    setTrack: (track: Track) => void;
    setVolume: (volume: number) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
    isPlaying: false,
    currentTrack: null,
    volume: 0.5,
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
    setTrack: (track) => set({ currentTrack: track, isPlaying: true }),
    setVolume: (volume) => set({ volume }),
}));
