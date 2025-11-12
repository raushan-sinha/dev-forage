import React from 'react';

export default function Feedback() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 sm:px-6 md:px-10 py-12 sm:py-16 lg:py-20">
                <h1 className="text-center text-cyan-600 bg-clip-text text-2xl font-bold col-span-6 mb-1">
                    Send Feedback
                </h1>

                <div className="flex justify-center w-full">
                    <textarea
                        className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] max-w-3xl h-36 sm:h-44 md:h-52 lg:h-56 text-white placeholder:text-slate-200 border border-purple-400/60 rounded-2xl p-4 sm:p-5 resize-none outline-none duration-300 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 shadow-xl bg-gradient-to-br from-[#312e81] via-[#3b0764] to-[#0f766e] animate-luxury-gradient"
                        placeholder="Write your feedback here..."
                        id="feedback-textarea"
                        name="feedback"
                    />
                </div>

                <div className="col-span-6 flex justify-center gap-3">
                    <button className="fill-slate-600 flex justify-center items-center rounded-lg p-3 duration-300 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200 hover:shadow-md group">
                        <svg className="transform transition-transform group-hover:scale-110 duration-200" viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                    </button>

                    <button className="fill-slate-600 flex justify-center items-center rounded-lg p-3 duration-300 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200 hover:shadow-md group">
                        <svg className="transform transition-transform group-hover:scale-110 duration-200" viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                    </button>

                    <button className="bg-slate-50/80 stroke-slate-600 border border-slate-200 flex items-center justify-center gap-2 rounded-lg p-3 duration-300 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:stroke-blue-200 focus:bg-blue-400 hover:shadow-md group">
                        <svg className="transform transition-transform group-hover:translate-x-1 duration-200" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.11 13.6501L13.69 10.0601" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium text-slate-600 group-hover:text-slate-800">Send</span>
                    </button>
                </div>
            </div>
        </>
    );
}