import React from "react";

export default function FeaturesSection() {
    const features = [
        {
            heading: 'Learn With Roadmaps',
            para: 'Follow structured, AI-powered learning paths tailored for frontend, backend, and full stack developers.'
        },
        {
            heading: 'Share Components',
            para: 'Publish and reuse React components to speed up development and collaborate with peers.'
        },
        {
            heading: 'Grow With Community',
            para: 'Connect with developers worldwide to discuss trends, solve bugs, and improve together.'
        },
    ];

    return (
        <section className="bg-gradient-to-tr from-yellow-100 via-orange-100 to-red-100 py-16 px-8 text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">What We Offer</h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {features.map((feature, idx) => (
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6" key={idx}>
                        <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                            {feature.heading}
                        </h3>
                        <p className="text-gray-700">
                            {feature.para}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}