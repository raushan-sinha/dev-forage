import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from './sections/HeroSection';
import OfferSection from './sections/OfferSection';
import RoadmapSection from './sections/RoadmapSection';
import DsaSection from './sections/DsaSection';
import WhySection from './sections/WhySection';
import FutureSection from './sections/FutureSection';
import CallToAction from './sections/CallToAction';

export default function About() {
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
                <CallToAction />
            </div>
        </>
    );
};