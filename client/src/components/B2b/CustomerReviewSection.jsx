import { ArrowRight } from 'lucide-react'
import React from 'react'

const CustomerReviewSection = ({ title }) => {
    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15'>
            <div>
                <h2 className="text-[#212e44] text-3xl md:text-4xl text-center font-black">
                    {title}
                </h2>
            </div>

            <div className='pt-10 flex gap-10 justify-center flex-wrap'>
                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaListeningTools_Leader_Leader.webp" alt="" className='w-27.5 h-[133.43px]'/>

                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaAnalytics_Leader_Mid-Market_Leader.webp" alt="" className='w-27.5 h-[133.43px]'/>

                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaListeningTools_MostImplementable_Total.webp" alt="" className='w-27.5 h-[133.43px]'/>

                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaListeningTools_BestEstimatedROI_Enterprise_Roi.webp" alt="" className='w-27.5 h-[133.43px]'/>

                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaManagement_EasiestToUse_Enterprise_EaseOfUse.webp" alt="" className='w-27.5 h-[133.43px]'/>
            </div>

            <div className='flex justify-center pt-10'>
                <button className='flex items-center gap-2 bg-[#ff6726] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>See the review <ArrowRight size={18} /></button>
            </div>
        </div>
    )
}

export default CustomerReviewSection