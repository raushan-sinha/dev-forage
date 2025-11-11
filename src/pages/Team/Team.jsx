import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { getTeams } from '../../services/teamService';
import GithubIcon from '../../components/icons/GithubIcon';
import XIcon from '../../components/icons/XIcon';

export default function Team() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <div className="min-h-screen bg-[#101923] text-white p-6 flex flex-col items-center">
            <h1 className="font-bold text-3xl mb-6">
                Our Team
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {teams.map((member) => (
                    <div className="team-card bg-[#1a2430] rounded-lg p-4 flex flex-col items-center text-center shadow-lg" key={member._id ?? member.id}>
                        <img src={member.profilePic} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-3 border border-gray-600" />

                        <div className="info">
                            <h3 className="font-semibold text-lg">
                                {member.name}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {member.emailId}
                            </p>

                            <div className="social-icons mt-3 flex gap-4 justify-center">
                                {member.githubUrl &&
                                    <a href={member.githubUrl} target="_blank" rel="noreferrer">
                                        <GithubIcon />
                                    </a>
                                }

                                {member.xUrl &&
                                    <a href={member.xUrl} target="_blank" rel="noreferrer">
                                        <XIcon />
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}