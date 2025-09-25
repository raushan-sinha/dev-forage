import React from 'react';
import { offerData } from '../data/offersData';

export default function OfferSection() {
    return (
        <>
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#fcebe0] to-[#e7f5fd]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                            {offerData.offerings.title}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {offerData.offerings.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerData.offerings.categories.map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}