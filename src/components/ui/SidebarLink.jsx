import React from 'react'

const SidebarLink = ({ label, danger }) => {
    return (
        <div className={`cursor-pointer hover:bg-zinc-500 group flex items-center gap-3 px-4 py-2.5 transition rounded-lg ${danger ? 'text-red-500 hover:bg-red-500/10' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'}`}>
            <span className='rounded-full w-2.5 h-2.5 bg-zinc-600 group-hover:bg-indigo-500 transition'></span>
            <span className='text-sm font-medium'>{label}</span>
        </div>
    )
}

export default SidebarLink;