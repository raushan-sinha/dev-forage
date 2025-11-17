import React from 'react';

const PolicyUpdates = ({ id }) => {
    return (
        <section>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                {id}. Policy Updates
            </h2>

            <p>
                DevForage reserves the right to update this policy at any time to ensure clarity
                and fairness. Any changes will be posted on this page with updated revision dates.
            </p>
        </section>
    );
};

export default PolicyUpdates;