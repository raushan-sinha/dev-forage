import React from 'react';

export default function CallTOAction() {
    return (
        <>
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        Ready to Start Your Journey?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                        Join thousands of learners who are already transforming their careers with DevForage.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Get Started Today
                    </button>
                </div>
            </section>
        </>
    );
}