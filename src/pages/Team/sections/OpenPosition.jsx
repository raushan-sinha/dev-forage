import React from 'react'

const OpenPosition = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)'
                }}></div>
                <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to join us?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        We're always looking for talented individuals who share our passion for building great developer tools.
                    </p>
                    <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200 cursor-pointer">
                        View Open Positions
                    </button>
                </div>
            </div>
        </section>
    );
}

export default OpenPosition;