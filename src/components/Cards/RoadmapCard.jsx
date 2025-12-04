import React from 'react'

const RoadmapCard = ({ title, desc, steps, gradient }) => {
    return (
        <div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6
  transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/20 group"
        >
            {/* Title */}
            <h2 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
                {title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 mt-3 mb-5 leading-relaxed">
                {desc}
            </p>

            {/* Steps */}
            <ul className="space-y-2 mt-4">
                {steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 group-hover:text-white transition">
                        <span className="text-lg">⚡</span> {step}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <button
                className={`w-full mt-6 py-2.5 font-semibold rounded-xl 
    bg-gradient-to-r ${gradient} text-white 
    shadow-md hover:shadow-xl active:scale-95 transition-all cursor-pointer`}
            >
                View Detailed Roadmap
            </button>
        </div>
    )
}

export default RoadmapCard;