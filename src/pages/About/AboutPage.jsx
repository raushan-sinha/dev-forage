import React from 'react';
import HeroSection from './HeroSection';
import Navbar from '../../components/Navbar';
import OfferSection from './OfferSection';
import RoadmapSection from './RoadmapSection';
import DsaSection from './DsaSection';
import WhySection from './WhySection';
import FutureSection from './FutureSection';
import CallTOAction from './CallToAction';

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                <HeroSection />
                <OfferSection />
                <RoadmapSection />
                <DsaSection />
                <WhySection />
                <FutureSection />
                <CallTOAction />
            </div>
        </>
    );
};