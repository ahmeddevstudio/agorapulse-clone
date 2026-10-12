import { Eye, LockKeyhole, UserRound, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const TrustSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            Icon: LockKeyhole,
            title: 'Your data stays yours',
            desc: 'You own everything Archie creates. Agorapulse only processes your content to provide the service and has no rights over it. Your data is stored in the EU, encrypted, and never used to train our models or those of our AI providers.'
        },
        {
            Icon: Eye,
            title: 'Security you can rely on',
            desc: 'Archie connects through official platform APIs, the same trusted integrations Agorapulse has operated for over a decade. No scraping, browser extensions, or risky workarounds. Your content and credentials are protected by SOC 2 Type II and ISO 27001-certified security.'
        },
        {
            Icon: UserRound,
            title: "You stay in the driver's seat",
            desc: 'Archie does not run your social on autopilot. It amplifies your expertise, helps you create faster, and lets you test more ideas, while every draft remains yours to review, edit, and approve. The speed is AI. The judgment is yours. That is what “Powered by you” means.'
        },
    ];

    const toggleCard = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 lg:py-20 bg-trustSection-gradient grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <div>
                <h2 className='text-[#021a41] text-4xl font-black'>Trusted AI. <span className='md:text-[#f50] text-[#f6ffc4]'>Protected Data.</span> Human Control.</h2>
                <img src="https://www.agorapulse.com/assets/hv2-feature-archie/archie-trusted-ai-tool-1-EN.webp" alt="Archie AI tool" className='h-auto pt-10' />
            </div>

            <div className='flex flex-col gap-4'>
                {cards.map((card, idx) => {
                    const Icon = card.Icon;
                    const isOpen = activeIndex === idx;

                    return (
                        <div
                            key={idx}
                            onClick={() => toggleCard(idx)}
                            className={`cursor-pointer p-6 rounded-2xl border ${isOpen
                                    ? 'bg-[#f6ffc4] shadow-lg border-[#f50]'
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
        </div>
    )
}

export default TrustSection