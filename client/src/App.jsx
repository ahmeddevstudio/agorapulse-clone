import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
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

const App = () => {
  return (
    <div>
      <Navbar />
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
      </Routes>
      <Footer />
    </div>
  )
}

export default App