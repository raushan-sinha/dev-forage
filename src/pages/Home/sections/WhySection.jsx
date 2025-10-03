// src/components/WhySection.jsx
import React from "react";

export default function WhySection() {
    const whyDevForage = {
        title: "Why DevForage?",
        description:
            "Unlike traditional platforms, DevForage is not just about learning — it's about growing with a community. Here, learners interact with mentors, collaborate with peers, and showcase their projects.",
        features: [
            "Roadmaps and career guidance",
            "Advanced tools like forums",
            "Interactive quizzes",
            "Hands-on assignments",
            "Progress trackers",
            "Immersive and result-oriented learning",
        ],
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f1eaff] to-[#ffeded]">
            <div className="max-w-7xl mx-auto">
                {/* Title & Description */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                        {whyDevForage.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                        {whyDevForage.description}
                    </p>
                </div>

                {/* Features */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyDevForage.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Closing Line */}
                    <div className="mt-8 text-center">
                        <p className="text-lg md:text-xl font-medium text-gray-800">
                            Everything is designed to make your learning journey{" "}
                            <span className="text-blue-600 font-semibold">
                                immersive and result-oriented
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}