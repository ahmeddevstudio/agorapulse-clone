import { CalendarDays, Database, MessageSquareMore, Podium, TrendingUp } from 'lucide-react';
import React from 'react'

const Cards = () => {

    const cards = [
        {
            Icon: CalendarDays,
            title: "Plan your content effortlessly",
            description:
                "Schedule posts in advance and make the algorithm your friend.",
        },
        {
            Icon: MessageSquareMore,
            title: "Never miss a message",
            description:
                "Respond to all your conversations in one place.",
        },
        {
            Icon: TrendingUp,
            title: "Prove your ROI",
            description:
                "Track the real impact of your social efforts with measurable results.",
        },
        {
            Icon: Database,
            title: "Make data-driven decisions",
            description:
                "Access clear and actionable information from personalized reports.",
        },
        {
            Icon: Podium,
            title: "Stay ahead of trends",
            description:
                "Monitor key conversations and establish your brand as a thought leader.",
        },
    ];

    return (
        <div className='px-10 py-15 [@media(min-width:1400px)]:px-24'>
            <div className='text-center'>
                <h2 className='text-4xl font-superbold text-[#212e44]'>Take control of your social strategy and manage your accounts efficiently, all while <span className='text-[#ff6726]'>driving measurable business results.</span></h2>
            </div>

            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {cards.map((card, idx)=>{
                    const Icon = card.Icon;

                    return (
                        <div key={idx} className='border border-[#858fa133] rounded-lg p-5 flex flex-col items-center shadow-[0_24px_20px_0_rgba(33,46,68,.02)] px-20'>
                            <div>
                                <Icon size={30} color='#ff6726'/>
                            </div>
                            
                            <div className='pt-3 text-center'>
                                <h3 className='text-lg text-[#212e44] font-extrabold'>{card.title}</h3>
                                <p className='text-[#212e44] text-lg font-medium pt-5'>{card.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards