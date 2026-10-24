import { ArrowRight, Check, CircleAlert, Eye, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PublishingComparePricing from './PublishingComparePricing'
import EngagementComparePricing from './EngagementComparePricing'
import ReportingComparePricing from './ReportingComparePricing'
import APIComparePricing from './APIComparePricing'
import SupportComparePricing from './SupportComparePricing'
import SecurityComparePricing from './SecurityComparePricing'

const ComparePricing = () => {
    const [selectedMessage, setSelectedMessage] = useState(null)

    const overview = [
        {
            title: "Social profiles",
            message: "Each of the following counts toward your profile limit: Facebook, Instagram, LinkedIn (company pages and personal profiles), TikTok, X (Twitter), YouTube, Threads, Pinterest, Bluesky, and Google Business. Ad accounts, Google Analytics, and third-party tool integrations do not count toward your profile limit. If you need more than your plan's limit, you can add extra profiles for $10/month each.",
            values: ["10", "10", "10", "Unlimited"],
        },
        {
            title: "Mobile app for iOS and Android",
            message: "Access your social media accounts on the go with our companion app. Reply to messages, review analytics, approve content, and publish posts from your mobile device, ensuring you never miss important interactions even when away from your desk",
            values: [true, true, true, true],
        },
    ]

    const plans = [
        { name: 'Standard', label: 'Try now', href: '/signup' },
        { name: 'Professional', label: 'Try now', href: '/signup' },
        { name: 'Advanced', label: 'Try now', href: '/signup', featured: true },
        { name: 'Custom', label: 'Get demo', href: '/demo' },
    ]

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15'>
            <div className='bg-[#f9f9fa] py-6 px-4 sm:py-8 sm:px-6 lg:py-10 lg:px-8 rounded-xl'>
                <div>
                    <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center'>
                        <div className='flex gap-3 sm:gap-5 items-center shrink-0'>
                            <div className='bg-white p-2 rounded-full shrink-0'>
                                <Eye size={30} color='#3a9efe' />
                            </div>
                            <h4 className='text-2xl font-superbold text-[#212e44]'>
                                Overview
                            </h4>
                        </div>

                        <div className='w-full lg:w-auto overflow-x-auto pb-5 lg:pb-0'>
                            <div className='flex justify-between gap-3 sm:gap-5 lg:gap-12 min-w-150 lg:min-w-0'>
                                {plans.map((plan) => (
                                    <div
                                        key={plan.name}
                                        className='flex-1 lg:flex-none flex flex-col items-center'
                                    >
                                        <p className='text-base sm:text-lg text-[#212e44] font-extrabold text-center pb-2 whitespace-nowrap'>
                                            {plan.name}
                                        </p>

                                        <Link to={plan.href}>
                                            <button
                                                className={`flex items-center justify-center py-2 px-3 sm:px-5 rounded-full gap-2 border cursor-pointer font-extrabold whitespace-nowrap transition-all duration-300 ${plan.featured
                                                    ? 'bg-[#ff6726] border-transparent text-white hover:text-[#ff6726] hover:bg-transparent hover:border-[#ff6726]'
                                                    : 'bg-white border-[#3a9efe] text-[#3a9efe] hover:text-white hover:bg-[#3a9efe]'
                                                    }`}
                                            >
                                                {plan.label}
                                                <ArrowRight size={18} strokeWidth={2.5} />
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 sm:mt-10 bg-white rounded-xl py-4 px-3 sm:px-5 flex flex-col gap-7 sm:gap-8'>
                        {overview.map((feature, idx) => (
                            <div key={idx} className='w-full'>
                                <div className='flex justify-between items-center gap-4'>
                                    <div className='flex gap-2 items-center flex-1 min-w-0'>
                                        <p className='text-[#212e44] font-bold text-sm sm:text-base'>
                                            {feature.title}
                                        </p>

                                        <CircleAlert
                                            size={18}
                                            className="cursor-pointer text-[#212e44] shrink-0"
                                            onClick={() => setSelectedMessage(feature.message)}
                                        />
                                    </div>

                                    <div className='w-[52%] sm:w-[55%] lg:w-auto shrink-0 overflow-x-auto pb-5 lg:pb-0'>
                                        <div className='grid grid-cols-4 min-w-55 sm:min-w-70 lg:min-w-0 lg:flex lg:gap-12 items-center'>

                                            {feature.values.map((value, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-center items-center min-w-0 lg:w-28 lg:shrink-0"
                                                >
                                                    {typeof value === "boolean" ? (
                                                        value ? (
                                                            <div className='bg-[#e8f4ff] rounded-full h-5 w-5 flex items-center justify-center shrink-0'>
                                                                <Check
                                                                    strokeWidth={2.5}
                                                                    className="text-[#3a9efe] h-4 w-4"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <span className="text-gray-400">—</span>
                                                        )
                                                    ) : (
                                                        <p className="text-[#212e44] font-medium text-sm sm:text-base text-center wrap-break-word">
                                                            {value}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedMessage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
                    onClick={() => setSelectedMessage(null)}
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[18px] bg-white px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close information"
                            className="absolute lg:hidden top-3 right-3 p-1 rounded-full text-[#212e44] hover:bg-gray-100 transition-colors"
                            onClick={() => setSelectedMessage(null)}
                        >
                            <X size={22} />
                        </button>

                        <p className="text-[#212e44] text-base sm:text-lg font-medium pr-4">
                            {selectedMessage}
                        </p>
                    </div>
                </div>
            )}

            <PublishingComparePricing />

            <EngagementComparePricing />

            <ReportingComparePricing />

            <APIComparePricing />

            <SupportComparePricing />

            <SecurityComparePricing />
        </div>
    )
}

export default ComparePricing