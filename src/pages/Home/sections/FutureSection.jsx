// src/components/FutureSection.jsx
import React from "react";

export default function FutureSection() {
    const future = {
        title: "The Future With Us",
        description:
            "Whether you dream of becoming a software engineer, data scientist, AI researcher, DevOps specialist, or cybersecurity expert, DevForage equips you with the right skills, practice, and confidence to achieve your goals.",
        closingMessage:
            "Together, let's forage through the world of development and unlock endless opportunities.",
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-700">
            <div className="max-w-7xl mx-auto text-center text-white">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    {future.title}
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                    {future.description}
                </p>

                {/* Closing Message */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-semibold text-yellow-300">
                        {future.closingMessage}
                    </p>
                </div>
            </div>
        </section>
    );
}