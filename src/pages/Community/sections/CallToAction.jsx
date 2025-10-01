import React from "react";

export default function CallToAction() {
    return (
        <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Be Part of the DevForage Community
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
                Your journey as a developer is better with others by your side.
                Collaborate, share knowledge, and innovate together.
            </p>
            <button className="px-8 py-3 bg-black hover:bg-gray-900 rounded-xl shadow-md transition">
                Join the Community →
            </button>
        </section>
    );
}