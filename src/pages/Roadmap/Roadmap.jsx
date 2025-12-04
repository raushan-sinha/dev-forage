import React from 'react'
import RoadmapCard from '../../components/Cards/RoadmapCard';

//todo: Implement Roadmap details for each Development Track -
const tracks = [
    {
        title: "Full Stack Developer",
        desc: "Master end-to-end engineering across frontend, backend, and deployments.",
        gradient: "from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6]",
        steps: ["HTML/CSS/JS", "React", "Node.js", "Databases", "Auth + APIs", "Deployments"],
    },
    {
        title: "DevOps Engineer",
        desc: "Design and automate cloud-native infrastructure with modern tooling.",
        gradient: "from-[#22c55e] via-[#16a34a] to-[#0d9488]",
        steps: ["Linux", "GitOps", "Docker", "Kubernetes", "AWS/GCP/Azure", "Monitoring"],
    },
    {
        title: "AI Engineer",
        desc: "Build intelligent systems, train models, and deploy ML pipelines.",
        gradient: "from-[#a855f7] via-[#ec4899] to-[#f97316]",
        steps: ["Python", "ML Basics", "Deep Learning", "LLMs", "Vector DBs", "MLOps"],
    },
];

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
                    {tracks.map((track, i) => (
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