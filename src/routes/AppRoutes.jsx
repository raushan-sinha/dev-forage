import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Spinner from '../components/ui/Spinner';
// import Signup from '../authentication/SignupPage/Signup';
// import ForgotPassword from '../authentication/ForgotPassword';
// import Faq from '../pages/FAQs/Faq';
// import Community from '../pages/Community/Community';
// import Blog from '../pages/Blog/Blog';
// import Terms from '../pages/Terms/Terms';
// import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
// import Help from '../pages/Help/Help';
// import About from '../pages/About/About';
// import Careers from '../pages/Careers/Careers';
// import Refund from '../pages/RefundPolicy/Refund';
// import Feedback from '../pages/Feedback/Feedback';
// import Team from '../pages/Team/Team';
// import Docs from '../pages/OurDocs/Docs';
// import DevStores from '../pages/DevStores/DevStores';
// import Roadmap from '../pages/Roadmap/Roadmap';
// import Components from '../pages/Components/Components';
// import DevChat from '../pages/DevChat/DevChat';
// import Pricing from '../pages/Pricing/Pricing';
// import BuildComponents from '../pages/BuildComponents/BuildComponents';
// import ChatCommunity from '../pages/ChatCommunity/ChatCommunity';
// import UserProfile from '../pages/UserProfile/Dashboard';
// import Footer from '../components/Layout/Footer';
// import ScrollToTop from '../components/ScrollToTop';
// import ScrollShow from '../components/buttons/ScrollShow';
// import MyCourse from '../pages/UserProfile/MyCourse';
// import Projects from '../pages/UserProfile/Projects';
// import Certifications from '../pages/UserProfile/Certifications';
// import ProgressTracker from '../pages/UserProfile/ProgressTracker';
// import Mentorship from '../pages/UserProfile/Mentorship';
// import Settings from '../pages/UserProfile/Settings';
// import Sidebar from '../components/Layout/Sidebar';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../authentication/LoginPage/Login'))
const Signup = lazy(() => import('../authentication/SignupPage/Signup'));
const ForgotPassword = lazy(() => import('../authentication/ForgotPassword'));
const Faq = lazy(() => import('../pages/FAQs/Faq'));
const Community = lazy(() => import('../pages/Community/Community'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const Terms = lazy(() => import('../pages/Terms/Terms'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy/PrivacyPolicy'));
const Help = lazy(() => import('../pages/Help/Help'));
const About = lazy(() => import('../pages/About/About'));
const Careers = lazy(() => import('../pages/Careers/Careers'));
const Refund = lazy(() => import('../pages/RefundPolicy/Refund'));
const Feedback = lazy(() => import('../pages/Feedback/Feedback'));
const Team = lazy(() => import('../pages/Team/Team'));
const Docs = lazy(() => import('../pages/OurDocs/Docs'));
const DevStores = lazy(() => import('../pages/DevStores/DevStores'));
const Roadmap = lazy(() => import('../pages/Roadmap/Roadmap'));
const Components = lazy(() => import('../pages/Components/Components'));
const DevChat = lazy(() => import('../pages/DevChat/DevChat'));
const Pricing = lazy(() => import('../pages/Pricing/Pricing'));
const BuildComponents = lazy(() => import('../pages/BuildComponents/BuildComponents'));
const ChatCommunity = lazy(() => import('../pages/ChatCommunity/ChatCommunity'));

const UserProfile = lazy(() => import('../pages/UserProfile/Dashboard'));
const MyCourse = lazy(() => import('../pages/UserProfile/MyCourse'));
const Projects = lazy(() => import('../pages/UserProfile/Projects'));
const Certifications = lazy(() => import('../pages/UserProfile/Certifications'));
const ProgressTracker = lazy(() => import('../pages/UserProfile/ProgressTracker'));
const Mentorship = lazy(() => import('../pages/UserProfile/Mentorship'));
const Settings = lazy(() => import('../pages/UserProfile/Settings'));

const Footer = lazy(() => import('../components/Layout/Footer'));
const ScrollToTop = lazy(() => import('../components/ScrollToTop'));
const ScrollShow = lazy(() => import('../components/buttons/ScrollShow'));


const AppRoutes = () => {
    const location = useLocation();

    //TODO: Navbar hide for specific pages -
    const noLayoutRoutes = ['/login', '/signup', '/forgot-password', '/dashboard', '/learningpath', '/mycourse', '/projects', '/certifications', '/progresstracker', '/mentorship', '/settings'];
    const hideLayout = noLayoutRoutes.includes(location.pathname);

    const [scrollShow, setScrollShow] = useState(false);

    //TODO: Sidebar show for some pages -
    const showSidebar = ['/dashboard', '/mycourse', '/projects', '/certifications', '/progresstracker', '/mentorship', '/settings'];
    const showSidebarLayout = showSidebar.includes(location.pathname);

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

            {showSidebarLayout && <Sidebar />}

            <Suspense fallback={<Spinner />}>
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
                    <Route path='/mycourse' element={<MyCourse />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/certifications' element={<Certifications />} />
                    <Route path='/progresstracker' element={<ProgressTracker />} />
                    <Route path='/mentorship' element={<Mentorship />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </Suspense>

            {!hideLayout && <Footer />}

            {scrollShow && <ScrollShow />}

            <ScrollToTop />

            <Toaster position="top-right" />
        </>
    )
}

export default AppRoutes;