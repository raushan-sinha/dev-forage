import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './authentication/Signup';
import AboutPage from './pages/About/AboutPage';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
