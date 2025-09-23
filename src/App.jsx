import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './authentication/LoginPage/Login';
import Signup from './authentication/SignupPage/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}