import { Check, ChevronDown, CircleAlert, RadioTower, X } from 'lucide-react'
import React, { useState } from 'react'

const APIComparePricing = () => {

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const APIFeatures = [
        {
            title: "ChatGPT & Claude",
            message: 'Connect ChatGPT or Claude with Agorapulse self-hosted MCP to create and optimize social content.',
            availability: [true, true, true, true],
        },
        {
            title: "Bit.ly",
            message: 'Integrate with Bit.ly to create and track shortened links directly within your publishing workflow',
            availability: [true, true, true, true],
        },
        {
            title: "Google Analytics",
            message: 'Connect your Google Analytics account to track social media traffic and measure ROI',
            availability: [true, true, true, true],
        },
        {
            title: "Google Drive",
            message: 'Access and use images and videos from your Google Drive directly in the content composer',
            availability: [true, true, true, true],
        },
        {
            title: "Tenor",
            message: 'Add GIFs from Tenor to your social media posts without leaving the platform',
            availability: [true, true, true, true],
        },
        {
            title: "Canva",
            message: 'Create and edit graphics using Canva’s design tools directly within the publishing interface',
            availability: [false, true, true, true],
        },
        {
            title: "Zapier",
            message: 'Automate your social workflows, sync Agorapulse with your CRM and project boards',
            availability: [false, false, true, true],
        },
        {
            title: "Looker Studio",
            message: 'Connect your social data to Looker Studio for custom visualization and reporting',
            availability: [false, false, false, true],
        },
        {
            title: "HubSpot",
            message: 'Sync social conversations with your HubSpot CRM to create or enrich contact records',
            availability: [false, false, false, true],
        },
        {
            title: "Salesforce",
            message: 'Connect social conversations with your Salesforce CRM to track customer interactions',
            availability: [false, false, false, true],
        },
        {
            title: "Microsoft Teams",
            message: 'Receive notifications and collaborate with your team through Microsoft Teams integration',
            availability: [false, false, false, true],
        },
        {
            title: "Slack",
            message: 'Receive notifications and collaborate with your team through Slack integration',
            availability: [false, false, false, true],
        },
        {
            title: "Reports open API",
            message: 'Use our API to integrate social data with your BI tools',
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
                                <RadioTower size={24} color='#3a9efe' />
                            </div>
                            <h4 className='text-2xl font-superbold text-[#212e44]'>API & Intregrations</h4>
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
                                {APIFeatures.map((feature, idx) => (
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

export default APIComparePricing