import React from "react";

const team = [
    {
        name: "Raushan Sinha",
        role: "Frontend Developer | Working in DevForage",
        bio: "Passionate about building interactive UIs and empowering learners to create Frontend projects.",
    },
    {
        name: "Pavithr Jain",
        role: "MERN Stack Developer | Working in DevForage",
        bio: "Always available to guide developers with real-time learning insights and solutions.",
    },
];

export default function TeamSection() {
    return (
        <section className="bg-gradient-to-bl from-green-100 via-emerald-200 to-teal-100 py-16 px-8 text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">Meet Our Team</h2>
            <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700">
                            {member.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                        <p className="text-gray-700">{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}