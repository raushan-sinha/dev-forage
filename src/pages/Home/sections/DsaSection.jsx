// src/components/DsaSection.jsx
import React from "react";

export default function DsaSection() {
    const dsaSection = {
        title: "DSA & LeetCode for Interview Prep",
        description:
            "We know how crucial DSA and problem-solving are for cracking interviews at MAANG and top-tier companies. That's why our platform highlights key DSA topics such as:",
        topics: [
            "Arrays",
            "Strings",
            "Linked Lists",
            "Stacks",
            "Queues",
            "Trees",
            "Graphs",
            "Hashing",
            "Recursion",
            "Dynamic Programming",
        ],
        additionalInfo:
            "Alongside theory, we provide handpicked LeetCode challenges that mirror real interview questions, ensuring you gain both speed and accuracy.",
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title & Description */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                        {dsaSection.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                        {dsaSection.description}
                    </p>
                </div>

                {/* Topics */}
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-wrap gap-4 justify-center mb-8">
                        {dsaSection.topics.map((topic, index) => (
                            <span
                                key={index}
                                className="bg-white px-4 py-2 rounded-full text-sm md:text-base font-medium text-gray-700 shadow-sm"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                        {dsaSection.additionalInfo}
                    </p>
                </div>
            </div>
        </section>
    );
}