import React from 'react'

const btnClass = "px-8 py-3 bg-sky-600 hover:bg-sky-500 rounded-xl text-white font-semibold shadow-lg transition duration-200";

export default function SubmitBtn({ id, btnName, ...props }) {
    return (
        <>
            <button
                id={id}
                className={btnClass}
                {...props}
            >
                {btnName}
            </button>
        </>
    );
}