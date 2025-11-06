import React from 'react'
import HeroSection from './sections/HeroSection'
import MissionSection from './sections/MissionSection'
import FeaturesSection from './sections/FeaturesSection'
import TeamSection from './sections/TeamSection';
import CommunitySection from './sections/CommunitySection';
import FutureVisionSection from './sections/FutureVisionSection';
import Footer from '../../components/Footer/Footer';

export default function About() {
    return (
        <>
            <HeroSection />
            <MissionSection />
            <FeaturesSection />
            <TeamSection />
            <CommunitySection />
            <FutureVisionSection />
            <Footer />
        </>
    );
}