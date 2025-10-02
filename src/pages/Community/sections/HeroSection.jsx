import React from "react";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 md:px-20 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Learn Together. Grow Together.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
                Join a thriving developer community where knowledge sharing,
                collaboration, and networking drive your learning journey forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition cursor-pointer">
                    🚀 Join Discussions
                </button>
                <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl shadow-md transition cursor-pointer">
                    👥 Connect with Developers
                </button>
            </div>
        </section>
    );
}