import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HomeAutomation from './components/Automation';
import VirtualAssistant from './components/VirtualAssistant';
import Energy from './components/Energy';
import Login from './components/Login';
import Signup from './components/Signup';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/automation" element={<HomeAutomation />} />
        <Route path="/virtualassistant" element={<VirtualAssistant />} />
        <Route path='/energy' element={<Energy />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
