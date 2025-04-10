'use client'
import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Notfound from './Pages/Notfound'
import Mentorship from './Pages/Mentorship'
import AboutUsPage from './Pages/AboutusPage'
import ContactusPage from './Pages/ContactusPage'
import PrivacyPolicyAndTnCPage from './Pages/PrivacyPolicyAndT&CPage'
import CancellationAndRefundPage from './Pages/Refund'
import Footer from './components/Footer'
import AfterPayment from './Pages/AfterPayment'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthProvider } from './context/AuthContext';

const App = () => {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar /> 
        <Analytics />
        <Routes>
          <Route path='/' element={<><LandingPage/> </>} />
          <Route path='/mentorship' element={<Mentorship/>} />
          <Route path='/about-Us' element={<AboutUsPage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contact-Us' element={<ContactusPage/>} />
          <Route path='/privacy-Policy' element={<PrivacyPolicyAndTnCPage/>} />
          <Route path='/refundPolicy' element={<CancellationAndRefundPage/>} />
          <Route path='/payment' element={<AfterPayment/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
