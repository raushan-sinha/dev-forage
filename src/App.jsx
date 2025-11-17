import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './authentication/LoginPage/Login';
import Signup from './authentication/SignupPage/Signup';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Faq from './pages/FAQs/Faq';
import Community from './pages/Community/Community';
import Blog from './pages/Blog/Blog';
import Terms from './pages/Terms/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Help from './pages/Help/Help';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Refund from './pages/RefundPolicy/Refund';
import Feedback from './pages/Feedback/Feedback';
import Team from './pages/Team/Team';
import Docs from './pages/OurDocs/Docs';
import DevStores from './pages/DevStores/DevStores';
import Components from './pages/Components/Components';
import DevChat from './pages/DevChat/DevChat';
import Pricing from './pages/Pricing/Pricing';
import BuildComponents from './pages/BuildComponents/BuildComponents';
import ChatCommunity from './pages/ChatCommunity/ChatCommunity';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
    const location = useLocation();
    const hideFooterPaths = ['/login', '/signup',];

    const hideFooter = hideFooterPaths.includes(location.pathname);

    return (
        <>
            <Navbar />
            <ScrollToTop />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
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
                <Route path='/components' element={<Components />} />
                <Route path='/devChat' element={<DevChat />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/build-components' element={<BuildComponents />} />
                <Route path='/chat-community' element={<ChatCommunity />} />
            </Routes>

            {!hideFooter && <Footer />}
        </>
    );
}