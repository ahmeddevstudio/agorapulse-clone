import React from 'react'
import Hero from '../components/Demo/Hero'
import Cards from '../components/Demo/Cards'
import Features from '../components/Demo/Features'
import TrustBar from '../components/Demo/TrustBar'
import ReviewSection from '../components/Demo/ReviewSection'

const Demo = () => {
  return (
    <div className='nunito-sans'>
        <Hero />
        <Cards />
        <Features />
        <TrustBar />
        <ReviewSection />
    </div>
  )
}

export default Demo