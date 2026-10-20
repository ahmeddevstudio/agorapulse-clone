import { ArrowRight } from 'lucide-react'
import React from 'react'

const MobileAppSection = () => {
    return (
        <div className='px-5 md:px-25 [@media(min-width:1400px)]:px-45 py-15 grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
            <div>
                <img src="https://www.agorapulse.com/assets/hv2-agencies/phone-3.png" alt="" className='w-auto h-auto object-contain' />
            </div>

            <div className='flex flex-col items-center md:items-start'>
                <h2 className='text-[#212e44] text-3xl md:text-4xl lg:text-5xl font-superbold text-center md:text-left'>Everything on the go!</h2>
                <p className='pt-3 text-[#212e44] text-lg font-medium text-center md:text-left'>Our mobile app lets you publish and schedule content, manage your social inbox, oversee reports, and do much more on your Android or iOS device from anywhere.</p>

                <button className='mt-5 flex items-center gap-2 bg-[#ff6726] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>Download our app <ArrowRight size={18} /></button>
            </div>
        </div>
    )
}

export default MobileAppSection