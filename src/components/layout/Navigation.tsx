"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Navigation() {
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 py-6 px-8 mix-blend-difference text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-xl font-serif tracking-widest font-bold relative group">
                    ALAN MACKINSON
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <ul className="flex items-center gap-8">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href} className="relative">
                                <Link
                                    href={link.href}
                                    onMouseEnter={() => setHoveredPath(link.href)}
                                    onMouseLeave={() => setHoveredPath(null)}
                                    className={cn(
                                        "relative text-sm uppercase tracking-widest transition-colors duration-300 px-2 py-1 block",
                                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {link.label}

                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-underline"
                                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-200"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    {hoveredPath === link.href && !isActive && (
                                        <motion.div
                                            layoutId="navbar-hover"
                                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/50"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
