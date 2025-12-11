import { HeroSection, TeamMember, } from './sections';

export default function Team() {
    return (
        <div className="min-h-screen bg-black text-white">
            <HeroSection />

            <TeamMember />
        </div>
    );
}