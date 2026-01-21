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

                {/* Core */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                        Core
                    </p>
                    <SidebarLink label="Dashboard" />
                    <SidebarLink label="Learning Paths" />
                    <SidebarLink label="My Courses" />
                </div>

                {/* Build */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                        Build
                    </p>
                    <SidebarLink label="Projects" />
                    <SidebarLink label="Code Labs" />
                    <SidebarLink label="Playground" />
                </div>

                {/* Validate */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                        Validate
                    </p>
                    <SidebarLink label="Assessments" />
                    <SidebarLink label="Certifications" />
                    <SidebarLink label="Progress Tracker" />
                </div>

                {/* Career */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                        Career
                    </p>
                    <SidebarLink label="Career Hub" />
                    <SidebarLink label="Community" />
                    <SidebarLink label="Mentorship" />
                </div>
            </nav>

            {/* Footer */}
            <div className="px-4 py-4 border-t border-zinc-800">
                <SidebarLink label="Profile" />
                <SidebarLink label="Settings" />
                <SidebarLink label="Billing" />
                <SidebarLink label="Logout" danger />
            </div>
        </aside>
    );
};

const SidebarLink = ({ label, danger }) => {
    return (
        <div
            className={`group flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition
          ${danger
                    ? "text-red-400 hover:bg-red-500/10"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }`}
        >
            {/* Icon placeholder */}
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600 group-hover:bg-indigo-500 transition" />
            <span className="text-sm font-medium">{label}</span>
        </div>
    );
};

export default Sidebar;
