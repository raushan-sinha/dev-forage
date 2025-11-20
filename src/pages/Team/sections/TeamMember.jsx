import React from 'react'
import { Email, GitHub, LinkedIn, X } from '@mui/icons-material';

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

const TeamMember = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 sm:py-16 lg:py-2">
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
        </section>
    );
}

export default TeamMember;