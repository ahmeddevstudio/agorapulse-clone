import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ title, PMText, PMColor, desc, image }) => {

    const socialLinks = [
        {
            name: 'Facebook',
            image: 'https://www.agorapulse.com/assets/supported-networks/facebook-2.svg'
        },
        {
            name: 'Instagram',
            image: 'https://www.agorapulse.com/assets/supported-networks/instagram-2.svg'
        },
        {
            name: 'Threads',
            image: 'https://www.agorapulse.com/assets/supported-networks/threads.svg'
        },
        {
            name: 'LinkedIn',
            image: 'https://www.agorapulse.com/assets/hv2-home/linkedin.svg'
        },
        {
            name: 'X',
            image: 'https://www.agorapulse.com/assets/supported-networks/x-logo.svg'
        },
        {
            name: 'Youtube',
            image: 'https://www.agorapulse.com/assets/hv2-home2/youtube-logo-2.svg'
        },
        {
            name: 'Google',
            image: 'https://www.agorapulse.com/assets/hv2-home/google.svg'
        },
        {
            name: 'Tiktok',
            image: 'https://www.agorapulse.com/assets/hv2-home/tiktok.svg'
        },
    ]

    return (
        <div className='nunito-sans px-4 [@media(min-width:1400px)]:px-24 py-15 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='flex flex-col items-center lg:items-start'>
                <div className='text-[#212e44] text-center lg:text-left'>
                    <h1 className='text-5xl lg:text-6xl font-black [-webkit-text-stroke:2px]'>{title} <span style={{ 'color': `${PMColor}` }}>{PMText}</span></h1>
                    <p className='pt-5 text-lg'>{desc}</p>
                </div>

                <div className='pt-10 flex flex-col md:flex-row items-center md:items-start gap-4'>
                    <Link to={'/signup'}>
                        <button
                            style={{
                                borderColor: PMColor,
                                '--hoverBg': PMColor,
                                '--textColor': PMColor
                            }}
                            className="flex items-center gap-2 font-black border px-4 py-2 rounded cursor-pointer transition-all text-(--textColor) hover:bg-(--hoverBg) hover:text-white"
                        >
                            Try for free <ArrowRight size={20} />
                        </button>
                    </Link>

                    <Link to={'/demo'}>
                        <button style={{ 'borderColor': `${PMColor}`, '--hoverBg': `${PMColor}`, '--color': `${PMColor}` }} className={`flex items-center gap-2 font-black border px-4 py-2 rounded bg-(--hoverBg) cursor-pointer text-white transition-all hover:bg-white hover:text-(--color)`}>Book a demo <ArrowRight size={20} /></button>
                    </Link>
                </div>

                <div className='pt-10'>
                    <p className='text-xs'>Supported Networks</p>

                    <div className='pt-5 flex gap-5 flex-wrap'>
                        {socialLinks.map((social) => (
                            <img src={social.image} alt={social.name} key={social.name} className='h-6 w-6' />
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <img src={image} alt="" className='h-70 lg:h-110' />
            </div>
        </div>
    )
}

export default Hero