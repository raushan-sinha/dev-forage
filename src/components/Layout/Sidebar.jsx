import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import InsightsIcon from '@mui/icons-material/Insights';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ClearIcon from '@mui/icons-material/Clear';


//TODO: Links for Sidebar -
const sidebarLinks = [
    { name: 'Dashboard', url: '/dashboard', icon: <DashboardIcon /> },
    { name: 'My Courses', url: '/mycourse', icon: <SchoolIcon /> },
    { name: 'Projects', url: '/projects', icon: <WorkOutlineIcon /> },
    { name: 'Certifications', url: '/certifications', icon: <VerifiedIcon /> },
    { name: 'Progress Tracker', url: '/progresstracker', icon: <InsightsIcon /> },
    { name: 'Mentorship', url: '/mentorship', icon: <PsychologyIcon /> },
    { name: 'Settings', url: '/settings', icon: <SettingsIcon /> },
];


const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    //todo: Navigate to home page and scroll to top
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <>
            {/* Button to open sidebar */}
            <button className='fixed top-2 right-2 z-50 bg-black text-red-400 p-2 rounded-full md:top-0 lg:hidden'
                onClick={() => setIsOpenSidebar(!isOpenSidebar)}
            >
                {isOpenSidebar ? <ClearIcon /> : <MenuOpenIcon />}
            </button>
            
            {/* Sidebar */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-40 w-72 
                    bg-zinc-950 text-zinc-100 
                    border-r border-zinc-800 
                    flex flex-col
                    transform transition-transform duration-300
                    ${isOpenSidebar ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
            >
                {/* Logo */}
                <div className="px-6 py-5 border-b border-zinc-800">
                    <h1
                        className="text-xl font-semibold tracking-tight logo-text cursor-pointer"
                        onClick={handleNavigate}
                    >
                        DevForage
                    </h1>
                    <p className="text-base text-zinc-400 mt-1">
                        Learn. Build. Ship.
                    </p>
                </div>

                {/* Navigation */}
                <nav className="custom-scrollbar flex-1 overflow-y-auto px-4 py-6 space-y-6">
                    {sidebarLinks.map((item, idx) => (
                        <Link
                            to={item.url}
                            key={idx}
                            onClick={() => setIsOpenSidebar(false)}
                        >
                            <div
                                className={`
                                    cursor-pointer group flex items-center gap-3 
                                    px-4 py-2.5 transition rounded-lg
                                    ${location.pathname === item.url
                                        ? 'text-cyan-400'
                                        : 'text-zinc-400 hover:text-white'
                                    }
                                `}
                            >
                                <span>{item.icon}</span>
                                <span className="text-sm font-medium">
                                    {item.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </aside>
        </>

    );
};

export default Sidebar;