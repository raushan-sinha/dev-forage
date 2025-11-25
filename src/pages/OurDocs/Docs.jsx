import React from 'react'
import { DocsHero, HowToUse, KeyFeatures, WhyDevForage } from './sections';

export default function Docs() {
    return (
        <div>
            <DocsHero />
            <WhyDevForage />
            <KeyFeatures />
            <HowToUse />
        </div>
    );
}