import React from "react";

export default function WhyCommunity() {
    const points = [
        "Peer-to-Peer Learning – Exchange ideas and solve challenges.",
        "Collaborative Growth – Build connections with developers worldwide.",
        "Mentorship & Guidance – Learn from industry experts.",
        "Real-World Networking – Expand your professional circle.",
    ];

    return (
        <section className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
                Why Community Matters
            </h2>
            <ul className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {points.map((item, i) => (
                    <li
                        key={i}
                        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}