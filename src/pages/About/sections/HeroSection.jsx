import React from 'react'
import { heroData } from '../data/heroSectionData';

export default function HeroSection() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700"></div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {heroData.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                        {heroData.hero.subtitle}
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                        <p className="text-base md:text-lg">
                            Our platform is built with one simple mission: <span className="font-semibold text-yellow-300">{heroData.hero.mission}</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}