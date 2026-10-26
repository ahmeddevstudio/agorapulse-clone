import React from 'react'

const Features = () => {
  return (
    <div className='px-10 py-15 [@media(min-width:1400px)]:px-24'>
        <div className='bg-[#fff9f4] p-20 rounded-xl border border-[#858fa133] bg-contain bg-no-repeat bg-bottom' style={{'backgroundImage': 'url("https://www.agorapulse.com/assets/contact-demo/block-rewardsBanner-bg.png")'}}>
            <div>
                <h2 className='text-[#212e44] text-3xl md:text-4xl text-center font-superbold'>Agorapulse: Social Media Managers' Favorite Tool</h2>
            </div>

            <div className='flex gap-10 flex-wrap justify-center pt-10'>
                <img src="https://www.agorapulse.com/assets/badges/g2-leader_mid_market_winter_2025.svg" alt="" />
                <img src="https://www.agorapulse.com/assets/badges/g2-most_implementable_winter_2025.svg" alt="" />
                <img src="https://www.agorapulse.com/assets/badges/g2-best_roi_winter_2025.svg" alt="" />
                <img src="https://www.agorapulse.com/assets/badges/g2-easiest_to_use_winter_2025.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Features