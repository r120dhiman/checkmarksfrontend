
'use client'
import React from 'react'

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


const App = () => {
  
  return (
    <>
    <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path='/' element={<><LandingPage/> </>}/>

      <Route path='/mentorship' element={<Mentorship/>} />
      <Route path='/about-Us' element={<AboutUsPage/>} />
      <Route path='/contact-Us' element={<ContactusPage/>} />
      <Route path='/privacy-Policy' element={<PrivacyPolicyAndTnCPage/>} />
      <Route path='/refundPolicy' element={<CancellationAndRefundPage/>} />
      <Route path='*' element={<Notfound/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
