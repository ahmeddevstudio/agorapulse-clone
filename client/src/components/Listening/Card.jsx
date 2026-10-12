import { RadioTower, Send, Share2 } from 'lucide-react';
import React from 'react'

const Card = () => {

    const cards = [
        {
            Icon: RadioTower,
            title: 'No more blind spots',
            desc: 'Monitor every platform where your brand comes up. If it is being said publicly it lands in your feed, and one-click AI screening keeps the irrelevant results out of it.'
        },
        {
            Icon: Share2,
            title: 'Benchmark against competitors',
            desc: 'Track your competitors in the same searches as your own brand and see how your share of the conversation compares, week after week.'
        },
        {
            Icon: Send,
            title: 'Insights your whole team can use',
            desc: 'Route what you find to the people who can act on it: reply from your inbox, brief sales on competitor complaints, hand product a recurring bug, escalate a crisis before it spreads.'
        }
    ];

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 text-[#212e44] bg-[#f3fffe]'>
            <div className='text-center'>
                <h2 className='text-4xl font-extrabold [-webkit-text-stroke:1.5px]'>Social listening that ends in a decision, not a dashboard</h2>
            </div>

            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {cards.map((card, idx)=>{
                    const Icon = card.Icon;

                    return (
                        <div key={idx} className='bg-white p-8 flex flex-col items-center rounded-2xl shadow-lg shadow-[#2fd9c41a]'>
                            <div className='flex flex-col items-center'>
                                <Icon color='#2fd9c4' size={28}/>
                                <h4 className='pt-5 text-[#212e44] text-lg font-bold'>{card.title}</h4>
                            </div>

                            <div>
                                <p className='text-center text-[#212e44] pt-8 text-lg font-medium'>{card.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card