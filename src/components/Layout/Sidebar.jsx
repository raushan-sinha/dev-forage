import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RouteIcon from '@mui/icons-material/Route';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import QuizIcon from '@mui/icons-material/Quiz';
import VerifiedIcon from '@mui/icons-material/Verified';
import InsightsIcon from '@mui/icons-material/Insights';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';


//TODO: Links for Sidebar -
const sidebarLinks = [
    {
        para: 'Core',
        links: [
            { name: 'Dashboard', url: '/dashboard', icon: <DashboardIcon /> },
            { name: 'Learning Paths', url: '/learningpath', icon: <RouteIcon /> },
            { name: 'My Courses', url: '/mycourse', icon: <SchoolIcon /> },
        ]
    },
    {
        para: 'Build',
        links: [
            { name: 'Projects', url: '/projects', icon: <WorkOutlineIcon /> },
            { name: 'Code Labs', url: '/codelabs', icon: <CodeIcon /> },
            { name: 'Playground', url: '/playground', icon: <SportsEsportsIcon /> },
        ]
    },
    {
        para: 'Validate',
        links: [
            { name: 'Assessments', url: '/assessments', icon: <QuizIcon /> },
            { name: 'Certifications', url: '/certifications', icon: <VerifiedIcon /> },
            { name: 'Progress Tracker', url: '/progresstracker', icon: <InsightsIcon /> },
        ]
    },
    {
        para: 'Career',
        links: [
            { name: 'Career Hub', url: '/careerhub', icon: <BusinessCenterIcon /> },
            { name: 'Community', url: '/community', icon: <GroupsIcon /> },
            { name: 'Mentorship', url: '/mentorship', icon: <PsychologyIcon /> },
        ]
    },
];

//TODO: Footer links -
const footerLinks = ['Settings', 'Billing', 'Logout'];


const Sidebar = () => {
    const navigate = useNavigate();

    //todo: Navigate to home page and scroll to top
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <aside className="fixed inset-y-0 left-0 z-40 w-72 bg-zinc-950 text-zinc-100 border-r border-zinc-800 hidden lg:flex flex-col">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-zinc-800">
                <h1 className="text-xl font-semibold tracking-tight logo-text cursor-pointer" onClick={handleNavigate}>DevForage</h1>
                <p className="text-base text-zinc-400 mt-1">
                    Learn. Build. Ship.
                </p>
            </div>

            {/* Navigation */}
            <nav className="custom-scrollbar flex-1 overflow-y-auto px-4 py-6 space-y-6">
                {sidebarLinks.map((item, idx) => (
                    <div key={idx}>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                            {item.para}
                        </p>
                        {item.links.map((li, id) => (
                            <Link to={li.url}>
                                <div key={id} className={`${location.pathname === li.url ? 'underline underline-offset-8 decoration-2 text-cyan-400' : ''} cursor-pointer group flex items-center gap-3 px-4 py-2.5 transition rounded-lg`}>
                                    <span className={`transition ${location.pathname === li.url ? 'text-cyan-400' : 'text-zinc-600'}`}>{li.icon}</span>
                                    <span className='text-sm font-medium'>{li.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>
        </aside >
    );
};

export default Sidebar;