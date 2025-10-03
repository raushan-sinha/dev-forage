import React from "react";
import { footerData } from "./footerData";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const icons = {
    github: <GitHubIcon />,
    linkedin: <LinkedInIcon />,
    twitter: <XIcon />,
    instagram: <InstagramIcon />,
};

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20 border-t border-blue-700">
            {/* Main Footer Layout */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
                {/* Brand */}
                <div className="md:w-1/4">
                    <h2 className="text-3xl font-bold text-white tracking-wide cursor-pointer mb-3">
                        {footerData.brand.name}
                    </h2>
                    <p className="text-base leading-relaxed">
                        {footerData.brand.description}
                    </p>
                </div>

                {/* Sections */}
                <div className="flex flex-1 flex-wrap gap-12 justify-between">
                    {footerData.sections.map((section) => (
                        <div key={section.id}>
                            <h3 className="text-lg font-semibold text-white mb-3">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="hover:text-blue-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4 text-2xl">
                            {footerData.socialLinks.map((social) => (
                                <a
                                    key={social.icon}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    {icons[social.icon]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm">
                {footerData.copyright}
            </div>
        </footer>
    );
}