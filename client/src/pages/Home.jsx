import React from 'react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import SocialMediaManagementSection from '../components/SocialMediaManagementSection'
import Tabs from '../components/Tabs'
import TourSection from '../components/TourSection'
import IntegrationsSection from '../components/IntegrationsSection'
import ReviewSection from '../components/ReviewSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <div>
        <Hero />
        <TrustBar />
        <SocialMediaManagementSection />
        <Tabs />
        <TourSection />
        <IntegrationsSection />
        <ReviewSection />
        <FAQSection />
        <CTASection />
    </div>
  )
}

export default Home