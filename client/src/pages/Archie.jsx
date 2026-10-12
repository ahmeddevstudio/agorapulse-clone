import React from 'react'
import Hero from '../components/Archie/Hero'
import Cards from '../components/Archie/Cards'
import ContentEngineSection from '../components/Archie/ContentEngineSection'
import ReviewSection from '../components/Archie/ReviewSection'
import TrustSection from '../components/Archie/TrustSection'
import CTASection from '../components/Archie/CTASection'
import FAQSection from '../components/Archie/FAQSection'

const Archie = () => {
  return (
    <div className='nunito-sans'>
        <Hero />
        <Cards />
        <ContentEngineSection />
        <ReviewSection />
        <TrustSection />
        <CTASection />
        <FAQSection />
    </div>
  )
}

export default Archie