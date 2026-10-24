import React from 'react'
import Hero from '../components/Pricing/Hero'
import PricingSection from '../components/Pricing/PricingSection'
import ComparePricing from '../components/Pricing/ComparePricing'
import Cards from '../components/Pricing/Cards'
import TrustBar from '../components/Pricing/TrustBar'
import FAQSection from '../components/FAQSection'

const Pricing = () => {
  return (
    <div className='nunito-sans'>
        <Hero />
        <PricingSection />
        <ComparePricing />
        <Cards />
        <TrustBar />
        <FAQSection />
    </div>
  )
}

export default Pricing