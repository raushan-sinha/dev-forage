import React from 'react'

const KeyFeatures = () => {
    //todo: Details -
    const details = [
        { title: 'DevStores', info: 'Curated resources, design kits, libraries, and tools categorized for fast discovery and learning.' },
        { title: 'Framework Components', info: 'Reusable UI and functional components for React, Vue, and more. Helps in prototyping and real-world usage.' },
        { title: 'Learning Roadmaps', info: 'Structured, milestone-driven roadmaps tailored for developers at different career stages.' },
        { title: 'Clean & Responsive UI', info: 'Modern, distraction-free interface optimized for learners.' },
        { title: 'Community Driven', info: 'Encourages user contributions, feedback, and iterative roadmap updates aligned with tech evolution.', colspan: 2 },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-white">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-semibold mb-12">Key Features</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {details.map((detail, id) => (
                        <div className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-xl ${detail.colspan === 2 ? 'md:col-span-2' : ''}`} key={id}>
                            <h3 className="text-2xl font-semibold mb-3">{detail.title}</h3>
                            <p className="opacity-70">{detail.info}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default KeyFeatures