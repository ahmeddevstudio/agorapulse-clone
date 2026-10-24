import { Check, ChevronDown, CircleAlert, TrendingUp, X } from 'lucide-react'
import React, { useState } from 'react'

const ReportingComparePricing = () => {

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const reportingFeatures = [
        {
            title: "Social profile reports",
            message: 'Get audience and top content reports for each social profile you manage',
            availability: [true, true, true, true],
        },
        {
            title: "Post performance reporting",
            message: 'Understand post-level performance with reach, impressions, clicks, and engagement for each post',
            availability: [true, true, true, true],
        },
        {
            title: "Community management reporting",
            message: 'Track how your team manages each social page’s community',
            availability: [true, true, true, true],
        },
        {
            title: "Basic social media ROI report",
            message: 'Measure clicks and traffic from your posts using Google Analytics',
            availability: [true, true, true, true],
        },
        {
            title: "White-label reporting",
            message: 'Export reports with your logo and brand colors',
            availability: [true, true, true, true],
        },
        {
            title: "Basic report exporting",
            message: 'Download your reports as PDF or .csv files',
            availability: [true, true, true, true],
        },
        {
            title: "AI summary",
            message: 'Generate an AI-powered Report Digest that summarizes your key results in clear and simple language.',
            availability: [true, true, true, true],
        },
        {
            title: "Organization Context AI",
            message: "Set your brand's tone and direction once, and let AI deliver the perfect content.",
            availability: [true, true, true, true],
        },
        {
            title: "Team performance report",
            message: 'Monitor how quickly and effectively team members reply across multiple social profiles',
            availability: [false, true, true, true],
        },
        {
            title: "Cross-network group reports",
            message: 'Compare results across multiple social networks and/or profiles in one view',
            availability: [false, false, true, true],
        },
        {
            title: "Custom date comparison ranges",
            message: 'Pick custom comparison ranges for smarter trend analysis',
            availability: [false, false, true, true],
        },
        {
            title: "Label reports",
            message: 'Measure performance of content grouped by label and analyze the distribution of inbox items',
            availability: [false, false, true, true],
        },
        {
            title: "Scheduled report emails",
            message: 'Get automated reports in your inbox or send them to your team or clients',
            availability: [false, false, true, true],
        },
        {
            title: "Advanced report exporting",
            message: 'Download your reports as PowerPoint (PPTX) files',
            availability: [false, false, true, true],
        },
        {
            title: "Advanced social media ROI report",
            message: 'Connect conversions and revenue back to specific content',
            availability: [false, false, true, true],
        },
        {
            title: "Ads reporting",
            message: 'Analyze and report on your paid ads for Facebook, Instagram, and LinkedIn',
            availability: [false, false, true, true],
        },
        {
            title: "Historical data import",
            message: 'Sync up to 24 months of past performance data',
            availability: [false, false, false, true],
        },
        {
            title: "Data retention",
            message: 'Store and access up to 24 months of post and inbox data',
            availability: ["6 months", "12 months", "24 months", "24 months"],
        },
    ];

    return (
        <div className='pt-5'>
            <div className='bg-[#f9f9fa] py-5 px-8 rounded-xl'>
                <div>
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <div className='flex gap-5 items-center'>
                            <div className='bg-white p-2 rounded-full'>
                                <TrendingUp size={24} color='#3a9efe' />
                            </div>
                            <h4 className='text-2xl font-superbold text-[#212e44]'>Reporting</h4>
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
                                {reportingFeatures.map((feature, idx) => (
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

export default ReportingComparePricing