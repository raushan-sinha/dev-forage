import React from 'react'
import RoadmapCard from '../../components/Cards/RoadmapCard';
import roadmapData from '../../data/roadmapData.json';

const Roadmap = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white px-6 pt-24 pb-16">
            <div className="max-w-7xl mx-auto">

                {/* Input field for searching Roadmap */}
                <header className='flex flex-col items-center justify-between gap-3 md:flex-row'>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className="text-4xl md:text-5xl font-bold text-center">
                            Career Roadmaps
                        </h1>
                        <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
                            Explore industry-aligned learning tracks engineered for high-impact tech careers.
                        </p>
                    </div>
                    <div>
                        <input type="text" placeholder='Search for anything...' className='border border-2 rounded-xl border-cyan-600 w-90 md:w-100 py-4 p-4 md:py-3 text-base md:text-lg text-white-800 font-mono placeholder-slate-400 bg-transparent outline-none' />
                    </div>
                </header>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {roadmapData.map((track, i) => (
                        <RoadmapCard
                            key={i}
                            {...track} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Roadmap;