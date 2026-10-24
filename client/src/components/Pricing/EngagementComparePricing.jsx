import { Check, ChevronDown, CircleAlert, Megaphone, X } from 'lucide-react'
import React, { useState } from 'react'

const EngagementComparePricing = () => {

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const engagementFeatures = [
        {
            title: "All-in-one social inbox",
            message: 'Manage comments, DMs, and reviews from all networks in one inbox',
            availability: [true, true, true, true],
        },
        {
            title: "Comment moderation",
            message: 'Hide, delete, or reply to organic comments directly from your inbox',
            availability: [true, true, true, true],
        },
        {
            title: "Google reviews moderation",
            message: 'Reply to reviews on your Google Business Profile without leaving your inbox',
            availability: [true, true, true, true],
        },
        {
            title: "Inbox search",
            message: 'Find messages or comments by keyword',
            availability: [true, true, true, true],
        },
        {
            title: "Inline translation",
            message: 'Translate incoming messages directly inside the inbox',
            availability: [true, true, true, true],
        },
        {
            title: "Conversation notes",
            message: 'Add private notes to conversations to share context with teammates',
            availability: [true, true, true, true],
        },
        {
            title: "Contact history & notes",
            message: 'View conversation history and add internal notes for each contact',
            availability: [true, true, true, true],
        },
        {
            title: "Automated Moderation",
            message: 'Automatically review, assign, hide, label or delete inbox items using smart rules',
            availability: [true, true, true, true],
        },
        {
            title: "Post-level moderation",
            message: 'View and manage comments directly from a specific post',
            availability: [false, true, true, true],
        },
        {
            title: "Ad comments moderation",
            message: 'View and manage comments on paid posts on Facebook, Instagram, TikTok, and LinkedIn',
            availability: [false, true, true, true],
        },
        {
            title: "Assign comments & messages",
            message: 'Manually assign inbox items to the right team member',
            availability: [false, true, true, true],
        },
        {
            title: "Reply collision detection",
            message: 'Avoid duplicate replies by seeing when someone else is replying',
            availability: [false, true, true, true],
        },
        {
            title: "Custom inbox views",
            message: 'Create personalized inbox views combining multiple social profiles and filters',
            availability: [false, true, true, true],
        },
        {
            title: "Saved replies",
            message: 'Reply faster with pre-written, reusable responses',
            availability: [false, false, true, true],
        },
        {
            title: "Filter presets",
            message: 'Save your go-to filter sets to quickly surface the inbox items that matter',
            availability: [false, false, true, true],
        },
        {
            title: "Advanced spam management",
            message: 'Quickly ban users and clean up spam with Ban & Hide or Ban & Delete actions',
            availability: [false, false, true, true],
        },
        {
            title: "Bulk inbox management",
            message: 'Review, assign, hide, label or delete multiple inbox items at once',
            availability: [false, false, true, true],
        },
        {
            title: "Inbox labels",
            message: 'Organize and categorize inbox items with labels for easier sorting and analysis',
            availability: [false, false, true, true],
        },
        {
            title: "Sentiment detection",
            message: 'See whether a message or comment is positive, negative, or neutral',
            availability: [false, false, true, true],
        },
        {
            title: "Comment export",
            message: 'Download all or selected comments from one or more posts for reporting or analysis',
            availability: [false, false, true, true],
        },
        {
            title: "AI reply suggestions",
            message: 'Receive AI-generated reply suggestions based on past interactions',
            availability: [false, false, false, true],
        },
        {
            title: "Business hours settings",
            message: 'Exclude off-hours when calculating average response time',
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
                                <Megaphone size={24} color='#3a9efe' />
                            </div>
                            <h4 className='text-2xl font-superbold text-[#212e44]'>Engagement</h4>
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
                                {engagementFeatures.map((feature, idx) => (
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

export default EngagementComparePricing