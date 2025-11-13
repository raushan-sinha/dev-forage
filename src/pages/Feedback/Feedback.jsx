import React, { useState } from 'react';
import HappyEmoji from '../../components/icons/HappyEmoji';
import SadEmoji from '../../components/icons/SadEmoji';

const icons = [
    { icon: <HappyEmoji />, emoji: "😊" },
    { icon: <SadEmoji />, emoji: "😔" }
];

export default function Feedback() {
    const [showEmoji, setShowEmoji] = useState('');

    const addEmoji = (emoji) => {
        setShowEmoji((prev) => (prev + emoji));
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 sm:px-6 md:px-10 py-12 sm:py-16 lg:py-20">
                <h1 className="text-center text-cyan-500 bg-clip-text text-3xl font-bold col-span-6 mb-1">
                    Send Feedback
                </h1>

                <div className="flex justify-center w-full">
                    <textarea
                        className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] max-w-3xl h-36 sm:h-44 md:h-52 lg:h-56 text-black placeholder:text-black-200 border border-purple-400/60 rounded-2xl p-4 sm:p-5 resize-none outline-none duration-300 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 shadow-xl bg-white font-mono"
                        placeholder="Write your feedback here..."
                        id="feedback-textarea"
                        name="feedback"
                        value={showEmoji}
                        onChange={(e) => setShowEmoji(e.target.value)}
                    />
                </div>

                <div className="col-span-6 flex justify-between items-center w-full max-w-3xl md:w-dvh ">
                    <div className="flex gap-3">
                        {icons.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => addEmoji(item.emoji)}
                                className="fill-slate-600 flex justify-center items-center rounded-lg p-3 duration-300 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200 hover:shadow-md group"
                            >
                                {item.icon}
                            </button>
                        ))}
                    </div>
                    <button className="bg-slate-50/80 stroke-slate-600 border border-slate-200 flex items-center justify-center gap-2 rounded-lg p-3 duration-300 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:stroke-blue-200 focus:bg-blue-400 hover:shadow-md group">
                        <svg
                            className="transform transition-transform group-hover:translate-x-1 duration-200"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.11 13.6501L13.69 10.0601"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="font-medium text-slate-600 group-hover:text-slate-800">
                            Send
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}