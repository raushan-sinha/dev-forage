import React from 'react'
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { navData } from '../project-data/navbarData';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed w-full top-0 left-0 z-50 bg-white-30 backdrop-blur-md shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-black tracking-wide">
                        {navData.heading}
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex space-x-8 text-black font-medium text-lg">
                        {navData.navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className="hover:underline underline-offset-8 decoration-2 hover:text-red-500 transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none"
                        >
                            {isOpen ? <ClearIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
                        </button>
                    </div>
                </div>

                {/* Mobile MenuIcon */}
                {isOpen && (
                    <div className="md:hidden bg-indigo-700/90 backdrop-blur-lg shadow-lg">
                        <ul className="flex flex-col items-center space-y-6 py-6 text-white font-medium">
                            {navData.navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-yellow-300 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}