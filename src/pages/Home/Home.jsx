import { useEffect, useState } from 'react';
import { OfferSection, RoadmapSection, WelcomeSection, DsaSection, WhySection, FutureSection } from './sections';
import { getLoggedInUser } from '../../services/authService';
import ScrollToDown from '../../components/buttons/ScrollToDown';

export default function Home() {
    const [showScroll, setShowScroll] = useState(false);

    //TODO: Logic to show SCroll button after 500 height -
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            removeEventListener('scroll', handleScroll);
        };
    }, [])


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

            {showScroll && <ScrollToDown />}
        </>
    );
}