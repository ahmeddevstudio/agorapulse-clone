import React from 'react'

const Hero = () => {
  return (
    <div className='px-15 lg:px-50 [@media(min-width:1400px)]:px-30 py-20 min-h-screen bg-[#fffaf6] bg-contain bg-no-repeat' style={{'backgroundImage': 'url("https://www.agorapulse.com/assets/free-tools-hero-2.png")', 'backgroundPosition': 'right -64px bottom -64px'}}>
        <div className='max-w-xl'>
            <h1 className='text-[#212e44] text-5xl md:text-6xl font-superbold'>Free Social Media Marketing <span className='text-[#ff6726]'>Tools</span></h1>
            <p className='pt-10 text-lg font-medium'>Looking to do more with less on social media? You're not alone. Try one of these free tools that thousands of marketers and agencies use to improve their social media marketing results.</p>
        </div>
    </div>
  )
}

export default Hero