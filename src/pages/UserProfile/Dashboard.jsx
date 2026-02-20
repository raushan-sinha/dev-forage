import React from 'react'

export default function UserProfile() {
    return (
        <>
            <div className="flex">

                {/* Main Content */}
                <div className="flex-1">
                    <div className="min-h-screen bg-zinc-900 text-white lg:ml-72">

                        {/* Top Navbar */}
                        <header className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-zinc-800">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                    Welcome back, Raushan 👋
                                </h2>
                                <p className="text-zinc-400 mt-1 text-sm">
                                    Here's your learning performance overview.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                {/* Profile Image */}
                                <img
                                    src="https://i.pravatar.cc/150?img=3"
                                    alt="User"
                                    className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                                />

                                {/* Edit Profile */}
                                <button className="hidden sm:block px-4 py-2 text-sm font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 transition">
                                    Edit Profile
                                </button>

                                {/* Logout */}
                                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-red-600 hover:bg-red-500 transition">
                                    Logout
                                </button>
                            </div>
                        </header>

                        <main className="p-6 md:p-10 space-y-10">

                            {/* Stats Grid */}
                            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-cyan-500 transition">
                                    <p className="text-zinc-400 text-sm">Courses Enrolled</p>
                                    <h3 className="text-3xl font-semibold mt-2">12</h3>
                                </div>

                                <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-green-500 transition">
                                    <p className="text-zinc-400 text-sm">Completed Courses</p>
                                    <h3 className="text-3xl font-semibold mt-2">7</h3>
                                </div>

                                <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-yellow-500 transition">
                                    <p className="text-zinc-400 text-sm">Active Projects</p>
                                    <h3 className="text-3xl font-semibold mt-2">4</h3>
                                </div>

                                <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-purple-500 transition">
                                    <p className="text-zinc-400 text-sm">Certificates Earned</p>
                                    <h3 className="text-3xl font-semibold mt-2">3</h3>
                                </div>

                            </section>

                            {/* Two Column Layout */}
                            <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                                {/* Left Column */}
                                <div className="xl:col-span-2 space-y-8">

                                    {/* Progress Section */}
                                    <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                                        <h3 className="text-lg font-semibold mb-6">Learning Progress</h3>

                                        <div className="space-y-6">

                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>Frontend Engineering</span>
                                                    <span className="text-zinc-400">75%</span>
                                                </div>
                                                <div className="w-full bg-zinc-700 h-2 rounded-full">
                                                    <div className="bg-cyan-500 h-2 rounded-full w-3/4"></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>Backend Development</span>
                                                    <span className="text-zinc-400">60%</span>
                                                </div>
                                                <div className="w-full bg-zinc-700 h-2 rounded-full">
                                                    <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>AI Integration</span>
                                                    <span className="text-zinc-400">40%</span>
                                                </div>
                                                <div className="w-full bg-zinc-700 h-2 rounded-full">
                                                    <div className="bg-purple-500 h-2 rounded-full w-2/5"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Recent Courses */}
                                    <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                                        <h3 className="text-lg font-semibold mb-6">Recent Courses</h3>

                                        <div className="space-y-4">

                                            <div className="flex justify-between items-center bg-zinc-900 p-4 rounded-lg border border-zinc-700 hover:border-cyan-500 transition">
                                                <div>
                                                    <p className="font-medium">Advanced React Patterns</p>
                                                    <p className="text-sm text-zinc-400">8 modules left</p>
                                                </div>
                                                <button className="text-sm px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">
                                                    Continue
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-center bg-zinc-900 p-4 rounded-lg border border-zinc-700 hover:border-green-500 transition">
                                                <div>
                                                    <p className="font-medium">Node.js Mastery</p>
                                                    <p className="text-sm text-zinc-400">3 modules left</p>
                                                </div>
                                                <button className="text-sm px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition">
                                                    Continue
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                {/* Right Column */}
                                <div className="space-y-8">

                                    {/* Community Card */}
                                    <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                                        <h3 className="text-lg font-semibold mb-4">Community Activity</h3>
                                        <p className="text-zinc-400 text-sm">
                                            5 new discussions in Frontend Guild
                                        </p>
                                        <button className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm transition">
                                            Visit Community
                                        </button>
                                    </div>

                                    {/* Mentorship Card */}
                                    <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                                        <h3 className="text-lg font-semibold mb-4">Upcoming Mentorship</h3>
                                        <p className="text-zinc-400 text-sm">
                                            Session with Senior Engineer - 18 Feb
                                        </p>
                                        <button className="mt-4 w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm transition">
                                            View Details
                                        </button>
                                    </div>

                                </div>

                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}