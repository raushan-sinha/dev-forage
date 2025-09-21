import React from 'react';
import { futureData } from '../data/futureSectionData';

export default function FutureSection() {
    return (
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-700">
                <div className="max-w-7xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        {futureData.future.title}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                        {futureData.future.description}
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                        <p className="text-xl md:text-2xl font-semibold text-yellow-300">
                            {futureData.future.closingMessage}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}