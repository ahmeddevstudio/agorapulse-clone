import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const FAQSection = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Who is Archie for?",
            answer:
                "Archie is for social media managers, marketers, agencies, founders and subject-matter experts who already produce valuable content but need a faster way to turn it into social posts. It is especially useful for teams with webinars, articles, reports, podcasts or videos that are not being fully used across social media."
        },
        {
            question: "What is Archie?",
            answer:
                "Archie is an AI content repurposing tool for social media. It uncovers the strongest ideas in your webinars, articles, documents, podcasts and videos, then turns them into platform-native posts, branded images and short clips. Your Playbook guides every output using your audience, goals, strategy, voice and visual identity."
        },
        {
            question: "How much does Archie cost?",
            answer:
                "Archie is free to use during beta, with no credit card required. Paid plans will be introduced later and pricing information will be made available on the website."
        },
        {
            question: "How is Archie different from ChatGPT, Claude, or Gemini?",
            answer:
                "Those tools were built for everything. This was built for social media. It lives inside your publishing workflow — no copy-pasting, no switching tabs. It generates visuals and carousels alongside text. It adapts content natively for each platform. And it's trained on what actually performs in the feed, not just what sounds polished on paper."
        },
        {
            question: "Which social networks are supported?",
            answer:
                "LinkedIn, Facebook, YouTube and Instagram, with native adaptation per platform. Support for X (Twitter), Threads, and TikTok, is coming soon."
        },
        {
            question:
                "Do I need an Agorapulse account?",
            answer:
                "No, you don't need an Agorapulse account to use Archie, but it integrates seamlessly if you already have one."
        },
        {
            question: "What is content repurposing?",
            answer:
                "Content repurposing is the process of transforming an existing piece of content into new formats for different channels, audiences or purposes. For example, a webinar can become short videos, LinkedIn posts, Instagram content and Facebook posts. Effective repurposing adapts the original idea rather than simply reposting it unchanged."
        },
        {
            question: "What is the difference between AI content creation and AI content repurposing?",
            answer:
                "AI content creation can start from a blank prompt and generate something new. AI content repurposing starts with content you already own such as a webinar, article, video or report and transforms its existing ideas into new formats. Repurposing is therefore grounded in your expertise, evidence and point of view."
        },
        {
            question: "How does an AI content repurposing tool work?",
            answer:
                "An AI content repurposing tool analyzes source content such as an article, webinar, podcast or video to identify its strongest themes, insights, stories and quotes. It then transforms them into new formats tailored to different channels. Archie also applies your audience, goals and brand voice, creating platform-specific social posts, images and video clips that you can review, edit and schedule."
        },
        {
            question: "How does Archie repurpose content for social media?",
            answer:
                "Start with a substantial source asset such as a webinar, whitepaper, podcast or long article. Pull out the strongest arguments, statistics, stories and quotes. Adapt each one to the format of the platform it will run on, since a LinkedIn post and an Instagram caption need different structures. Archie automates these steps and applies your brand voice to the output."
        },
        {
            question: "How can you measure the ROI of an AI content repurposing tool?",
            answer:
                "Measure the ROI of an AI content repurposing tool by tracking the production time and costs it saves, the number of usable assets generated from each source, and the reach, engagement, traffic or conversions those assets produce. Compare these results with content created from scratch to determine whether the tool is improving both efficiency and content performance."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='px-10 [@media(min-width:1400px)]:px-32 py-16 bg-[#f7ffc5cc]'>
            <div className='mb-12'>
                <h3 className='text-4xl text-[#212e44] font-black tracking-tight text-center'>
                    Frequently Asked Questions
                </h3>
            </div>

            <div className='flex flex-col gap-5 items-center'>
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className='p-6 transition-colors duration-200 bg-white rounded-2xl shadow-xs border border-[#e2e8f0] md:w-150 lg:w-250'>
                            <button
                                onClick={() => toggleFaq(index)}
                                className='w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer'
                                aria-expanded={isOpen}
                            >
                                <span className='text-lg md:text-xl font-extrabold text-[#212e44] pr-6'>
                                    {faq.question}
                                </span>
                                <div className='w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors'>
                                    <ChevronDown
                                        strokeWidth={3}
                                        className={`w-5 h-5 text-[#021a41] transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                                    }`}
                            >
                                <div className='overflow-hidden'>
                                    <p className='text-[#212e44] text-base lg:text-lg font-medium leading-relaxed pr-8'>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FAQSection