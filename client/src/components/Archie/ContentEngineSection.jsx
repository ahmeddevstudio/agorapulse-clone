import { ArrowRight, Lightbulb, MessageSquareText, Monitor, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const ContentEngineSection = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [displayIndex, setDisplayIndex] = useState(0)
    const [opacity, setOpacity] = useState('opacity-100')

    const cards = [
        {
            Icon: Sparkles,
            title: 'Your brand, captured once. Applied everywhere.',
            desc: 'A Playbook is the blueprint Archie uses to create on-brand social content. Set your audience, goals, voice and visual identity once, and Archie applies that context to everything it creates. Create as many Playbooks as you need.',
            image: 'https://www.agorapulse.com/assets/hv2-feature-archie/feature-archie-playbook-1-EN.webp'
        },
        {
            Icon: MessageSquareText,
            title: 'One asset. A month of posts.',
            desc: 'Drop in a video, whitepaper, podcast, or article and Archie will pull out the strongest ideas to write platform-native posts for each channel. Turn long videos into engaging Reels or short clips with captions in minutes.',
            image: 'https://www.agorapulse.com/assets/hv2-feature-archie/feature-archie-sources-batch-posts-1-EN.webp'
        },
        {
            Icon: Monitor,
            title: 'Create, schedule, and publish without switching tabs.',
            desc: "Archie doesn't stop at the draft. Review your posts, pick the best time to publish, and schedule straight to your calendar through the Agorapulse composer built right in. Create content, distribute it in one connected flow.",
            image: 'https://www.agorapulse.com/assets/hv2-feature-archie/feature-archie-create-publish-1-EN.webp'
        },
        {
            Icon: Lightbulb,
            title: 'Repurpose Your Best. Listen For Your Next.',
            desc: 'Let Archie uncover your best posts from the past 12 months based on reach, impressions or engagement, and recreate them with fresh copy and in new formats. Archie will soon also be able to use listening data to surface relevant conversations, emerging themes and ideas from your industry.',
            image: 'https://www.agorapulse.com/assets/hv2-feature-archie/feature-archie-top-posts-1-EN.webp'
        },
    ]

    const handleCardClick = (index) => {
        if (index === activeIndex) return
        setActiveIndex(index)

        setOpacity('opacity-0')

        setTimeout(() => {
            setDisplayIndex(index)
            setOpacity('opacity-100')
        }, 300)
    }

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className='text-[#021a41] font-black text-4xl text-center'>
                    The <span className='text-[#f50]'>AI Content Engine</span> for Modern Social Media Teams
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center'>
                <div className='flex flex-col gap-4'>
                    {cards.map((card, index) => {
                        const IconComponent = card.Icon
                        const isActive = activeIndex === index

                        return (
                            <div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${isActive
                                    ? 'bg-[#f7ffc566] border-[#f50]/30 shadow-lg'
                                    : 'bg-transparent border-transparent hover:bg-white/50 shadow-xs'
                                    }`}
                            >
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 rounded-xl transition-colors text-[#f50]'>
                                        <IconComponent size={18} />
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='font-bold text-xl transition-colors text-[#021a41]'>
                                            {card.title}
                                        </h3>
                                        {isActive && (
                                            <div className='mt-3 flex flex-col gap-4'>
                                                <p className='text-[#212e44] text-base font-medium leading-relaxed'>
                                                    {card.desc}
                                                </p>

                                                <div className='lg:hidden pt-2 overflow-hidden'>
                                                    <img
                                                        src={cards[displayIndex].image}
                                                        alt={card.title}
                                                        className={`w-full h-auto object-contain transition-opacity duration-300 ${opacity}`}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='hidden lg:flex p-6 rounded-3xl items-center justify-center min-h-112.5 overflow-hidden'>
                    <img
                        src={cards[displayIndex].image}
                        alt={cards[displayIndex].title}
                        className={`max-w-full h-auto object-contain transition-opacity duration-300 ${opacity}`}
                    />
                </div>
            </motion.div>

            <div className='pt-15 flex justify-center'>
                <Link to={'/signup'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                    <button className='flex items-center gap-2 bg-[#f50] px-4 py-3 font-black text-white rounded-lg cursor-pointer border border-transparent hover:bg-transparent hover:border-[#f50] hover:text-[#f50] transition-all'>
                        Try for free <ArrowRight size={18} />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ContentEngineSection