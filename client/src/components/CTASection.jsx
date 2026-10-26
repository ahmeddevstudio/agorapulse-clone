import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => {
    return (
        <div className='px-6 sm:px-10 [@media(min-width:1400px)]:px-32 bg-[#fff9f4] grid grid-cols-1 lg:grid-cols-[40%_40%_20%] items-center gap-8 lg:gap-10 overflow-hidden pt-12 lg:pt-0'>
            <div className='text-center lg:text-left'>
                <h3 className='text-3xl sm:text-4xl font-bold text-[#021a41] leading-tight'>
                    Supercharge your social media goals with Agorapulse
                </h3>
            </div>

            <div className='w-full flex justify-center order-3 lg:order-0'>
                <img
                    src="https://www.agorapulse.com/assets/hv2-home2/social-media-goals.png"
                    alt="social-media-goals"
                    className='w-full max-w-65 sm:max-w-[320px] lg:w-120 h-auto object-contain'
                />
            </div>

            <div className='flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-center lg:items-start w-full'>
                <Link to={'/signup'} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })} className='w-full sm:w-auto flex justify-center lg:justify-start'>
                    <button className='w-full sm:w-auto px-5 py-2.5 sm:py-2 border-[1.5px] border-[#f50] text-[#f50] flex items-center justify-center gap-4 rounded-full cursor-pointer hover:bg-[#f7ffc5] transition-all font-medium'>
                        Try for free <ArrowRight size={20} />
                    </button>
                </Link>
                <Link to={'/demo'} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })} className='w-full sm:w-auto flex justify-center lg:justify-start'>
                    <button className='w-full sm:w-auto px-4 py-2.5 sm:py-2 flex items-center justify-center gap-4 bg-[#f50] text-white rounded-full font-medium cursor-pointer hover:bg-[#f7ffc5] hover:text-black border-[1.5px] transition-all'>
                        Book a demo <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CTASection