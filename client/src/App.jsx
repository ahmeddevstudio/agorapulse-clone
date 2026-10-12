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
      </Routes>
      <Footer />
    </div>
  )
}

export default App