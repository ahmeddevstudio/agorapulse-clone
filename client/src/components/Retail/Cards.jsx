import React from 'react'

const Cards = () => {

    const cards = [
        {
            title: '74%',
            desc: 'of consumers use social media to make purchasing decisions.'
        },
        {
            title: '55%',
            desc: 'of consumers are more likely to purchase from brands that respond to comments and questions on social media.'
        },
        {
            title: '27%',
            desc: 'of consumers prefer discovering new products through social media over any other channel.'
        },
    ]

    return (
        <div className='px-15 [@media(min-width:1400px)]:px-30 py-20'>
            <div className='text-[#212e44] text-center'>
                <h2 className='text-4xl md:text-5xl font-superbold'>Challenges of ever-evolving retail</h2>
                <p className='pt-10 text-lg font-medium'>Consumers are increasingly favoring online shopping over physical stores. Each year, new online brands emerge, which poses a challenge to retail businesses for market share. Influencers, social media, and online reviews are the main drivers of buying decisions. Retail businesses must adapt, so they can thrive in those dynamic market conditions. Here's why:</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10'>
                {cards.map((card, idx)=>(
                    <div key={idx} className='bg-white shadow-[0_19px_40px_0_rgba(255,224,210,0.2)] p-10 flex flex-col items-center'>
                        <h3 className='text-4xl font-black text-[#ff6726]'>{card.title}</h3>
                        <p className='pt-5 text-center text-lg text-[#212e44cc] font-medium'>{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards