import React from 'react'
import RoadmapCard from '../../components/Cards/RoadmapCard';
import roadmapData from '../../data/roadmapData.json';

const Roadmap = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white px-6 pt-24 pb-16">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
                    Career Roadmaps
                </h1>

                <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto mb-12">
                    Explore industry-aligned learning tracks engineered for high-impact tech careers.
                </p>

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