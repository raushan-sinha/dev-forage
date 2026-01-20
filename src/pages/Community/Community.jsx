import React from 'react'
import HeroSection from './sections/HeroSection';
import WhyCommunity from './sections/WhyCommunity';
import Features from './sections/Features';
import Guidelines from './sections/Guidelines';
import CallToAction from './sections/CallToAction';

export default function Community() {
    return (
        <main>
            <HeroSection />
            <WhyCommunity />
            <Features />
            <Guidelines />
            <CallToAction />
        </main>
    );
}