import React from 'react'

const labelClass = '"block mb-2 text-sm font-semibold';
const baseClass = 'w-full text-gray-300 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-sky-600 file:text-white hover:file:bg-sky-500';

export default function FileUpload({ label, id, type, ...props }) {
    return (
        <>
            <label className={labelClass} htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                className={baseClass}
                {...props}
            />
        </>
    );
}