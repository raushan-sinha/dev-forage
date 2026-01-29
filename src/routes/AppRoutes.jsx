import React from 'react'
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
import UserProfile from '../pages/UserProfile/UserProfile';
import Sidebar from '../components/Layout/Sidebar';
import Footer from '../components/Layout/Footer';
import ScrollToTop from '../components/ScrollToTop';

const AppRoutes = () => {
    const location = useLocation();
    const noLayoutRoutes = ['/login', '/signup', '/forgot-password', '/userprofile'];
    const hideLayout = noLayoutRoutes.includes(location.pathname);

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
                <Route path="userprofile" element={<UserProfile />} />
                <Route path="/sidebar" element={<Sidebar />} />
            </Routes>

            {!hideLayout && <Footer />}

            <ScrollToTop />

            <Toaster position="top-right" />
        </>
    )
}

export default AppRoutes;