import React from 'react'

const labelClass = 'block mb-2 text-sm font-semibold';
const baseClass = 'w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none';

export default function SelectField({ label, id, options = [], ...props }) {
    return (
        <>
            <label className={labelClass} htmlFor={id}>{label}</label>
            <select className={baseClass} id={id} {...props}>
                {options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                ))}
            </select>
        </>
    );
}