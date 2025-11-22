import { useEffect, useState } from 'react';
import { getTeams } from './../../../services/teamService';
import { Email, GitHub, LinkedIn, X } from '@mui/icons-material';

const TeamMember = () => {
    const [teamMembers, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const iconMap = {
        github: GitHub,
        linkedin: LinkedIn,
        x: X,
        email: Email,
    };

    useEffect(() => {
        const loadTeams = async () => {
            try {
                const data = await getTeams();
                setTeams(data.data);
            } catch (error) {
                console.error("Error fetching teams:", error);
            } finally {
                setLoading(false);
            }
        };
        loadTeams();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#101923]">
                <h2 className="text-white">Loading team...</h2>
            </div>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 sm:py-16 lg:py-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {teamMembers.map((member, index) => (
                    <div key={index} className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative p-6 sm:p-8 lg:p-10">
                            <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>

                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>

                                <img src={member.image} alt={member.name} className="relative w-full h-full object-cover rounded-2xl border-4 border-black" />
                            </div>

                            <div className="flex justify-center mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                    {member.tag}
                                </span>
                            </div>

                            <div className="text-center mb-6">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {member.name}
                                </h3>

                                <p className="text-purple-400 font-medium text-sm sm:text-base">
                                    {member.role}
                                </p>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-8 text-center sm:text-left">
                                {member.bio}
                            </p>

                            <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-800">
                                {member.socials.map((s, i) => {
                                    const Icon = iconMap[s.icon];
                                    return (
                                        <a key={i} href={s.link} target="_blank" className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-purple-500/20 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 group/icon">
                                            <Icon className="size-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamMember;