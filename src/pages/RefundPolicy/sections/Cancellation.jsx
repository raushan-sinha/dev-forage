import React from 'react'

const Cancellation = ({ id }) => {
    return (
        <section>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">{id}. Cancellation Policy</h2>
            <p>
                DevForage allows cancellation of course enrollments or digital product purchases only before access to content is initiated. Once learning modules, downloads, or premium tools are accessed, cancellation becomes unavailable.
            </p>
        </section>
    );
}

export default Cancellation;