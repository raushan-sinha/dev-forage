import React from "react";
import OfferSectionCard from "../../../components/Cards/OfferSectionCard";
import ProgrammingImages from '../../../assets/programming-img.jpg';
import FrameworkImages from '../../../assets/frameworks.jpg';
import AIMLImages from '../../../assets/aiml.jpg';
import DevOpsImages from '../../../assets/devops.jpg';
import CyberImages from '../../../assets/cybersecurity.jpg';
import DSAImages from '../../../assets/das.jpg';

export default function OfferSection() {
    const offerings = {
        title: "What We Offer",
        description:
            "At DevForage, we believe knowledge is best gained when it is well-structured and practical. That's why we offer comprehensive courses, roadmaps, and practice material in the most in-demand areas of technology, including:",
        categories: [
            {
                image: ProgrammingImages,
                alt: "Programming languages illustration showing C, C++, Java, Python, and JavaScript",
                title: "Programming Languages",
                description:
                    "C, C++, Java, Python, and JavaScript to build your core coding foundation.",
                icon: "💻",
            },
            {
                image: FrameworkImages,
                alt: "Frameworks and libraries illustration including React, Angular, Node.js, and Django",
                title: "Frameworks & Libraries",
                description:
                    "React, Angular, Node.js, Django, Bootstrap, TailwindCSS, and many others to make you industry-ready.",
                icon: "⚛️",
            },
            {
                image: AIMLImages,
                alt: "Artificial Intelligence and Machine Learning illustration with data science concepts",
                title: "AIML & Data Science",
                description:
                    "Dive deep into Artificial Intelligence, Machine Learning, and Data Science with real-world applications.",
                icon: "🤖",
            },
            {
                image: DevOpsImages,
                alt: "DevOps and cloud computing illustration with Docker, Kubernetes, and CI/CD pipelines",
                title: "DevOps & Cloud",
                description:
                    "Master Docker, Kubernetes, CI/CD pipelines, and cloud platforms to scale projects with ease.",
                icon: "☁️",
            },
            {
                image: CyberImages,
                alt: "Cyber security illustration representing ethical hacking and secure systems",
                title: "Cyber Security",
                description:
                    "Learn ethical hacking, secure coding, penetration testing, and defense strategies to protect the digital world.",
                icon: "🔐",
            },
            {
                image: DSAImages,
                alt: "Data structures and algorithms illustration for coding interview preparation",
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
                <div className="mx-auto grid max-w-6xl place-items-center grid-cols-1 gap-15 sm:grid-cols-2 lg:grid-cols-3">
                    {offerings.categories.map((category, index) => (
                        <OfferSectionCard key={index} cards={[category]} />
                    ))}
                </div>
            </div>
        </section>
    );
}