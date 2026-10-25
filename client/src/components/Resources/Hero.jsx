import React from 'react'

const Hero = () => {
    return (
        <div className='px-15 lg:px-50 [@media(min-width:1400px)]:px-30 py-20 bg-[#f7f8ff] bg-contain bg-no-repeat' style={{ 'backgroundImage': 'url("https://www.agorapulse.com/assets/resources-page-hero.png")', 'backgroundPosition': 'right -64px bottom -64px' }}>
            <div className='max-w-xl'>
                <h1 className='text-[#212e44] text-5xl md:text-6xl font-superbold'>Social Media Marketing <span className='text-[#7a66f0]'>Resources</span></h1>
                <p className='pt-10 text-lg font-medium'>Helpful guides, templates, and videos to improve your social media marketing.</p>
            </div>
        </div>
    )
}

export default Hero