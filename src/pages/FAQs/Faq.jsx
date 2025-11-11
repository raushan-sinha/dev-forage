import { useState } from 'react';
import { faqData } from './faqData';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-br from-bg-[#e7f5fd]-900 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6 p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 md:p-6 cursor-pointer transition duration-300 hover:bg-gray-700"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                                    {faq.question}
                                </h3>
                                <span className="text-lg sm:text-xl md:text-2xl">
                                    {openIndex === index ? <RemoveIcon /> : <AddIcon />}
                                </span>
                            </div>
                            {openIndex === index && (
                                <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}