import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, useNavigate } from 'react-router-dom';
import { navbarData } from './navbarData';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <nav className="fixed top-4 w-[95%] left-1/2 -translate-x-1/2 bg-[#0f172a] text-white z-50 shadow-lg rounded-2xl backdrop-blur-xl border border-gray/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <div
                        className="text-2xl sm:text-3xl font-bold text-white tracking-wide cursor-pointer logo-text"
                        onClick={handleNavigate}
                    >
                        {navbarData.heading}
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex text-white font-medium text-base lg:text-lg items-center gap-4 lg:gap-10">
                        {navbarData.navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.href}
                                    className="hover:underline underline-offset-8 decoration-2 hover:text-red-300 hover:drop-shadow-[0_0_8px_#fca5a5] transition-all"
                                    onClick={scrollToTop}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <Link to="/login">
                            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 cursor-pointer">
                                Login
                            </button>
                        </Link>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="focus:outline-none text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <ClearIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#0d1825] text-white shadow-lg transition-all duration-300">
                        <ul className="flex flex-col items-center space-y-6 py-6 font-medium">
                            {navbarData.navLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.href}
                                        className="hover:text-blue-400 transition-colors hover:underline underline-offset-8 decoration-2"
                                        onClick={() => {
                                            setIsOpen(false);
                                            scrollToTop();
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <Link to="/login">
                                <button
                                    className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300"
                                    onClick={() => {
                                        setIsOpen(false);
                                        scrollToTop();
                                    }}
                                >
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