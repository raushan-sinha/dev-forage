import React, { useEffect, useState } from 'react'
import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Home from '../pages/Home/Home';
import Login from '../authentication/LoginPage/Login';
import Signup from '../authentication/SignupPage/Signup';
import ForgotPassword from '../authentication/ForgotPassword';
import Faq from '../pages/FAQs/Faq';
import Community from '../pages/Community/Community';
import Blog from '../pages/Blog/Blog';
import Terms from '../pages/Terms/Terms';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import Help from '../pages/Help/Help';
import About from '../pages/About/About';
import Careers from '../pages/Careers/Careers';
import Refund from '../pages/RefundPolicy/Refund';
import Feedback from '../pages/Feedback/Feedback';
import Team from '../pages/Team/Team';
import Docs from '../pages/OurDocs/Docs';
import DevStores from '../pages/DevStores/DevStores';
import Roadmap from '../pages/Roadmap/Roadmap';
import Components from '../pages/Components/Components';
import DevChat from '../pages/DevChat/DevChat';
import Pricing from '../pages/Pricing/Pricing';
import BuildComponents from '../pages/BuildComponents/BuildComponents';
import ChatCommunity from '../pages/ChatCommunity/ChatCommunity';
import UserProfile from '../pages/UserProfile/Dashboard';
import Footer from '../components/Layout/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToDown from '../components/buttons/ScrollToDown';
import LearningPath from '../pages/UserProfile/LearningPath';
import MyCourse from '../pages/UserProfile/MyCourse';
import Projects from '../pages/UserProfile/Projects';
import CodeLabs from '../pages/UserProfile/CodeLabs';
import Playground from '../pages/UserProfile/Playground';
import Assessments from '../pages/UserProfile/Assessments';
import Certifications from '../pages/UserProfile/Certifications';
import ProgressTracker from '../pages/UserProfile/ProgressTracker';
import CareerHub from '../pages/UserProfile/CareerHub';
import Mentorship from '../pages/UserProfile/Mentorship';

const AppRoutes = () => {
    const location = useLocation();
    const noLayoutRoutes = ['/login', '/signup', '/forgot-password', '/dashboard', '/learningpath', '/mycourse', '/projects', '/codelabs', '/playground', '/assessments', '/certifications', '/careerhub', '/progresstracker', '/mentorship'];
    const hideLayout = noLayoutRoutes.includes(location.pathname);
    const [scrollShow, setScrollShow] = useState(false);

    //TODO: Logic to show SCroll button after limited height -
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setScrollShow(true);
            } else {
                setScrollShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <>
            {!hideLayout && <Navbar />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path='/faqs' element={<Faq />} />
                <Route path='/community' element={<Community />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
                <Route path='/help' element={<Help />} />
                <Route path='/about' element={<About />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/refund-policy' element={<Refund />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/team' element={<Team />} />
                <Route path='/docs' element={<Docs />} />
                <Route path='/devStores' element={<DevStores />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path='/components' element={<Components />} />
                <Route path='/devChat' element={<DevChat />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/build-components' element={<BuildComponents />} />
                <Route path='/chat-community' element={<ChatCommunity />} />
                {/* UserProfile page */}
                <Route path="/dashboard" element={<UserProfile />} />
                <Route path='/learningpath' element={<LearningPath />} />
                <Route path='/mycourse' element={<MyCourse />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/codelabs' element={<CodeLabs />} />
                <Route path='/playground' element={<Playground />} />
                <Route path='/assessments' element={<Assessments />} />
                <Route path='/certifications' element={<Certifications />} />
                <Route path='/careerhub' element={<CareerHub />} />
                <Route path='/progresstracker' element={<ProgressTracker />} />
                <Route path='/mentorship' element={<Mentorship />} />
            </Routes>

            {!hideLayout && <Footer />}

            {scrollShow && <ScrollToDown />}

            <ScrollToTop />

            <Toaster position="top-right" />
        </>
    )
}

export default AppRoutes;