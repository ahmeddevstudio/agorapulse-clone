import React from 'react'

const Cards = () => {

    const cards = [
        {
            title: 'Master the platform quickly',
            desc: 'Get up to speed on key features and start driving impact right away.',
            image: 'https://www.agorapulse.com/assets/academy/calendar-publishing.png'
        },
        {
            title: 'Build confidence in your daily workflows',
            desc: 'Get clear, step-by-step guidance to manage your tasks with ease.',
            image: 'https://www.agorapulse.com/assets/academy/social-media.png'
        },
        {
            title: 'Earn an official certification',
            desc: 'Show off your Agorapulse and social media skills with a shareable badge and certificate.',
            image: 'https://www.agorapulse.com/assets/academy/agorapulse-certified.png'
        },
        {
            title: 'Onboard new teammates with ease',
            desc: 'Train new users faster with Agorapulse Academy courses.',
            image: 'https://www.agorapulse.com/assets/academy/social-inbox.png'
        },
    ]

  return (
    <div className='px-5 [@media(min-width:1400px)]:px-30 py-15'>
        <div>
            <h2 className='text-[#212e44] text-center text-4xl font-superbold'>Become a <span className='text-[#ff6726]'>Power User</span></h2>
        </div>

        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {cards.map((card, idx)=>(
                <div key={idx} className='bg-white p-10 shadow-[0_12px_40px_0_rgba(255,103,38,.0784313725)] rounded-xl'>
                    <div className='text-[#212e44] text-center'>
                        <h4 className='text-lg font-black'>{card.title}</h4>
                        <p className='pt-5 text-sm text-[#5d6a82] font-medium'>{card.desc}</p>
                    </div>

                    <div className='pt-10'>
                        <img src={card.image} alt={card.title} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards