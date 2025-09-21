import React from 'react';
import { welcomeData } from '../data/welcomeData';

export default function WelcomeSection() {
    return (
        <>
            <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                        {welcomeData.title}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl font-medium text-indigo-200 mb-4">
                        {welcomeData.subtitle}
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-3xl mb-8">
                        {welcomeData.description}
                    </p>
                    <a
                        href={welcomeData.ctaLink}
                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                    >
                        {welcomeData.ctaText}
                    </a>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-700/20 via-blue-800/10 to-transparent pointer-events-none"></div>
            </section>
        </>
    );
}