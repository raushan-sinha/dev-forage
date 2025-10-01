import React from "react";

export default function Features() {
    const features = [
        {
            title: "Discussion Forums",
            desc: "Ask questions, get answers, and join trending discussions.",
        },
        {
            title: "Groups & Channels",
            desc: "Collaborate with developers around interests and projects.",
        },
        {
            title: "Mentor Sessions",
            desc: "Access live Q&A and webinars hosted by industry mentors.",
        },
        {
            title: "Knowledge Sharing",
            desc: "Post blogs, share GitHub repos, and showcase your work.",
        },
        {
            title: "Recognition & Badges",
            desc: "Earn badges for active participation and leadership.",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
                Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{f.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}