import { Check, Ear, Target, UsersRound } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Cards = () => {

    const features = [
        {
            title: "Advanced Listening",
            icon: Ear,
            description:
                "Track conversations about your brand across millions of social accounts, news platforms, blogs, and forums.",
            benefits: [
                "Set up flexible keyword searches with advanced filters",
                "Monitor mentions by language, location, sentiment, or sources",
                "Share insights with your team or external partners",
                "Add results directly into your existing Agorapulse reports and workflows",
            ],
            button: "Book a demo",
            buttonLink: "/demo",
            learnMore: "Learn more",
            learnMoreLink: "/listening",
        },
        {
            title: "Advocacy",
            icon: UsersRound,
            description:
                "Make it easy for employees and partners to amplify your content with control, clarity, and trackable results.",
            benefits: [
                "Support hiring, launches, events, and employer branding",
                "Curate and approve content for employee sharing",
                "Track campaign performance, traffic, and conversions",
                "Manage everything from inside Agorapulse",
            ],
            button: "Book a demo",
            buttonLink: "/demo",
            learnMore: "Learn more",
            learnMoreLink: "/publishing",
        },
        {
            title: "Competitive Benchmarking",
            icon: Target,
            description:
                "Instantly compare your content, engagement, and audience growth to your top competitors.",
            benefits: [
                "Uncover their top posts by likes, comments, or total engagement",
                "See which formats perform best (Reels, Carousels, Images, etc.)",
                "Track how often they post to fine-tune your own strategy",
                "Set smarter KPIs with side-by-side data that shows exactly where you stand",
            ],
            button: "Book a demo",
            buttonLink: "/demo",
            learnMore: "Learn more",
            learnMoreLink: "/reporting",
        },
        {
            title: "X Lite",
            icon: 'https://www.agorapulse.com/assets/x-logo-v1.svg',
            description: "Essentials for publishing on X (Twitter).",
            benefits: [
                "Schedule and publish posts, including threads",
            ],
            button: "Contact us",
            buttonLink: "/contact",
        },
        {
            title: "X Plus",
            icon: 'https://www.agorapulse.com/assets/x-logo-v1.svg',
            description: "Full X (Twitter) management.",
            benefits: [
                "Schedule and publish posts",
                "Moderate comments and DMs",
                "Access detailed analytics",
            ],
            button: "Contact us",
            buttonLink: "/contact",
        },
    ];

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15'>
            <div className='text-center text-[#212e44]'>
                <h2 className='text-4xl font-black'>Supercharge Your Social Media Strategy</h2>
                <p className='text-lg pt-5'>Extend your plan with powerful add-ons designed to take your social media management to the next level</p>
            </div>

            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {features.map((item, idx) => {
                    const Icon = item.icon;

                    return (
                        <div key={idx} className={`border border-[#d6dae0] rounded-xl py-10 px-2 ${idx < 3 ? 'lg:row-span-2 bg-[#f9f9fa]' : 'bg-white'}`}>
                            <div className='flex flex-col items-center'>
                                {typeof item.icon === 'string' ? (
                                    <img src={item.icon} alt={item.title} className='w-10 h-10' />
                                ) : (
                                    <div className='bg-white p-2 rounded-full'>
                                        <Icon size={30} color='#3a9efe' />
                                    </div>
                                )}

                                <h4 className='pt-6 text-[#212e44] text-2xl text-center font-black'>{item.title}</h4>
                            </div>

                            {typeof item.icon !== 'string' ? (
                                <div className='pt-8 flex justify-center'>
                                    <Link to={item.buttonLink} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })}>
                                        <button className='bg-[#3a9efe] text-white px-6 py-3 rounded-full font-black cursor-pointer border border-transparent hover:text-[#3a9efe] hover:bg-transparent hover:border-[#3a9efe] transition-all duration-300'>{item.button}</button>
                                    </Link>
                                </div>
                            ) : ''}

                            <div className={`${typeof item.icon === 'string' ? 'pt-3' : 'pt-10'}`}>
                                <p className='text-[#212e44] font-medium text-center px-5'>{item.description}</p>
                            </div>

                            <div className='pt-8 flex flex-col items-center gap-4 px-10'>
                                {item.benefits.map((benefit, idx) => (
                                    <div key={idx}>
                                        <div className='flex items-start gap-2'>
                                            <div className='bg-[#3a9efe] rounded-full p-0.5'>
                                                <Check size={14} color='white' strokeWidth={2.5} />
                                            </div>
                                            <p className='text-sm font-medium'>{benefit}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='pt-10'>
                                {typeof item.icon === 'string' ? (
                                    <div className='flex justify-center'>
                                        <Link to={item.buttonLink} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })}>
                                            <button className='text-[#3a9efe] px-6 py-3 rounded-full font-black cursor-pointer border border-[#3a9efe] hover:text-white hover:bg-[#3a9efe] hover:border-transparent transition-all duration-300'>{item.button}</button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className='flex justify-center'>
                                        <Link to={item.learnMoreLink} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })}>
                                            <p className='font-extrabold underline text-[#212e44]'>{item.learnMore}</p>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards