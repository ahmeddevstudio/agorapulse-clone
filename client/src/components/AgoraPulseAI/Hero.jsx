import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[linear-gradient(90deg,rgba(87,143,255,.1),rgba(223,82,255,.1))]'>
            <div className='flex flex-col items-center lg:items-start gap-6'>
                <h1 className='text-5xl md:text-6xl font-black text-[#212e44] text-center lg:text-left'><span className='gradient-text'>Agorapulse AI:</span> Your Social Media Sidekick</h1>

                <p className='text-[#021a41] font-medium text-center lg:text-left'>Let AI tackle the routine, and grab more time for bold brainstorms, seamless collaboration, and measu rable growth</p>

                <div className='flex flex-col sm:flex-row gap-4'>
                    <Link to={'/signup'}>
                        <button className='flex items-center gap-2 px-5 py-3 gradient-border rounded-lg text-[#212e44] font-black bg-white cursor-pointer hover:gradient-bg-btn hover:border-transparent hover:gap-3 hover:text-white transition-all duration-300 justify-center'>
                            Try for free
                            <ArrowRight size={18} />
                        </button>
                    </Link>

                    <Link to={'/demo'}>
                        <button className='flex items-center gap-3 px-5 py-3 gradient-bg-btn gradient-border rounded-lg text-white font-extrabold hover:gradient-bg-btn-hover hover:text-[#212e44] transition-all cursor-pointer justify-center'>
                            Book a demo
                            <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
                <p className='text-xs text-[#021a41] text-center sm:text-left'>No card required</p>
            </div>

            <div className='hidden md:block'>
                <img src='https://www.agorapulse.com/assets/hv2-feature-ai/hero-image-2-EN.webp' alt="hero-img" className='h-auto w-auto' />
            </div>
        </div>
    )
}

export default Hero