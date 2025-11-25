import React from 'react'

const DocsHero = () => {
    return (
        <section className="w-full py-28 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_65%)]"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold mb-6 tracking-tight">
                    DevForage Documentation
                </h1>
                <p className="text-xl opacity-80 leading-relaxed max-w-2xl mx-auto">
                    A future-ready learning ecosystem empowering developers with curated
                    resources, reusable components, and structured roadmaps.
                </p>
            </div>
        </section>
    )
}

export default DocsHero;