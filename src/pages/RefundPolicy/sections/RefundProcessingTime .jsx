import React from 'react';

const RefundProcessingTime = ({ id }) => {
    return (
        <section>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                {id}. Refund Processing Time
            </h2>

            <p>
                Once approved, refunds may take{" "}
                <span className="font-semibold">5–10 business days</span> to reflect in your original
                payment method. Processing times may vary depending on your bank or payment gateway.
            </p>
        </section>
    );
};

export default RefundProcessingTime;