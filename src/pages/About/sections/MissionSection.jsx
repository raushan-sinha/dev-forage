import React from "react";

export default function MissionSection() {
    return (
        <section className="bg-gradient-to-r from-sky-100 via-blue-200 to-indigo-100 text-gray-800 py-16 px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                Our mission is to bridge the gap between learning and building. We aim
                to create a space where developers can access practical roadmaps,
                collaborate on React components, and gain insights to elevate their
                careers. DevForage isn’t just a platform — it’s a launchpad for your
                developer journey.
            </p>
        </section>
    );
}