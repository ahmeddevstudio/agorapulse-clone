import { ArrowRight, MessageSquareText, Sparkles } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CTASection = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            Icon: Sparkles,
            title: 'Even more powerful together',
            desc: 'Archie turns your strategy, expertise and source material into on-brand social content. Agorapulse brings that content, and everything else your team publishes, into one coordinated workflow'
        },
        {
            Icon: MessageSquareText,
            title: 'The full loop for social media success',
            desc: 'Archie seamlessly blends into your workflow by creating content grounded in your unique strategy and brand voice. From there, you can publish effortlessly alongside the rest of your social media schedule, while keeping team operations streamlined through shared calendars, structured approval processes, and unified inbox management.'
        }
    ];

    const toggleCard = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 lg:py-20'>
            <div>
                <h2 className='text-[#021a41] text-4xl font-black text-center'>Create With <span className='text-[#f50]'>Archie</span>. Manage it All With <span className='text-[#f50]'>Agorapulse</span>.</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-10'>
                <div className='flex flex-col gap-6'>
                    {cards.map((card, idx) => {
                        const Icon = card.Icon;
                        const isOpen = activeIndex === idx;

                        return (
                            <div
                                key={idx}
                                onClick={() => toggleCard(idx)}
                                className={`cursor-pointer p-6 rounded-2xl border ${isOpen
                                    ? 'bg-[#f7ffc566] shadow-lg border-[#f50]'
                                    : 'bg-white border-transparent shadow-sm'
                                    }`}
                            >
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <div className='p-3 text-[#f50]'>
                                            <Icon size={20} strokeWidth={2.5} />
                                        </div>
                                        <h3 className='text-lg font-extrabold text-[#021a41]'>{card.title}</h3>
                                    </div>
                                </div>

                                <div className={`grid ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                    <div className='overflow-hidden'>
                                        <p className='text-[#212e44] leading-relaxed'>
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <img src="https://www.agorapulse.com/assets/hv2-feature-archie/archie-x-agorapulse-EN.webp" alt="" className='h-auto' />
                </div>
            </div>

            <div className='pt-20 flex justify-center'>
                <Link to={'/demo'}>
                    <button className='flex items-center gap-2 bg-[#f50] px-4 py-3 text-white font-black cursor-pointer border border-transparent rounded hover:bg-transparent hover:border-[#f50] hover:text-[#f50] hover:gap-3 transition-all duration-300'>Book an Agorapulse demo <ArrowRight size={20}/></button>
                </Link>
            </div>
        </div>
    )
}

export default CTASection