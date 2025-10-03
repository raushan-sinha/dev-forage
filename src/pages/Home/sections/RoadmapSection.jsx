// src/components/RoadmapSection.jsx
import React from "react";

export default function RoadmapSection() {
    const roadmaps = {
        title: "Roadmaps That Drive Success",
        description:
            "Every domain comes with detailed roadmaps designed to eliminate confusion and wasted time. Instead of hopping across random tutorials, learners can follow a guided journey — from fundamentals to advanced concepts — reinforced with projects, assignments, quizzes, and peer discussions.",
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="max-w-7xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    {roadmaps.title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                    {roadmaps.description}
                </p>
            </div>
        </section>
    );
}