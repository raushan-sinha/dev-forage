import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
            }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
                <div className="text-center space-y-6">
                    <div className="inline-block">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            Meet the DevForage Team
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 sm:gap-4'>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            Built by developers,
                        </h1>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            for developers
                        </span>
                    </div>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
                        We're a team of passionate builders dedicated to creating the best developer tools and experiences.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;