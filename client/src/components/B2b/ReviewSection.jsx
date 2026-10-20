import React from 'react'

const ReviewSection = ({review, name, role, profilePic}) => {
  return (
    <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 flex flex-col items-center bg-contain bg-no-repeat bg-center' style={{'backgroundImage': 'url("https://www.agorapulse.com/assets/hv2-feature/pattern-orange.png")'}}>
        <div className='max-w-3xl flex flex-col items-center justify-center'>
            <p className='text-[#212e44] lg:text-3xl md:text-lg text-center font-bold'>{review}</p>
            <div className='pt-5 flex items-center gap-4'>
                <img src={profilePic} alt=""className='lg:h-15 lg:w-15 h-10 w-10' />
                <p className='text-sm lg:text-base font-medium'>—{name}, {role}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewSection