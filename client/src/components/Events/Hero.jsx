import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className='px-15 lg:px-50 [@media(min-width:1400px)]:px-30 py-20 bg-[#f7f8ff] bg-contain bg-no-repeat' style={{ 'backgroundImage': 'url("https://static1.agorapulse.com/events/wp-content/themes/agorapulse-webinar/img/hero-home.png")', 'backgroundPosition': 'right -64px bottom -64px' }}>
                <div className='max-w-xl'>
                    <h1 className='text-[#212e44] text-5xl md:text-6xl font-superbold'>Agorapulse <span className='text-[#7a66f0]'>events and webinars</span></h1>
                    <p className='pt-10 text-2xl font-bold'>Insights, Trends, and Winning Strategies</p>
                </div>
            </div>
        </div>
    )
}

export default Hero