import React from 'react'
// import SidebarLink from '../ui/SidebarLink';
import { Link } from 'react-router-dom';

//TODO: Links for Sidebar -
const sidebarLinks = [
    {
        para: 'Core',
        links: [
            // 'Dashboard', 'Learning Paths', 'My Courses'
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Learning Paths', url: '/learningpath' },
            { name: 'My Courses', url: '/mycourse' },
        ]
    },
    {
        para: 'Build',
        links: [
            // 'Projects', 'Code Labs', 'Playground'
            { name: 'Projects', url: '/projects' },
            { name: 'Code Labs', url: '/codelabs' },
            { name: 'Playground', url: '/playground' },
        ]
    },
    {
        para: 'Validate',
        links: [
            // 'Assessments', 'Certifications', 'Progress Tracker'
            { name: 'Assessments', url: '/assessments' },
            { name: 'Certifications', url: '/certifications' },
            { name: 'Progress Tracker', url: '/progresstracker' },
        ]
    },
    {
        para: 'Career',
        links: [
            // 'Career Hub', 'Community', 'Mentorship'
            { name: 'Career Hub', url: '/careerhub' },
            { name: 'Community', url: '/community' },
            { name: 'Mentorship', url: '/mentorship' },
        ]
    },
];

//TODO: Footer links -
const footerLinks = ['Settings', 'Billing', 'Logout'];

const Sidebar = () => {
    return (
        <aside className="fixed inset-y-0 left-0 z-40 w-72 bg-zinc-950 text-zinc-100 border-r border-zinc-800 hidden lg:flex flex-col">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-zinc-800">
                <h1 className="text-xl font-semibold tracking-tight logo-text">DevForage</h1>
                <p className="text-base text-zinc-400 mt-1">
                    Learn. Build. Ship.
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                {sidebarLinks.map((item, idx) => (
                    <div key={idx}>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                            {item.para}
                        </p>
                        {item.links.map((li, id) => (
                            <Link to={li.url}
                            >
                                {/* <SidebarLink key={id} label={li.name} /> */}
                                <div key={id} className={`${location.pathname === li.url ? ' bg-red-500' : ''} cursor-pointer group flex items-center gap-3 px-4 py-2.5 transition rounded-lg`}>
                                <span className='rounded-full w-2.5 h-2.5 bg-zinc-600 group-hover:bg-indigo-500 transition'></span>
                                <span className='text-sm font-medium'>{li.name}</span>
                            </div>
                            </Link>
                ))}
            </div>
                ))}
        </nav>

            {/* Footer */ }
    {/* {footerLinks.map((link, idx) => (
                <div className="p-2 border-t border-zinc-800" key={idx}>
                    {link === 'Logout' ? <SidebarLink label={link} danger /> : <SidebarLink label={link} />}
                </div>
            ))} */}
        </aside >
    );
};

export default Sidebar;