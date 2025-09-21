import React from 'react'
import WelcomeSection from './sections/WelcomeSection';
import OfferSection from './sections/OfferSection';
import RoadmapSection from './sections/RoadmapSection';
import DsaSection from './sections/DsaSection';
import WhySection from './sections/WhySection';
import FutureSection from './sections/FutureSection';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <WelcomeSection />
            <OfferSection />
            <RoadmapSection />
            <DsaSection />
            <WhySection />
            <FutureSection />
            <Footer />
        </>
    );
}