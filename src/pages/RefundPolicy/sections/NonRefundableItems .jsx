import React from 'react';

const NonRefundableItems = ({ id }) => {
    return (
        <section>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                {id}. Non-Refundable Items
            </h2>

            <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Downloaded digital resources.</li>
                <li>Accessed course materials and premium tools.</li>
                <li>Subscription plans already consumed.</li>
            </ul>
        </section>
    );
};

export default NonRefundableItems;