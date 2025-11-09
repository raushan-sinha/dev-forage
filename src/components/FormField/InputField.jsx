import React from 'react'

const labelClass = 'block mb-2 text-sm font-semibold';
const baseClass = 'w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none';

export default function InputField({ label, type, id, ...props }) {
    return (
        <>
            <label className={labelClass} htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                {...props}
                className={baseClass}
            />
        </>
    );
}