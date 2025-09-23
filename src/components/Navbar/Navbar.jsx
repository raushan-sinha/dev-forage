import React from 'react'
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, useNavigate } from 'react-router-dom';
import { navbarData } from './navbarData';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    //TODO: Navbar Logo to Home Page -
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <>
            <nav className="bg-[#101923] fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-[0_0px_2px_#38bdf8]">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-black tracking-wide logo-text cursor-pointer" onClick={handleNavigate}>
                        {navbarData.heading}
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex space-x-8 text-white font-medium text-lg flex-row items-center gap-3">
                        {navbarData.navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.href}
                                    className="hover:underline underline-offset-8 decoration-2 hover:text-red-300 hover:drop-shadow-[0_0_8px_#fca5a5] transition-all">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <Link to="/login">
                            <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300">
                                Login
                            </button>
                        </Link>
                    </ul>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none text-white"
                        >
                            {isOpen ? <ClearIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
                        </button>
                    </div>
                </div>

                {/* Mobile MenuIcon */}
                {isOpen && (
                    <div className="md:hidden bg-[#c6def6] backdrop-blur-lg shadow-lg">
                        <ul className="flex flex-col items-center space-y-6 py-6 text-black font-medium">
                            {navbarData.navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-blue-500 transition-colors hover:underline underline-offset-8 decoration-2"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <Link to="/login">
                                <button onClick={() => setIsOpen(false)} className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300">
                                    Login
                                </button>
                            </Link>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}