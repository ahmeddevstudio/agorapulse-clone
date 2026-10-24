import React from 'react'

const Hero = () => {

    const socialLinks = [
        {
            name: 'facebook',
            image: 'https://www.agorapulse.com/assets/pricing/fb.webp'
        },
        {
            name: 'instagram',
            image: 'https://www.agorapulse.com/assets/pricing/instagram.webp'
        },
        {
            name: 'threads',
            image: 'https://www.agorapulse.com/assets/pricing//threads.webp'
        },
        {
            name: 'twitter',
            image: 'https://www.agorapulse.com/assets/pricing/twitter.webp'
        },
        {
            name: 'linkedin',
            image: 'https://www.agorapulse.com/assets/pricing/in.svg'
        },
        {
            name: 'youtube',
            image: 'https://www.agorapulse.com/assets/pricing/youtube.webp'
        },
        {
            name: 'pinterest',
            image: 'https://www.agorapulse.com/assets/pricing/socialogo.webp'
        },
        {
            name: 'google business',
            image: 'https://www.agorapulse.com/assets/pricing/google_business.webp'
        },
        {
            name: 'tiktok',
            image: 'https://www.agorapulse.com/assets/pricing/tiktok.webp'
        },
        {
            name: 'bluesky',
            image: 'https://www.agorapulse.com/assets/pricing/bluesky.webp'
        },
        {
            name: 'reddit',
            image: 'https://www.agorapulse.com/assets/pricing/group.webp'
        },
    ]

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15'>
            <div>
                <h1 className='text-[#212e44] text-5xl text-center font-superbold'><span className='text-[#ff6726]'>Free For 30 Days,</span> No Credit Card Required</h1>
            </div>

            <div className='pt-7'>
                <p className='text-center text-[#212e44] font-medium'>Supported networks</p>

                <div className='pt-3 flex flex-wrap gap-3 justify-center'>
                    {socialLinks.map((social) => (
                        <img src={social.image} alt={social.name} key={social.name} className='w-6 h-6 object-contain' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero