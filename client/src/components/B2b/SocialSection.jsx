import { ArrowRight } from 'lucide-react'
import React from 'react'

const SocialSection = () => {
    return (
        <div className='px-4 sm:px-8 [@media(min-width:1400px)]:px-24 py-10 sm:py-15 border-b border-[#0000001a]'>
            <div className='bg-[linear-gradient(267deg,#ffe1d4_40.37%,#fda37c)] rounded-3xl flex flex-col items-center relative overflow-hidden px-4 sm:px-8 py-8 sm:py-0 before:content-[""] before:w-40 before:h-32 sm:before:w-67.5 sm:before:h-52.75 before:rounded-[0_0_150px_0] sm:before:rounded-[0_0_235.28px_0] before:bg-[#ffffff80] before:absolute before:top-0 before:left-0 after:content-[""] after:absolute after:w-48 after:h-12 sm:after:w-87.5 sm:after:h-16.25 after:rounded-[80px_0_30px_0] sm:after:rounded-[131.774px_0_45.604px_0] after:right-0 after:bottom-0 after:bg-[#c83e07]'>

                <div className='w-full max-w-3xl pt-6 sm:pt-10 z-20 text-center'>
                    <div className='lg:after:absolute lg:after:content-[""] lg:after:bg-[url("https://www.agorapulse.com/assets/hv2-feature-b2b/b2b-shape.png")] lg:after:w-76.75 lg:after:h-111 lg:after:-bottom-60 lg:after:right-0 lg:after:bg-no-repeat lg:after:bg-contain lg:after:z-10'>

                        <h2 className='text-[#212e44] text-2xl sm:text-3xl font-black px-2'>
                            Unlock your social media B2B success with Agorapulse
                        </h2>

                        <p className='text-sm sm:text-lg font-medium pt-3 px-2 text-[#212e44]/90'>
                            Start a free trial or request a demo to discover how Agorapulse can empower you to build, implement, and measure a winning B2B social media strategy with ease.
                        </p>
                    </div>

                    <div className='py-8 sm:py-10'>
                        {/* Buttons stack vertically on mobile, side-by-side on small screens and up */}
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-3 w-full'>
                            <button className='w-full sm:w-auto flex items-center justify-center gap-2 bg-white py-3 px-5 rounded-lg text-[#ff6726] font-extrabold cursor-pointer border border-[#ff6726] hover:bg-[#ff6726] hover:text-white hover:border-transparent transition-all duration-300 hover:gap-3'>
                                Try for free <ArrowRight size={18} />
                            </button>

                            <button className='w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ff6726] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-white hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>
                                Book a demo <ArrowRight size={18} />
                            </button>
                        </div>

                        <div className='pt-3'>
                            <p className='text-xs text-center text-[#212e44]/80'>Free for 30 days - No card required</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialSection