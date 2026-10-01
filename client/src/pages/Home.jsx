import React from 'react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import SocialMediaManagementSection from '../components/SocialMediaManagementSection'
import Tabs from '../components/Tabs'

const Home = () => {
  return (
    <div>
        <Hero />
        <TrustBar />
        <SocialMediaManagementSection />
        <Tabs />
    </div>
  )
}

export default Home