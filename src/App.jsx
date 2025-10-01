import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './authentication/LoginPage/Login';
import Signup from './authentication/SignupPage/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Faq from './pages/FAQs/Faq';
import Community from './pages/Community/Community';

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
                </Routes>
            </BrowserRouter>    
        </>
    );
}