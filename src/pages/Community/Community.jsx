import React from 'react'
import HeroSection from './sections/HeroSection';
import WhyCommunity from './sections/WhyCommunity';
import Features from './sections/Features';
import Guidelines from './sections/Guidelines';
import CallToAction from './sections/CallToAction';
import Footer from '../../components/Footer/Footer';

export default function Community() {
    return (
        <>
            <div className='mt-8'>
                <HeroSection />
                <WhyCommunity />
                <Features />
                <Guidelines />
                <CallToAction />
                <Footer />
            </div>
        </>
    );
}