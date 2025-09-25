import React from 'react';
import { whyData } from '../data/whyData';

export default function WhySection() {
    return (
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f1eaff] to-[#ffeded] ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                            {whyData.whyDevForage.title}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                            {whyData.whyDevForage.description}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyData.whyDevForage.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-700 text-base md:text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-lg md:text-xl font-medium text-gray-800">
                                Everything is designed to make your learning journey <span className="text-blue-600 font-semibold">immersive and result-oriented</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}