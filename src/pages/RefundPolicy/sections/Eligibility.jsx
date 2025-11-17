import React from 'react'

const Eligibility = ({ id }) => {
    return (
        <section>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">{id}. Eligibility for Refund</h2>
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
    );
}

export default Eligibility;