import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'

const Cards = () => {

    const filterBox = ['All', 'Guides', 'Templates', 'Case Studies'];

    const [activeFilter, setActiveFilter] = useState('All');

    const resources = [
        {
            type: "Guide",
            title: "The Cost of the Wrong Social Media Tool",
            description:
                "Renewing feels like the easy option, but the contract price is only part of the cost. This guide helps you weigh the hidden costs of staying against the cost of switching, with real numbers, before you commit to another year.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Template",
            title: "Social Listening Report Template",
            description:
                "Stop building your listening report from scratch every month. This ready-to-use template turns raw mentions and sentiment data into a clean report stakeholders will actually read.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Guide",
            title: "Social Listening Playbook: Turn Data in Action",
            description:
                'Everyone says "listen to social." Almost nobody says how. This guide breaks down what to actually track, which mentions matter, and how to turn scattered chatter into insights your team can act on.',
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Guide",
            title: "LinkedIn in 2026: A Field Guide to the New Chaos",
            description:
                "Discover everything you need to navigate LinkedIn's new reality. What's changed, which metrics no longer matter and what it means for your content strategy.",
            bgColor: "#fff9f4",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Guide",
            title: "AI Content Bundle",
            description:
                "Your boss wants AI. Here is how to actually deliver it. Download our AI Toolkit to unlock everything your social media team needs to create and analyze content at scale.",
            bgColor: "#f6f8ff",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Template",
            title: "Pre-Publish Checklist :",
            description:
                "Stop second-guessing before you hit publish. This free 7-question checklist helps social media managers review every post in under 5 minutes, replacing gut feelings with a repeatable editorial standard.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Guide",
            title:
                "The AI Content Trap: 5 mistakes that are silently killing your social media strategy",
            description:
                "AI didn't create the noise problem. It amplified it. Download this free playbook to fix the mistakes that are silently killing your social media strategy.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Template",
            title: "Good Content vs Noise Scorecard",
            description:
                "This scorecard uses a four-gate filtering system to quickly identify which content ideas are worth pursuing before you invest hours creating them.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Guide",
            title: "Exclusive Study 2026: Most Social Content Shouldn't Exist",
            description:
                "Most social media content shouldn't exist. Find out why and get the 3-question framework that helps social media teams publish with intent, not reflex.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Template",
            title: "The Right Moment Calculator",
            description:
                "Track your audience interactions and calculate your actual best times to post on social media automatically.",
            bgColor: "#fff9f4",
            textColor: "#7a66f0",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Guide",
            title: "Looking for a Hootsuite Alternative?",
            description:
                "More than 31,000 social media managers and 3,000 agencies choose Agorapulse over Hootsuite at every stage of growth. But is it right for you? Dig into the proven data from G2, Capterra, and TrustRadius to see whether our easy-to-use social media management solution is the right choice to drive your social content forward.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title: "How FMO Scaled Operations by +300% by Using Agorapulse",
            description:
                "FMO, a digital marketing agency, needed a solution to manage thousands of social profiles without compromising its hands-on client service. Agorapulse provided the perfect fit, enabling FMO to scale from 250 to over 800 profiles while maintaining consistent content, educating clients with data-rich reports, and improving team efficiency.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "From Social Overload to Mastery: How Fermob Streamlined Social Engagement with Agorapulse",
            description:
                "Fermob, a global outdoor furniture brand, used Agorapulse to centralize social media moderation, double video output, and streamline operations. This improved response times, boosted engagement, and ensured brand consistency across key markets.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title:
                "How This Agency Slashes Busywork and Keeps Long-Term Clients with Agorapulse",
            description:
                "As Click Control Marketing grew, spreadsheets became inefficient for managing multiple clients. Agorapulse provided the perfect solution, streamlining content planning, improving collaboration, and delivering goal-aligned reports, saving time and driving client success.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title: "How This Boutique Agency Saved 90% of Its Time Managing Social",
            description:
                "As the agency grew, they faced increasing challenges in meeting the needs of multiple clients. They soon realized they needed a comprehensive social media management platform to streamline operations and increase efficiency.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title: "How StreamYard Scaled Customer Service With One Tool",
            description:
                "StreamYard, a top live-streaming platform, relies heavily on social media to connect with users and promote its services. As StreamYard's reputation and user base skyrocketed, so did its engagements and social conversations.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title: "How FlexJobs Grew to +400K Followers Leveraging LinkedIn",
            description:
                "Discover how FlexJobs grew their followers to +400K, boosted their engagement and make more informed decisions with thanks to Social Media ROI.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title: "Kaspersky Streamlines Its Social Media Management With Agorapulse",
            description:
                "Find out how cybersecurity giant Kaspersky uses Agorapulse to effectively manage and streamline its social media efforts.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "How This Agency Cut Manual Tasks & Now Has 70% More Time to Spend on Growth",
            description:
                "Managing their client's social media accounts and optimizing their social media presence wasn't an easy task until they found Agorapulse.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title:
                "Why This Hospitality Company Choose to Stay With Agorapulse Over Hootsuite, SocialPilot, Loomly & Later",
            description:
                "Ron Jaworski Golf & Weddings has been using Agorapulse for over five years, meaning that the daily management of these social media accounts is much, much easier for them.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title:
                "How South West College Uses Agorapulse to Transform Its Higher Education Marketing",
            description:
                "This case study explores how Agorapulse, an award-winning social media management tool, helped the college overcome its challenges.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "How Agorapulse Helped a 3-D Printing Company Cut Social Media ROI Reporting Time by 95% and Save Over $15K",
            description:
                "Rhonda and her Marketing team can now manage all their brands, and effortlessly keep up with messages, comments, and interactions all from within one platform.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title:
                "Imagine Social Uses Agorapulse to Save 10+ Hours Monthly on Social Media Planning",
            description:
                "Read on to find out how one particular agency saved time with Agorapulse.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title:
                "How Digital Agency Seopoint Cut Its Posting Time in Half by Using Agorapulse",
            description:
                "Find out how Agorapulse allowed them to manage all their tasks while also saving time and helping them provide better services to their clients.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title: "How Fluid Ideas Reached Further and Did More With Agorapulse",
            description:
                "Read how this agency rapidly modernized the way they managed and worked with social media.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title:
                "How This Growing Social Media Marketing Agency Rocks Agorapulse's Shared Calendars",
            description:
                "Katherine and her team use Shared Calendars to involve clients in content creation, get feedback, and showcase their brand's social media presence.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title:
                "Lone Star College-Montgomery's Social Media Now Shines Brightly With Agorapulse",
            description:
                "Read on to find out how Lone Star College-Montgomery started using Agorapulse to get to the head of its class.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "Staying Happy and on Topic (Design) in Digital Marketing: A Case Study",
            description:
                "Discover how Topic Design made its team and their clients happier when the digital marketing agency began using Agorapulse.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title:
                "How a Leader in Tiny Houses Saves Time Every Day in Creating Social Media Content and Sharing It",
            description:
                "The company's amazing growth meant it also needed a social media management tool that could grow with them. Enter Agorapulse.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title:
                "A Sustainable Future: How This Renewable Energy Company Found the Perfect Sidekick",
            description:
                "The Siemens Gamesa team tested out a few tools before committing and it didn't take long for Agorapulse to come on top.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "How Agorapulse Helped This Media Agency Free Up More Time For Client Innovation",
            description:
                '"In the end the decision came down to a combination of the cost and apparent superiority to competitors," Harry told us.',
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title:
                "New York Times Bestselling Author Puts His Social Time Investment on a Diet",
            description:
                "Find out how Agorapulse helped him consolidate all his notifications in one place and achieve inbox zero by responding to every commenter.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title:
                "Dressed-to-Impress: This Digital Agency Needed a Dashing Social Dashboard for Clients",
            description:
                "Find out how using Agorapulse has easily cut their time working on social media management to 25%.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "Balgrist University Hospital Finds the (Agora)Pulse of their Social Media",
            description:
                "Read on to find out how they rely on Agorapulse to take a proactive approach to sharing content on different channels every day.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title:
                "Veterinary Digital Marketing Team Wins Back Weeks With Agorapulse",
            description:
                "“Agorapulse initially seemed to provide a lot of what we were looking for. We found it very user-friendly when we tried it, and really liked the dashboard and the general setup.”",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title: "How TravelMedia.ie Save Time and Rock Community Management",
            description:
                "Read on to discover how they save significant time every day using a single inbox to manage all their social communities' notifications and respond directly.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Guide",
            title: "How to Measure Your Social Media ROI",
            description:
                "Need a handy way to measure your efforts on your social media channels? Try this guide.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Guide",
            title: "How to Have a Picture Perfect Instagram Marketing Strategy",
            description:
                "Get this guide to do more than take pretty pictures on Instagram.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Guide",
            title: "Social Media Basics for Marketing Agencies",
            description:
                "This guide will lay the foundation for any agency to begin offering social media services.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title: "This Digital Agency Saves Hours Each Week Using Agorapulse",
            description:
                "Learn how Social Media Solutions saved time and gained a “spark” using Agorapulse to publish content.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Template",
            title: "Social Media Content Calendar",
            description:
                "Plan posts and tweets that your followers will love with this customizeable, color-coded content calendar.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Guide",
            title: "SWOT for Social Media",
            description:
                "Get your social media strategy tight by using this SWOT-for-social guide.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "How This Ecommerce Company Manages Social and Saves Tons of Cash",
            description:
                "Fracture saves tons of overhead costs by using Agorapulse to manage its social. Learn why.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title: "How NewFire Media Gets More Clients with Agorapulse",
            description:
                "Read how this marketing agency finally found a tool to manage its Facebook ad comments.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title:
                "How ClickMedia Cut Annual Costs by 25% by Switching From Sprout Social to Agorapulse",
            description:
                "When scaling your agency, you need the advanced features Agorapulse offers—without breaking the bank. Read why ClickMedia chose Agorapulse.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "How the United Soccer League Manages Its Nine Social Media Accounts",
            description:
                "Find out how United Soccer League uses Agorapulse to easily manage its multiple social media accounts.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Guide",
            title:
                "The Top 10 Questions Page Admins Ask about Managing Facebook Pages",
            description:
                "In this comprehensive guide, we clear up 10 of the biggest conundrums that Facebook page admins face.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title: "How Freshly Picked Saves Three Hours A Day on Social Media",
            description:
                "Read how Freshly Picked decided to use Agorapulse as its social media management platform.",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Case Study",
            title:
                "Why This Digital Agency Blew Off Other Social Media Management Tools for Agorapulse",
            description:
                "With different team members covering various regions, multiple clients, and a host of KPIs, agencies today need to work smarter. Fortunately, there's Agorapulse to help.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Template",
            title: "Social Media Pitch Deck for Agencies",
            description:
                "Show off your social media smarts to your prospective clients with this ready-for-you pitch deck.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Case Study",
            title: "5 Reasons Action Digital Loves to Use Agorapulse",
            description:
                '"For Action Digital, Agorapulse has not only saved us precious time, but it has also made us far more efficient, and given us that extra edge to provide the best possible service to our clients!" Zoe says.',
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
        {
            type: "Guide",
            title: "SMART Goals for Social Media Strategy",
            description:
                "Is your social media strategy kind of murky? Why not give it a SMART Goals makeover? We'll guide you through it.",
            bgColor: "#f3fffe",
            textColor: "#2fd9c4",
            shadowColor: "#d0fff6",
        },
        {
            type: "Case Study",
            title: "How Citrus Content Saves Time on Social Media Management",
            description:
                "Learn how this international marketing agency saves time on social media management by finding the right piece of software.",
            bgColor: "#f6f8ff",
            textColor: "#7a66f0",
            shadowColor: "#d1d7fc",
        },
        {
            type: "Guide",
            title: "Facebook Live All You Need to Know",
            description:
                "Going “Live” on Facebook may seem effortless, but you need to be prepared all the way around. Get prepped in under an hour!",
            bgColor: "#fff9f4",
            textColor: "#ff6726",
            shadowColor: "#ffe0d2",
        },
    ];

    const filteredResources = resources.filter((item) => {
        if (activeFilter === 'All') return true;

        const typeMap = {
            Guides: 'Guide',
            Templates: 'Template',
            'Case Studies': 'Case Study',
        };

        return item.type === typeMap[activeFilter];
    });

    return (
        <div className="px-8 [@media(min-width:1400px)]:px-30 py-15">
            <div className="flex flex-wrap gap-4">
                {filterBox.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveFilter(item)}
                        className={`font-bold py-5 px-6 rounded-2xl cursor-pointer transition-colors duration-300 ${activeFilter === item ? 'bg-[#fff9f4] text-[#ff6726]' : 'bg-[#f9f9fa] text-[#212e44] hover:bg-[#eef0f4]'}`} >{item}</button>
                ))}
            </div>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredResources.map((item, idx) => (
                    <div
                        key={item.title}
                        className="p-10 rounded-xl"
                        style={{ backgroundColor: item.bgColor }}>
                        <div>
                            <p
                                className="font-bold"
                                style={{ color: item.textColor }}
                            >
                                {item.type}
                            </p>

                            <h3 className="text-2xl font-extrabold pt-5 text-[#212e44]">
                                {item.title}
                            </h3>
                        </div>

                        <div className="pt-5">
                            <p className="text-lg font-medium">
                                {item.description}
                            </p>
                        </div>

                        <div className="pt-5">
                            <button
                                className="bg-white py-3 px-5 rounded-full flex items-center gap-3 cursor-pointer font-extrabold text-lg"
                                style={{
                                    color: item.textColor,
                                    boxShadow: `0 19px 40px -10px ${item.shadowColor}`,
                                }}
                            >
                                Download Now
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards