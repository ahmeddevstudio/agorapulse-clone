import React from 'react'

const Hero = () => {
  return (
    <div className='px-10 py-15 [@media(min-width:1400px)]:px-24 bg-cover bg-no-repeat bg-position-[50%]' style={{'backgroundImage': 'url("https://www.agorapulse.com/assets/integrations/integration-pattern.png")'}}>
        <div className='text-center'>
            <h1 className='text-[#212e44] text-5xl font-superbold'>Your favorite tools and platforms work seamlessly with Agorapulse</h1>
            <p className='text-[#212e44] pt-10 font-semibold'>Schedule on all major social media platforms, create more engaging content and easily calculate your ROI with our integrations.</p>
        </div>
    </div>
  )
}

export default Hero