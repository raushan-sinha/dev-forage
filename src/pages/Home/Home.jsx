import React from 'react';
import { OfferSection, RoadmapSection, WelcomeSection, DsaSection, WhySection, FutureSection } from './sections';

export default function Home() {
    return (
        <>
            <WelcomeSection />
            <OfferSection />
            <RoadmapSection />
            <DsaSection />
            <WhySection />
            <FutureSection />
        </>
    );
}