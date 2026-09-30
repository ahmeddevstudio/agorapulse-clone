import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { CalendarDays, Gauge, UserRoundGroup } from 'lucide-react'

const SocialMediaManagementSection = () => {

    const [activeCard, setActiveCard] = useState(0)

    const cards = [
        {
            Icon: CalendarDays,
            title: 'Streamline your social content management',
            desc: 'Everything you need to easily manage your content and grow your brand across all major social media platforms.'
        },
        {
            Icon: UserRoundGroup,
            title: 'Enhance team collaboration',
            desc: 'Remove the internal friction and downright annoyance of having to send multiple emails and messages to get approvals.'
        },
        {
            Icon: Gauge,
            title: 'Empower your team with actionable insights',
            desc: 'Measure the metrics that matter to your brand. Get the insights and data you need to craft posts and cultivate conversations that grow your business.'
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % cards.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [cards.length])

    return (
        <div
            className="bg-cover bg-no-repeat bg-[#FFF9F4] px-4 py-15 [@media(min-width:1400px)]:px-24"
            style={{ backgroundImage: `url(${assets.bg_business})` }}
        >
            <div className="md:max-w-2xl">
                <h3 className="text-[38px] font-bold text-[#021a41]">
                    Effective social media management with{' '}
                    <span className="text-[#f50]">
                        impactful business outcomes
                    </span>
                </h3>

                <p className="pt-3 text-[#021a41]">
                    Easily overcome the challenges of managing, building, and
                    maintaining social media profiles. All while capturing the
                    real business value of your efforts.
                </p>
            </div>

            {/* Desktop */}
            <div className="hidden gap-10 pt-15 md:flex">
                {cards.map((card) => {
                    const Icon = card.Icon

                    return (
                        <div
                            key={card.title}
                            className="w-1/3 rounded-2xl bg-white p-5"
                        >
                            <div className="w-fit rounded bg-[#ffefe9] p-2">
                                <Icon size={26} color="#f50" />
                            </div>

                            <div className="pt-5 text-[#021a41]">
                                <h4 className="text-xl font-semibold">
                                    {card.title}
                                </h4>

                                <p className="pt-3 text-[15px]">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Mobile */}
            <div className="pt-10 md:hidden">
                {cards.map((card, index) => {
                    const Icon = card.Icon

                    return (
                        <div
                            key={card.title}
                            className={`rounded-2xl bg-white p-5 transition-all duration-500 ${activeCard === index
                                    ? 'block opacity-100'
                                    : 'hidden'
                                }`}
                        >
                            <div className="w-fit rounded bg-[#ffefe9] p-2">
                                <Icon size={26} color="#f50" />
                            </div>

                            <div className="pt-5 text-[#021a41]">
                                <h4 className="text-xl font-semibold">
                                    {card.title}
                                </h4>

                                <p className="pt-3 text-[15px]">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}

                {/* Dots */}
                <div className="flex justify-center gap-2 pt-5">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCard(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${activeCard === index
                                    ? 'w-6 bg-[#f50]'
                                    : 'w-2 bg-[#d9d9d9]'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className='bg-[#FFE1D4] mt-10 p-10 rounded-2xl flex md:justify-between gap-5 md:gap-30 flex-col-reverse md:flex-row'>
                <div>
                    <h1 className='text-xl text-[#021a41] font-semibold'>"It's our go-to social media management platform!"</h1>
                    <p className='text-[#ff5500] text-lg pt-3'>"We've got everyone on board, from marketing to product management, using this awesome platform. It's super easy to schedule posts in advance, collaborate with our teams, and share the right metrics across all stakeholders -- all in one place."</p>
                    <p className='text-[#021a41] pt-3 flex justify-end items-center gap-3 font-medium'>Joanne Watt, Marketing Lead <img src="https://www.agorapulse.com/assets/hv2-home2/stream-yard-logo.svg" alt="" /></p>
                </div>

                <div>
                    <img src="https://www.agorapulse.com/assets/hv2-home2/user-avatar-2.avif" alt="" className='w-30 md:w-full object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaManagementSection
