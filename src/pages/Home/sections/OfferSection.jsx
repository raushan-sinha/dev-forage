// src/components/OfferSection.jsx
import React from "react";

export default function OfferSection() {
    const offerings = {
        title: "What We Offer",
        description:
            "At DevForage, we believe knowledge is best gained when it is well-structured and practical. That's why we offer comprehensive courses, roadmaps, and practice material in the most in-demand areas of technology, including:",
        categories: [
            {
                title: "Programming Languages",
                description:
                    "C, C++, Java, Python, and JavaScript to build your core coding foundation.",
                icon: "💻",
            },
            {
                title: "Frameworks & Libraries",
                description:
                    "React, Angular, Node.js, Django, Bootstrap, TailwindCSS, and many others to make you industry-ready.",
                icon: "⚛️",
            },
            {
                title: "AIML & Data Science",
                description:
                    "Dive deep into Artificial Intelligence, Machine Learning, and Data Science with real-world applications.",
                icon: "🤖",
            },
            {
                title: "DevOps & Cloud",
                description:
                    "Master Docker, Kubernetes, CI/CD pipelines, and cloud platforms to scale projects with ease.",
                icon: "☁️",
            },
            {
                title: "Cyber Security",
                description:
                    "Learn ethical hacking, secure coding, penetration testing, and defense strategies to protect the digital world.",
                icon: "🔐",
            },
            {
                title: "DSA (Data Structures & Algorithms)",
                description:
                    "Strengthen your problem-solving and crack top-level coding interviews.",
                icon: "🧩",
            },
        ],
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#083344]">
            <div className="max-w-7xl mx-auto">
                {/* Title & Description */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {offerings.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        {offerings.description}
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-[#101923] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-4xl mb-4">{category.icon}</div>
                            <h3 className="text-xl md:text-2xl font-semibold text-cyan-500 mb-4 font-mono">
                                {category.title}
                            </h3>
                            <p className="text-white leading-relaxed font-mono">
                                {category.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}