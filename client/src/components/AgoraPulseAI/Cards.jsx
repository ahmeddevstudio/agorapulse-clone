import { Target, TrendingUp, UsersRound } from 'lucide-react';
import React from 'react'

const Cards = () => {

    const cards = [
        {
            Icon: 'https://www.agorapulse.com/assets/hv2-feature-ai/icon-target-mermaid.svg',
            title: 'Empower Human Creativity for Higher-Impact Work',
            desc: 'Your time is too precious to waste. Give AI your repetitive tasks, such as content creation, moderation, and reporting. Seize the saved time to laser-focus on strategy, creativity, and the big ideas that drive real growth.'
        },
        {
            Icon: 'https://www.agorapulse.com/assets/hv2-feature-ai/icon-insights-mermaid.svg',
            title: 'Insights That Are Uniquely Yours',
            desc: "Get personalized, context-aware intelligence. As an ingrained part of Agorapulse, AI learns your brand's tone, goals, and audience, then always delivers on-brand suggestions and optimizations."
        },
        {
            Icon: 'https://www.agorapulse.com/assets/hv2-feature-ai/icon-collaboration-mermaid.svg',
            title: 'Controllable, Secure and Always Collaborative',
            desc: 'Always stay in control to edit or improve. No guesswork. No black boxes. Our Assistants, not agents, are dedicated to collaborating with you.'
        },
    ]

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 bg-[linear-gradient(0deg,#f5f1ff,#fff)]'>
            <div className='text-center'>
                <h2 className='text-[#212e44] font-black text-4xl'>Give AI The boring, So You Can Be brilliant</h2>
                <p className='pt-3 text-lg'>AI for the Ordinary, Humans for the Extraordinary</p>
            </div>

            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {cards.map((card, idx) => (
                    <div key={idx} className='bg-white rounded-xl p-10 shadow-[0_10px_40px_0_rgba(93,106,130,.05)]'>
                        <div className='flex justify-center'>
                            <img src={card.Icon} alt="" />
                        </div>

                        <div className='pt-3'>
                            <h3 className='text-2xl text-center text-[#021a41] font-bold font'>{card.title}</h3>
                            <p className='pt-3 text-center text-[#212e44] font-medium'>{card.desc}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Cards