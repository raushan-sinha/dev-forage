import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

//todo: Footer icons -
const icons = {
    github: <GitHubIcon />,
    linkedin: <LinkedInIcon />,
    twitter: <XIcon />,
    instagram: <InstagramIcon />,
};

//todo: Footer Links data -
const footerData = {
    sections: [
        {
            title: "Quick Links",
            links: [
                { name: "Home", href: "/" },
                { name: "DevStores", href: "/devStores" },
                { name: "Components", href: "/components" },
                { name: "Roadmap", href: "/roadmap" },
                { name: "Pricing", href: "/pricing" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", href: "/blog" },
                { name: "Docs", href: "/docs" },
                { name: "Community", href: "/community" },
                { name: "FAQs", href: "/faqs" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Our Team", href: "/team" },
                { name: "Feedback", href: "/feedback" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Help", href: "/help" },
                { name: "Privacy Policy", href: "/privacyPolicy" },
                { name: "Terms", href: "/terms" },
                { name: "Refund Policy", href: "/refund-policy" },
            ],
        },
    ],
    socialLinks: [
        { name: "GitHub", href: "https://github.com/", icon: "github" },
        { name: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
        { name: "Twitter", href: "https://twitter.com/", icon: "twitter" },
        { name: "Instagram", href: "https://twitter.com/", icon: "instagram" }
    ],
    copyright: `© ${new Date().getFullYear()} DevForage. All rights reserved.`,
};

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20 border-t border-blue-700">
            {/* Main Footer Layout */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
                {/* Sections */}
                <div className="flex flex-1 flex-wrap gap-11 justify-between">
                    {footerData.sections.map((section, id) => (
                        <div key={id}>
                            <h3 className="text-lg font-semibold text-white mb-3 underline underline-offset-5 decoration-2">
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
                        <h3 className="text-lg font-semibold text-white mb-3 underline underline-offset-5 decoration-2">
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