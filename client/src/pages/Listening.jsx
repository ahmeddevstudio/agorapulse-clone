import React from 'react'
import Hero from '../components/TopFeatures/Hero'
import Card from '../components/Listening/Card'
import CTASection from '../components/Listening/CTASection'
import TourSection from '../components/Listening/TourSection'
import PrefersSections from '../components/Listening/PrefersSections'
import FAQSection from '../components/FAQSection'

const Listening = () => {
    return (
        <div className='nunito-sans'>
            <Hero title={'Hear Everything, Act on What Matters with'} PMText={'Social Listening'} PMColor={'#2fd9c4'} desc={'Equip yourself with everything needed to easily manage all your organic and paid post comments, mentions, private messages, and reviews in one centralized inbox.'} image={'https://www.agorapulse.com/assets/hv2-feature-monitoring/hero-image-3-EN.webp'} />

            <Card />
            <CTASection />
            <TourSection />
            <PrefersSections />
            <FAQSection />
        </div>
    )
}

export default Listening