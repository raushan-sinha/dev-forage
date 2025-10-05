// src/components/WelcomeSection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function WelcomeSection() {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                    Welcome to DevForage Learning
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-indigo-200 mb-4">
                    A developer-first Learning Management System built for coding,
                    frameworks, and real-world projects.
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-3xl mb-8">
                    DevForage empowers developers to master programming languages,
                    frameworks, libraries, and AI/ML through structured roadmaps, hands-on
                    courses, and project-based learning. Whether you’re sharpening your
                    frontend, backend, or full-stack skills — this is your launchpad to
                    become a better developer.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
                    {/* Call to Action */}
                    <Link
                        to="/login"
                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap"
                    >
                        Start Building with DevForage
                    </Link>

                    {/* Create React Components */}
                    <Link
                        to="/react-components"
                        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap"
                    >
                        Create own React Components
                    </Link>

                    {/* Chat Community */}
                    <Link
                        to="/chat-developers"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap"
                    >
                        Start Chatting with Developers
                    </Link>
                </div>
            </div>

            {/* Background overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-700/20 via-blue-800/10 to-transparent pointer-events-none"></div>
        </section>
    );
}