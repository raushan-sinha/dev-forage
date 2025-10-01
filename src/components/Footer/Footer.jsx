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
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="-mb-4">
                    <h2 className="text-3xl font-bold text-black tracking-wide logo-text cursor-pointer">
                        {footerData.brand.name}
                    </h2>
                    <p className="text-base leading-relaxed">
                        {footerData.brand.description}
                    </p>
                </div>


                {footerData.sections.map((section) => (
                    <div key={section.id}>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {section.title}
                        </h3>
                        {section.links.map((link, idx) => (
                            <ul className="space-y-2">
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                ))}

                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        {footerData.socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                {icons[social.icon]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm">
                {footerData.copyright}
            </div>
        </footer>
    );
}