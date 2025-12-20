import { useEffect } from 'react';
import { OfferSection, RoadmapSection, WelcomeSection, DsaSection, WhySection, FutureSection } from './sections';
import { getLoggedInUser } from '../../services/authService';

export default function Home() {
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getLoggedInUser();
                localStorage.setItem("user", JSON.stringify(data.user));
            } catch (err) {
                console.log("Not logged in", err);
            }
        };

        fetchUser();
    }, []);

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