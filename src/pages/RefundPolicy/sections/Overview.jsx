import React from 'react'

const Overview = ({ id }) => {
    return (
        <section>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">{id}. Overview</h2>
            <p>
                At <span className="font-semibold text-white">DevForage</span>, we aim to deliver high‑quality digital products, learning resources, and technical tools. This Refund & Policy page outlines how refunds, cancellations, and disputes are handled for all purchases made on our platform.
            </p>
        </section>
    );
}

export default Overview;