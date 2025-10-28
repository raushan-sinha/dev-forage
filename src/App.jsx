import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './authentication/LoginPage/Login';
import Signup from './authentication/SignupPage/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Faq from './pages/FAQs/Faq';
import Community from './pages/Community/Community';
import Blog from './pages/Blog/Blog';
import Terms from './pages/Terms/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Help from './pages/Help/Help';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    {/* Navigation Links */}
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    {/* Footer Resources Links */}
                    <Route path='/faqs' element={<Faq />} />
                    <Route path='/community' element={<Community />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/terms' element={<Terms />} />
                    <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/about' element={<About />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}