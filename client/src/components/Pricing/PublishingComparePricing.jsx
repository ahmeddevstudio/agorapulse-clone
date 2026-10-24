import { Check, ChevronDown, CircleAlert, Send, X } from 'lucide-react'
import React, { useState } from 'react'

const PublishingComparePricing = () => {

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const publishingFeatures = [
        {
            title: "Unlimited post scheduling",
            message: 'Schedule as many posts as you want across all connected profiles',
            plans: [true, true, true, true],
        },
        {
            title: "Multi-network publishing",
            message: 'Publish the same content to multiple social networks at once',
            plans: [true, true, true, true],
        },
        {
            title: "Multi-profile publishing",
            message: 'Publish to multiple profiles or networks in one go',
            plans: [true, true, true, true],
        },
        {
            title: "Unified content calendar",
            message: 'View and manage all scheduled and past posts in one collaborative calendar',
            plans: [true, true, true, true],
        },
        {
            title: "Save as draft",
            message: 'Save unfinished posts to edit or publish later',
            plans: [true, true, true, true],
        },
        {
            title: "Audience targeting options",
            message: 'Save unfinished posts to edit or publish later',
            plans: [true, true, true, true],
        },
        {
            title: "AI Writing Assistant",
            message: 'Let AI craft compelling captions or post text',
            plans: [true, true, true, true],
        },
        {
            title: "AI alt text generator",
            message: 'Automatically generate accessibility text for images using AI',
            plans: [true, true, true, true],
        },
        {
            title: "Organization Context AI",
            message: "Set your brand's tone and direction once, and let AI deliver the perfect content.",
            plans: [true, true, true, true],
        },
        {
            title: "Link shortening and tracking",
            message: "Shorten links and track click performance",
            plans: [true, true, true, true],
        },
        {
            title: "Automated link tracking",
            message: "Automatically add UTM parameters to your links",
            plans: [true, true, true, true],
        },
        {
            title: "Content library",
            message: "Store and reuse approved content and media",
            plans: [true, true, true, true],
        },
        {
            title: "First comment & threads",
            message: "Schedule first comments on Instagram, Facebook, and LinkedIn or threaded posts on X",
            plans: [false, true, true, true],
        },
        {
            title: "Calendar notes",
            message: "Add notes to your calendar to coordinate campaigns and content themes",
            plans: [false, true, true, true],
        },
        {
            title: "Instagram grid preview",
            message: "Preview how scheduled Instagram posts will appear on your profile",
            plans: [false, true, true, true],
        },
        {
            title: "Video subtitles upload",
            message: "Upload .srt files to add subtitles in multiple languages to your scheduled video posts",
            plans: [false, true, true, true],
        },
        {
            title: "Instagram product tagging",
            message: "Tag products in Instagram posts directly from the composer",
            plans: [false, true, true, true],
        },
        {
            title: "Link in bio tool (PulseLink in bio)",
            message: "Showcase key links with a clickable landing page for your Instagram bio",
            plans: [false, true, true, true],
        },
        {
            title: "Internal comments",
            message: "Leave internal comments on post drafts and tag teammates for feedback",
            plans: [false, true, true, true],
        },
        {
            title: "Simple approval workflows",
            message: "Assign or route content to teammates or clients for one-step approvals",
            plans: [false, true, true, true],
        },
        {
            title: "Custom fields",
            message: "Add dynamic placeholders to tailor copy for each profile",
            plans: [false, false, true, true],
        },
        {
            title: "Publishing queues",
            message: "Automate publishing based on predefined time slots",
            plans: [false, false, true, true],
        },
        {
            title: "Bulk scheduling",
            message: "Upload and schedule up to 200 posts at once importing a .csv file",
            plans: [false, false, true, true],
        },
        {
            title: "Bulk approve posts",
            message: "Approve multiple posts at once to streamline workflows",
            plans: [false, false, true, true],
        },
        {
            title: "Recommended publishing times in composer",
            message: "See the best time to publish while creating your post",
            plans: [false, false, true, true],
        },
        {
            title: "Post labels",
            message: "Categorize posts with labels for tracking or reporting",
            plans: [false, false, true, true],
        },
        {
            title: "Shared calendars",
            message: "Share content calendars with external stakeholders for quick and easy review before publishing",
            plans: [false, false, true, true],
        },
        {
            title: "Boost posts (Facebook)",
            message: "Promote Facebook posts directly from your content calendar",
            plans: [false, false, false, true],
        },
        {
            title: "Ad calendar sync",
            message: "Display your synced Facebook and Instagram ads alongside organic posts in your content calendar",
            plans: [false, false, false, true],
        },
        {
            title: "Multi-step approval workflows",
            message: "Create custom approval chains with multiple reviewers",
            plans: [false, false, false, true],
        },
    ];

    return (
        <div className='pt-5'>
            <div className='bg-[#f9f9fa] py-5 px-8 rounded-xl'>
                <div>
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <div className='flex gap-5 items-center'>
                            <div className='bg-white p-2 rounded-full'>
                                <Send size={24} color='#3a9efe' />
                            </div>
                            <h4 className='text-2xl font-superbold text-[#212e44]'>Publishing</h4>
                        </div>

                        <div>
                            <ChevronDown size={20} strokeWidth={2.5} className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                    </div>

                    <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <div className="min-h-0 overflow-hidden">
                            <div className='mt-10 bg-white rounded-xl py-3 px-5 flex flex-col gap-8'>
                                {publishingFeatures.map((feature, idx) => (
                                    <div key={idx}>
                                        <div className='flex lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0'>
                                            <div className='flex gap-2 items-center'>
                                                <p className='text-[#212e44] font-bold'>{feature.title}</p>
                                                <CircleAlert size={18} className="cursor-pointer text-[#212e44]" onClick={() => setSelectedMessage(feature.message)} />
                                            </div>

                                            <div className="flex gap-12 items-center overflow-x-auto scrollbar-none">
                                                {feature.plans.map((value, index) => (
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
        </div>
    )
}

export default PublishingComparePricing