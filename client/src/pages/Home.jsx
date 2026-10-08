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
        <IntegrationsSection title={'Works perfectly with your favorite tools and platforms'} desc={"No more jumping between social networks and other solutions. Use Agorapulse to centralize all of your team's social media marketing activities."}/>
        <ReviewSection />
        <FAQSection />
        <CTASection />
    </div>
  )
}

export default Home