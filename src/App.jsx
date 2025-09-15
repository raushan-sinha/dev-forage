import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DevStores from './pages/DevStores';
import About from './pages/About';
import OpenForage from './pages/OpenForage';
import Login from './pages/Login';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/devStores' element={<DevStores />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/openForage' element={<OpenForage />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
