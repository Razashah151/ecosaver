import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import HomeAutomation from './components/HomeAutomation';
import VirtualAssistant from './components/VirtualAssistant';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/automation" element={<HomeAutomation />} />
                <Route path="/virtualassistant" element={<VirtualAssistant />} />




            </Routes>
        </BrowserRouter>
    );
};

export default App;
