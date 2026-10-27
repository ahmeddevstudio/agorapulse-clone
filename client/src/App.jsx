import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Inbox from './pages/Inbox'
import Publishing from './pages/Publishing'
import ReturnOnInvestment from './pages/ReturnOnInvestment'
import Reporting from './pages/Reporting'
import Archie from './pages/Archie'
import Listening from './pages/Listening'
import Agencies from './pages/Agencies'
import ElectronicCommerce from './pages/ElectronicCommerce'
import B2B from './pages/B2B'
import Manufacturing from './pages/Manufacturing'
import Retail from './pages/Retail'
import HigherEducation from './pages/HigherEducation'
import Pricing from './pages/Pricing'
import FreeTools from './pages/FreeTools'
import Resources from './pages/Resources'
import Academy from './pages/Academy'
import Events from './pages/Events'
import AgoraPulseAI from './pages/AgoraPulseAI'
import Signup from './pages/Signup'
import LogIn from './pages/LogIn'
import Demo from './pages/Demo'
import Tour from './pages/Tour'
import Integrations from './pages/Integrations'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/signup' && location.pathname !== '/log-in' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/inbox' element={<Inbox />}/>
        <Route path='/publishing' element={<Publishing />}/>
        <Route path='/roi' element={<ReturnOnInvestment />}/>
        <Route path='/reporting' element={<Reporting />}/>
        <Route path='/archie' element={<Archie />}/>
        <Route path='/listening' element={<Listening />}/>
        <Route path='/agencies' element={<Agencies />}/>
        <Route path='/e-commerce' element={<ElectronicCommerce />}/>
        <Route path='/b2b' element={<B2B />}/>
        <Route path='/manufacturing' element={<Manufacturing />}/>
        <Route path='/retail' element={<Retail />}/>
        <Route path='/higher-education' element={<HigherEducation />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/free-tools' element={<FreeTools />}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/academy' element={<Academy />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/agorapulse-ai' element={<AgoraPulseAI />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/log-in' element={<LogIn />}/>
        <Route path='/demo' element={<Demo />}/>
        <Route path='/tour' element={<Tour />}/>
        <Route path='/integrations' element={<Integrations />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
      {location.pathname !== '/signup' && location.pathname !== '/log-in' && <Footer />}
    </div>
  )
}

export default App