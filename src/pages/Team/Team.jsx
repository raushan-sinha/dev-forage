// import { useEffect, useState } from 'react';
// import { getTeams } from '../../services/teamService';
// import GithubIcon from '../../components/icons/GithubIcon';
// import XIcon from '../../components/icons/XIcon';
import React from 'react'
import { Email, GitHub, LinkedIn, X } from '@mui/icons-material';

export default function Team() {
    const teamMembers = [
        {
            name: "Raushan Sinha",
            role: "Co-Founder & CEO",
            tag: "Frontend Developer",
            bio: "With over 1+ years of experience in Frontend development and product strategy, Raushan leads DevForage's vision to revolutionize developer tools. Previously led engineering teams at major tech companies and has a passion for building products that developers love.",
            image: "#",
            socials: [
                { icon: <GitHub />, link: 'https://github.com/raushan-sinha' },
                { icon: <LinkedIn />, link: 'https://www.linkedin.com/in/raushan-sinha-4b94452a1/' },
                { icon: <X />, link: 'https://x.com/84Raushan' },
                { icon: <Email />, link: 'mailto:raushankrsinha2004@gmail.com' },
            ]
        },
        {
            name: "Pavithr Jain",
            role: "Co-Founder & CTO",
            tag: "MERN Stack Developer",
            bio: "Pavithr brings deep technical expertise in distributed systems and developer infrastructure. He's committed to creating tools that empower developers to build faster and more efficiently. Former principal engineer with a track record of scaling platforms to millions of users.",
            image: "#",
            socials: [
                { icon: <GitHub />, link: 'https://github.com/raushan-sinha' },
                { icon: <LinkedIn />, link: 'https://www.linkedin.com/in/raushan-sinha-4b94452a1/' },
                { icon: <X />, link: 'https://x.com/' },
                { icon: <Email />, link: 'mailto:raushankrsinha2004@gmail.com' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
                }}></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
                    <div className="text-center space-y-6">
                        <div className="inline-block">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                Meet the DevForage Team
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            Built by developers,
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                for developers
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
                            We're a team of passionate builders dedicated to creating the best developer tools and experiences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Grid */}
            <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 sm:py-16 lg:py-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative p-6 sm:p-8 lg:p-10">
                                {/* Profile Image with decorative elements */}
                                <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-full h-full object-cover rounded-2xl border-4 border-black"
                                    />
                                </div>

                                {/* Tag */}
                                <div className="flex justify-center mb-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                        {member.tag}
                                    </span>
                                </div>

                                {/* Name and Role */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {member.name}
                                    </h3>
                                    <p className="text-purple-400 font-medium text-sm sm:text-base">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Bio */}
                                <p className="text-gray-400 leading-relaxed mb-8 text-center sm:text-left">
                                    {member.bio}
                                </p>

                                {/* Social Icons */}
                                <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-800">
                                    {member.socials.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.link}
                                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-purple-500/20 border border-gray-700 hover:border-purple-500/50 transition-all duration-200 group/icon"
                                        >
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)'
                    }}></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to join us?</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals who share our passion for building great developer tools.
                        </p>
                        <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-200 cursor-pointer">
                            View Open Positions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


// const [teams, setTeams] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const loadTeams = async () => {
//             try {
//                 const data = await getTeams();
//                 setTeams(data.data);
//             } catch (error) {
//                 console.error("Error fetching teams:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         loadTeams();
//     }, []);

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-[#101923]">
//                 <h2 className="text-white">Loading team...</h2>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#101923] text-white p-6 flex flex-col items-center">
//             <h1 className="font-bold text-3xl mb-6">
//                 Our Team
//             </h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {teams.map((member) => (
//                     <div className="team-card bg-[#1a2430] rounded-lg p-4 flex flex-col items-center text-center shadow-lg" key={member._id ?? member.id}>
//                         <img src={member.profilePic} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-3 border border-gray-600" />

//                         <div className="info">
//                             <h3 className="font-semibold text-lg">
//                                 {member.name}
//                             </h3>

//                             <p className="text-gray-400 text-sm">
//                                 {member.emailId}
//                             </p>

//                             <div className="social-icons mt-3 flex gap-4 justify-center">
//                                 {member.githubUrl &&
//                                     <a href={member.githubUrl} target="_blank" rel="noreferrer">
//                                         <GithubIcon />
//                                     </a>
//                                 }

//                                 {member.xUrl &&
//                                     <a href={member.xUrl} target="_blank" rel="noreferrer">
//                                         <XIcon />
//                                     </a>
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );