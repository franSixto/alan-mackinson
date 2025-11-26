"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1] as const
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1] as const
            }
        }
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 + i * 0.1,
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1] as const
            }
        })
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-8 text-white transition-colors duration-300",
                isOpen ? "mix-blend-normal" : "mix-blend-difference"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="relative group z-50 flex items-center gap-3">
                    <img src="/logo.svg" alt="Alan Mackinson" className="h-8 w-8 md:h-10 md:w-10 transition-transform group-hover:scale-105" />
                    <span className="text-xl font-serif tracking-widest font-bold hidden md:block">
                        ALAN MACKINSON
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
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
                                            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                                        />
                                    )}

                                    {hoveredPath === link.href && !isActive && (
                                        <motion.div
                                            layoutId="navbar-hover"
                                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/50"
                                            transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[60] relative text-white focus:outline-none"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop with blur and darkening */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Menu Content */}
                            <motion.div
                                variants={menuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="fixed inset-0 z-50 flex flex-col justify-center items-center md:hidden pointer-events-none"
                            >
                                <ul className="flex flex-col items-center gap-8 pointer-events-auto">
                                    {links.map((link, i) => (
                                        <motion.li
                                            key={link.href}
                                            custom={i}
                                            variants={linkVariants}
                                        >
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "text-4xl font-serif tracking-tight hover:text-gold-200 transition-colors",
                                                    pathname === link.href ? "text-gold-200 italic" : "text-white"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.5 } }}
                                    className="absolute bottom-12 text-xs uppercase tracking-widest text-gray-500"
                                >
                                    Córdoba, Argentina
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
