import React from "react";
import {
    Overview,
    Eligibility,
    Cancellation,
    NonRefundableItems,
    RefundProcessingTime,
    RefundRequest,
    PolicyUpdates
} from "./sections";

export default function Refund() {
    return (
        <main className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center px-4 py-25">
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/10">
                <h1 className="text-3xl whitespace-nowrap md:text-4xl font-extrabold text-center text-cyan-400 mb-8">
                    Refund & Policy
                </h1>

                <section className="space-y-6 text-gray-200 text-sm md:text-base leading-relaxed">
                    <Overview id={1} />

                    <Eligibility id={2} />

                    <Cancellation id={3} />

                    <NonRefundableItems id={4} />

                    <RefundProcessingTime id={5} />

                    <RefundRequest id={6} />

                    <PolicyUpdates id={7} />
                </section>
            </div>
        </main>
    );
};