import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'motion/react'

const PrefersSections = () => {

    const benefits = {
        features: [
            { ben: 'Social Listening Availability' },
            { ben: 'Source coverage' },
            { ben: 'Historical Data Access' },
            { ben: 'Noise filtering' },
            { ben: 'Share of Voice' },
            { ben: 'Sentiment analysis' },
            { ben: 'Real-time alerts' },
            { ben: 'Reporting' },
            { ben: 'Influencer Identification' },
            { ben: 'Ease of use & team adoption' },
            { ben: 'Security & compliance' }
        ],
        agorapulse: [
            { ben: 'Available as an Affordable Add-On' },
            { ben: 'Social networks, news, blogs and forums in a single search' },
            { ben: 'Up to 24 months' },
            { ben: 'One-click AI screening on every search' },
            { ben: 'Native, no setup required' },
            { ben: 'Included, and your team can reclassify any mention' },
            { ben: 'Volume and sentiment alerts, including custom crisis keyword alerts' },
            { ben: 'Listening data flows into Report Studio, alongside your publishing, inbox and analytics data' },
            { ben: 'Focuses on Brand & Competitor Conversations' },
            { ben: 'Live in minutes, simple enough for a whole team to use it' },
            { ben: 'SOC 2 Type II and ISO 27001:2022 certified' }
        ],
        otherTools: [
            { ben: 'Often shallow or partial, even on premium tiers' },
            { ben: 'Often social-only or web-only, with the rest sold as separate modules' },
            { ben: 'Often limited to 7 to 13 months without an upgrade' },
            { ben: 'Available, But Often Requires Enterprise Plans' },
            { ben: 'Higher tier, paid add-on, or not native at all' },
            { ben: 'Included, often not editable' },
            { ben: 'Yes, but often without custom crisis tracking' },
            { ben: 'Separate exports, data stays in a silo' },
            { ben: 'Yes, With AI Features (But at an Added Cost)' },
            { ben: 'Enterprise onboarding, licences concentrated on one or two analysts' },
            { ben: 'Varies, and rarely both' }
        ]
    }

    return (
        <div className='px-4 sm:px-8 [@media(min-width:1400px)]:px-24 py-12 sm:py-16 bg-[#CFECEA] bg-cover bg-no-repeat overflow-hidden' style={{ 'backgroundImage': 'url("https://www.agorapulse.com/assets/hv2-feature-monitoring/bg-business-sm-1.png")' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className='text-center mb-10 sm:mb-12'>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-[#212e44] [-webkit-text-stroke:0.5px]'>
                    Why users prefer Agorapulse
                </h2>
            </motion.div>

            <div className='max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden relative pb-6 sm:pb-8 px-4 sm:px-6 md:px-10'>
                <div className='hidden md:grid grid-cols-3 px-6 md:px-12 py-6 items-center text-center font-bold text-[#212e44] relative z-10'>
                    <div className='text-left text-xl md:text-2xl font-black'>Features</div>

                    <div className='bg-[#d5f7f3] py-4 px-4 rounded-2xl flex justify-center items-center'>
                        <img src={assets.agorapulse_logo} alt="Agorapulse" className='h-8' />
                    </div>

                    <div className='text-xl md:text-2xl font-black'>Other Tools</div>
                </div>

                <div className='divide-y divide-[#057e7a08] relative'>
                    {benefits.features.map((item, index) => (
                        <div
                            key={index}
                            className={`p-4 sm:p-6 md:px-12 md:py-6 md:grid md:grid-cols-3 md:items-center relative transition-colors font-medium rounded-lg ${index % 2 === 0 ? 'bg-[#057e7a08]' : 'bg-white'
                                }`}
                        >
                            <div className='md:hidden space-y-3'>
                                <div className='text-base sm:text-lg font-black text-[#212e44] pb-1 border-b border-teal-900/10'>
                                    {item.ben}
                                </div>

                                <div className='bg-[#cef3ef] text-[#057e7a] font-extrabold p-3 sm:p-4 rounded-xl text-sm sm:text-base'>
                                    <div className='text-xs uppercase tracking-wider text-[#057e7a]/70 mb-1 flex items-center gap-2 font-bold'>
                                        <img src={assets.agorapulse_logo} alt="Agorapulse" className='h-4 inline-block' />
                                        Agorapulse
                                    </div>
                                    {benefits.agorapulse[index].ben}
                                </div>

                                <div className='bg-gray-50 border border-gray-100 text-[#212e44] font-normal p-3 sm:p-4 rounded-xl text-sm sm:text-base'>
                                    <div className='text-xs uppercase tracking-wider text-gray-400 mb-1 font-bold'>Other Tools</div>
                                    {benefits.otherTools[index].ben}
                                </div>
                            </div>

                            <div className='hidden md:block text-left text-lg font-semibold text-[#212e44] pr-4'>
                                {item.ben}
                            </div>

                            <div className='hidden md:block bg-[#cef3ef] text-[#057e7a] font-extrabold px-6 py-4 rounded-xl mx-2 text-lg'>
                                {benefits.agorapulse[index].ben}
                            </div>

                            <div className='hidden md:block text-[#212e44] pl-12 lg:pl-20 font-normal text-lg'>
                                {benefits.otherTools[index].ben}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-[#0FA09B] mt-10 py-8 px-6 sm:px-10 md:px-14 lg:px-16 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 shadow-lg'>
                <div className='w-28 sm:w-36 md:w-44 lg:w-48 shrink-0 flex justify-center'>
                    <img
                        src="https://www.agorapulse.com/assets/hv2-feature-monitoring/tyler-green-image.png"
                        alt="Tyler Greene"
                        className='w-full h-auto object-cover rounded-2xl shadow-md'
                    />
                </div>

                <div className='text-center md:text-left flex-1'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl text-white font-extrabold tracking-tight'>
                        What social media managers are saying:
                    </h3>

                    <p className='text-white text-base sm:text-lg font-normal pt-3 leading-relaxed opacity-95'>
                        “We manage over 30 different properties and each property has a Facebook and a Google Business Profile. The inbox and listening features help us manage timely responses to reviews and social engagements.”
                    </p>

                    <p className='text-white pt-4 font-black text-base sm:text-lg tracking-wide md:text-left text-center'>
                        Tyler Greene <span className='font-normal text-white/80'>— TLC Properties</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrefersSections