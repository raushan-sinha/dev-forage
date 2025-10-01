import React from "react";

export default function Guidelines() {
    const rules = [
        "Be respectful and inclusive.",
        "Share constructive feedback.",
        "No spam or irrelevant promotions.",
        "Help others grow as you grow.",
    ];

    return (
        <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
                Community Guidelines
            </h2>
            <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                    {rules.map((r, i) => (
                        <li
                            key={i}
                            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            ⚡ {r}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}