import { Check, ChevronDown, CircleAlert, Headset, X } from 'lucide-react'
import React, { useState } from 'react'

const SupportComparePricing = () => {

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const supportFeatures = [
        {
            title: "Support hours",
            message: 'Access to our global support team for assistance with any platform issues',
            availability: ["24/7", "24/7", "24/7", "24/7"],
        },
        {
            title: "Email support",
            message: 'Get help via email from our dedicated support team with detailed responses to your questions',
            availability: [true, true, true, true],
        },
        {
            title: "Live chat support",
            message: 'Connect instantly with our support team through in-app chat for immediate assistance',
            availability: [false, true, true, true],
        },
        {
            title: "Video call support",
            message: 'Schedule video calls with our support team for personalized guidance and troubleshooting',
            availability: [false, false, false, true],
        },
        {
            title: "First response time",
            message: 'Receive an initial response to your support inquiries in minutes or hours',
            availability: ["<6 hours", "<2 hours", "<1 hour", "<30 min"],
        },
        {
            title: "Self-service training recordings",
            message: 'Access our library of training videos and tutorials to learn at your own pace',
            availability: [true, true, true, true],
        },
        {
            title: "Dedicated Customer Success Manager",
            message: 'Work with a dedicated customer success manager who understands your specific needs',
            availability: [false, false, false, true],
        },
        {
            title: "Onboarding support",
            message: 'Get personalized onboarding assistance to set up your account and train your team',
            availability: [false, false, false, true],
        },
        {
            title: "Quaterly business review",
            message: 'Regular strategic reviews with your Customer Success Manager to optimize your social media performance',
            availability: [false, false, false, true],
        },
    ];

    return (
        <div className='pt-5'>
            <div className='bg-[#f9f9fa] py-5 px-8 rounded-xl'>
                <div>
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <div className='flex gap-5 items-center'>
                            <div className='bg-white p-2 rounded-full'>
                                <Headset size={24} color='#3a9efe' />
                            </div>
                            <h4 className='text-2xl font-superbold text-[#212e44]'>Support</h4>
                        </div>

                        <div>
                            <ChevronDown size={20} strokeWidth={2.5} className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                    </div>

                    <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                        }`}>
                        <div className="min-h-0 overflow-hidden">
                            <div className='mt-10 bg-white rounded-xl py-3 px-5 flex flex-col gap-8'>
                                {supportFeatures.map((feature, idx) => (
                                    <div key={idx}>
                                        <div className='flex lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0'>
                                            <div className='flex gap-2 items-center'>
                                                <p className='text-[#212e44] font-bold'>{feature.title}</p>
                                                <CircleAlert
                                                    size={18}
                                                    className="cursor-pointer text-[#212e44]"
                                                    onClick={() => setSelectedMessage(feature.message)}
                                                />
                                            </div>

                                            <div className="flex gap-12 items-center overflow-x-auto scrollbar-none">
                                                {feature.availability.map((value, index) => (
                                                    <div key={index} className="w-28 flex justify-center">
                                                        {typeof value === "boolean" ? (
                                                            value ? (
                                                                <div className='bg-[#e8f4ff] rounded-full h-5 w-5 flex items-center justify-center'>
                                                                    <Check strokeWidth={2.5} className="text-[#3a9efe] h-4 w-4" />
                                                                </div>
                                                            ) : (
                                                                <div className='bg-[#fff9f4] rounded-full h-5 w-5 flex items-center justify-center'>
                                                                    <X strokeWidth={2.5} className="text-[#ff6726] h-4 w-4" />
                                                                </div>
                                                            )
                                                        ) : (
                                                            <p className="text-[#212e44] font-medium">{value}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedMessage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                    onClick={() => setSelectedMessage(null)}
                >
                    <div
                        className="relative w-full max-w-2xl rounded-[18px] bg-white px-8 py-12 md:px-12 md:py-12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="text-[#212e44] text-lg font-medium">
                            {selectedMessage}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SupportComparePricing