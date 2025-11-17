import React from 'react';

const RefundRequest = ({ id }) => {
    return (
        <section>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                {id}. How to Request a Refund
            </h2>

            <p>Please submit a refund request through:</p>

            <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                    Our support portal:{" "}
                    <span className="font-semibold">support@devforage.com</span>
                </li>
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
    );
};

export default RefundRequest;