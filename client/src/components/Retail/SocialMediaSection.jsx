import React from 'react'

const SocialMediaSection = () => {
    return (
        <div className='px-20 [@media(min-width:1400px)]:px-24 py-15 flex flex-col items-center relative'>
            <div className='text-[#212e44] text-center'>
                <h2 className='text-4xl md:text-5xl font-superbold'>Agorapulse is the top-rated social media management platform</h2>
            </div>

            <div className='pt-10 flex max-w-179.25 gap-5'>
                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaManagement_EasiestToUse_Enterprise_EaseOfUse.png" alt="" className='w-[14%] object-contain' />
                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaAnalytics_Leader_Mid-Market_Leader.png" alt="" className='w-[17%] object-contain' />
                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaListeningTools_Leader_Leader.png" alt="" className='w-[28.8%] object-contain' />
                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaListeningTools_MostImplementable_Total.png" alt="" className='w-[17.5%] object-contain' />
                <img src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaListeningTools_BestEstimatedROI_Enterprise_Roi.png" alt="" className='w-[14%] object-contain' />
            </div>

            <div className='hidden lg:block'>
                <img src="https://www.agorapulse.com/assets/retail/avatar1.webp" alt="" className='w-30 h-30 absolute top-[28%] left-10'/>
                <img src="https://www.agorapulse.com/assets/retail/avatar2.webp" alt="" className='w-15 h-15 absolute top-[75%] left-[3%]'/>
                <img src="https://www.agorapulse.com/assets/retail/avatar3.webp" alt="" className='w-23 h-23 absolute top-[80%] left-[19%]'/>
                <img src="https://www.agorapulse.com/assets/retail/avatar4.webp" alt="" className='w-28 h-28 absolute top-[20%] left-[90%]'/>
                <img src="https://www.agorapulse.com/assets/retail/avatar5.webp" alt="" className='w-16 h-16 absolute top-[75%] right-[8%]'/>
            </div>
        </div>
    )
}

export default SocialMediaSection