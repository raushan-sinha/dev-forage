import React from "react";

export default function Refund() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center px-4 py-20">
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center text-cyan-400 mb-8">
                    Refund & Cancellation Policy
                </h1>

                <div className="space-y-6 text-gray-200 text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-cyan-300 mb-2">1. Overview</h2>
                        <p>
                            At <span className="font-semibold text-white">DevForage</span>, we aim to deliver high‑quality digital products, learning resources, and technical tools. This Refund & Policy page outlines how refunds, cancellations, and disputes are handled for all purchases made on our platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-300 mb-2">2. Eligibility for Refund</h2>
                        <p>Refunds may be granted under the following conditions:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>You faced technical issues that prevented access to purchased content.</li>
                            <li>You were mistakenly charged, or duplicate transactions occurred.</li>
                            <li>The product description or course content was significantly misleading.</li>
                        </ul>
                        <p className="mt-2">Refunds are <span className="font-semibold">not applicable</span> if:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>You completed more than 30% of the course content.</li>
                            <li>You downloaded any digital assets included in the purchase.</li>
                            <li>The request is made after 7 days from the date of purchase.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-300 mb-2">3. Cancellation Policy</h2>
                        <p>
                            DevForage allows cancellation of course enrollments or digital product purchases only before access to content is initiated. Once learning modules, downloads, or premium tools are accessed, cancellation becomes unavailable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-300 mb-2">4. Non‑Refundable Items</h2>
                        <ul className="list-disc ml-6 space-y-1 mt-2">
                            <li>Downloaded digital resources.</li>
                            <li>Accessed course materials and premium tools.</li>
                            <li>Subscription plans already consumed.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-300 mb-2">5. Refund Processing Time</h2>
                        <p>
                            Once approved, refunds may take <span className="font-semibold">5–10 business days</span> to reflect in your original payment method. Processing times may vary depending on your bank or payment gateway.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-300 mb-2">6. How to Request a Refund</h2>
                        <p>Please submit a refund request through:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Our support portal: <span className="font-semibold">support@devforage.com</span></li>
                            <li>Help & Support page inside your dashboard</li>
                        </ul>
                        <p className="mt-2">Make sure to include:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Order ID</li>
                            <li>Registered email address</li>
                            <li>Reason for refund request</li>
                            <li>Any supporting screenshots (optional)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-cyan-300 mb-2">7. Policy Updates</h2>
                        <p>
                            DevForage reserves the right to update this policy at any time to ensure clarity and fairness. Any changes will be posted on this page with updated revision dates.
                        </p>
                    </section>

                    <p className="text-center text-gray-300 mt-8 text-sm">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};