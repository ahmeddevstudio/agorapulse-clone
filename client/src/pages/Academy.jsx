import React from 'react'
import Hero from '../components/Academy/Hero'
import VideoSection from '../components/Academy/VideoSection'
import Cards from '../components/Academy/Cards'
import FAQSection from '../components/FAQSection'

const Academy = () => {
  return (
    <div className='nunito-sans'>
        <Hero />
        <VideoSection />
        <Cards />
        <FAQSection />
    </div>
  )
}

export default Academy