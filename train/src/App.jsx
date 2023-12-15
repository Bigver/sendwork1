import Register1Screen from './pages/Register1Screen'
import Register2Screen from './pages/Register2Screen'
import Register4Screen from './pages/Register4Screen'
import Register5Screen from './pages/Register5Screen'
import RegisterScreen from './pages/RegisterScreen'
import LoginScreen from './pages/loginScreen'
import './styles/app.scss'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from './store';
import React, { useContext, useEffect, useState } from 'react';
import Home from './pages/Home'
import Navbar from './component/Navbar'



function App() {
  return (
    <BrowserRouter>
      <div>
         <ToastContainer position="bottom-center" limit={1} />
          <main>
            <Routes>
                <Route  path="/" element={<LoginScreen />} />
                <Route  path="/data" element={<Home />} />
                <Route  path="/register" element={<RegisterScreen />} />
                <Route  path="/register/infomation" element={<Register1Screen />} />
                <Route  path="/register/username" element={<Register2Screen />} />
                <Route  path="/register/password" element={<Register4Screen />} />
                <Route  path="/register/phone" element={<Register5Screen />} />
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  )
}

export default App
