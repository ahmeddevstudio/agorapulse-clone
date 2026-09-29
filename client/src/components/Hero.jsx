import { ArrowRight } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-hero-gradient'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-5xl font-bold'>Drive Real Impact on Social Media. <span className='text-[#f50]'>From Engagement to ROI.</span></h1>

                <p className='text-lg font-semibold text-[#021a41]'>Save time, stay organized, and easily manage your social media with Agorapulse. Measure and drive real business impact from your social campaigns-all in one platform.</p>

                <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='flex items-center gap-3 px-4 py-2 border-[1.5px] border-[#f50] rounded-3xl text-[#f50] font-semibold cursor-pointer hover:bg-[#f7ffc5] transition-all justify-center'>
                        Try for free now
                        <ArrowRight size={18} />
                    </button>

                    <button className='flex items-center gap-3 px-4 py-2 bg-[#f50] rounded-3xl text-white font-semibold hover:bg-[#f7ffc5] hover:text-black border-[1.5px] transition-all cursor-pointer justify-center'>
                        Take a tour
                        <ArrowRight size={18} />
                    </button>
                </div>

                <p className='text-xs text-[#021a41] text-center sm:text-left'>Free for 30 days - No card required</p>
            </div>

            <div>
                <img src={assets.hero_img} alt="hero-img" className='w-100 lg:h-100 lg:w-full object-contain' />
            </div>

            <div>
                <div className='flex items-center'>
                    <img src={assets.g2} alt="g2-logo" className='pr-4 border-r' />
                    <p className='pl-4 text-[#021a41] font-bold'>The industry leader where it counts</p>
                </div>

                <div className='pt-5 grid grid-cols-2 text-[#021a4199]'>
                    <p className='text-xs'>Best results, Summer 2024</p>
                    <p className='text-xs'>High performer for Mid-Market, Summer 2024</p>
                    <p className='text-xs'>Momentum leader, Summer 2024</p>
                    <p className='text-xs'>Most Implementable, Summer 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Hero