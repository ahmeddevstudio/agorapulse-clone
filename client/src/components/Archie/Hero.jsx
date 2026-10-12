import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-hero-gradient'>
            <div className='flex flex-col gap-6'>
                <p className='text-[#f50] text-lg font-bold'>AI CONTENT REPURPOSING FOR SOCIAL MEDIA</p>

                <h1 className='text-5xl font-black'>Repurpose Your Best Content <span className='text-[#f50]'>Into Engaging Social Posts</span></h1>

                <p className='text-[#021a41]'>Archie repurposes your webinars, videos, articles, and documents into on-brand, platform-native posts. It starts from your strategy and voice, not a blank prompt, so the output already sounds like you.</p>

                <div className='flex flex-col sm:flex-row gap-4'>
                    <Link to={'/signup'}>
                        <button className='flex items-center gap-3 px-4 py-2 border-[1.5px] border-[#f50] rounded-lg text-[#f50] font-bold bg-white cursor-pointer hover:bg-[#f50] hover:text-white transition-all justify-center'>
                            Try for free now
                            <ArrowRight size={18} />
                        </button>
                    </Link>

                    <Link to={'/archie-tour'}>
                        <button className='flex items-center gap-3 px-4 py-2 bg-[#f50] rounded-lg text-white font-bold hover:bg-white hover:text-[#f50] border-[1.5px] border-[#f50] transition-all cursor-pointer justify-center'>
                            Take a tour
                            <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
                <p className='text-xs text-[#021a41] text-center sm:text-left'>No card required. Want Agorapulse and Archie together? Book an Agorapulse demo.</p>
            </div>

            <div className='hidden md:block'>
                <img src='https://www.agorapulse.com/assets/hv2-feature-archie/hero-archie-ai-repurposing-content-1-EN.webp' alt="hero-img" className='w-100 lg:h-100 lg:w-full object-contain' />
            </div>
        </div>
    )
}

export default Hero