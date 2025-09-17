import React from 'react';
import { roadmapData } from './data/roadmapSectionData';

export default function RoadmapSection() {
    return (
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
                <div className="max-w-7xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        {roadmapData.roadmaps.title}
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                        {roadmapData.roadmaps.description}
                    </p>
                </div>
            </section>
        </>
    );
}