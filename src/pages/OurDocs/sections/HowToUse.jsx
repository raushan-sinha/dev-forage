import React from 'react'

const HowToUse = () => {
    //todo: Details -
    const details = [
        { title: 'Explore DevStores', info: 'Browse categories like Testing, UI Kits, State Management, and more.' },
        { title: 'Use Components', info: 'Pick React/Vue components and integrate into your projects instantly.' },
        { title: 'Follow Roadmaps', info: 'Choose a learning path (e.g., Frontend, Full Stack) and progress at your pace.' },
    ];

    return (
        <section className="py-24 bg-[#0b1220] text-white">
            <div className="max-w-5xl mx-auto px-6">

                <h2 className="text-4xl font-semibold mb-12">How to Use DevForage</h2>

                <div className="space-y-10">

                    {details.map((detail, id) => (
                        <div className="flex gap-6" key={id}>
                            <div className="h-10 w-10 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-bold">{id + 1}</div>
                            <div>
                                <h3 className="text-xl font-semibold">{detail.title}</h3>
                                <p className="opacity-70 mt-2">{detail.info}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default HowToUse