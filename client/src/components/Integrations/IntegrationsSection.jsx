import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react';

const IntegrationsSection = () => {

    const [activeFilter, setActiveFilter] = useState('All');

    const filterBox = ['All', 'Social Networks', 'Productivity', 'Reputation & Review Management', 'Analytics & BI', 'CRM', 'Ecommerce', 'Messaging', 'API & MCP'];

    const integrations = [
        {
            logo: "https://www.agorapulse.com/assets/integrations/facebook.svg",
            type: "Social Networks",
            name: "Facebook",
            desc: "Schedule and publish on Facebook Pages. Analyze the impact of your campaigns with easy-to-read yet detailed social media reports, and maximize your engagement with your audiences.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/instagram.svg",
            type: "Social Networks",
            name: "Instagram",
            desc: "Create and schedule Instagram Posts, Stories, Carousels, and Reels. Apply filters with Canva integration. Track hashtags and measure your results.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/linkedin.svg",
            type: "Social Networks",
            name: "LinkedIn",
            desc: "Make the most of your LinkedIn company page by scheduling and publishing content, managing interactions, and analyzing the impact of your social media campaigns.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/x-twitter.svg",
            type: "Social Networks",
            name: "X (Twitter)",
            desc: "Strengthen your X (Twitter) impact by scheduling posts and threads, creating valuable connections with your followers, and making informed decisions based on actionable data.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/threads-circle.svg",
            type: "Social Networks",
            name: "Threads",
            desc: "Threads is a text-based social media and social networking platform operated by Meta Platforms.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/pinterest.svg",
            type: "Social Networks",
            name: "Pinterest",
            desc: "Schedule pins across different boards, and streamline the content your followers want to engage with.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/tiktok.svg",
            type: "Social Networks",
            name: "TikTok",
            desc: "Optimize your TikTok marketing strategy with video scheduling and auto-publishing, comments management, and easy-to-read reports.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/youtube-logo.svg",
            type: "Social Networks",
            name: "YouTube",
            desc: "Schedule and publish YouTube content, manage all your comments, and monitor videos at scale.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/google-business-profile.svg",
            type: "Reputation & Review Management",
            name: "Google Business Profile",
            desc: "Schedule updates, respond to all your reviews, and collaborate with your team. All in one place.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/bsky-app.svg",
            type: "Social Networks",
            name: "Bluesky",
            desc: "Schedule and publish content on Bluesky, the main decentralized social network.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/reddit.svg",
            type: "Social Networks",
            name: "Reddit",
            desc: "Track keyword mentions and uncover real-time insights from Reddit, the internet's most influential forum. Discover conversations your audience cares about, spot trends before they go mainstream, and engage with the right strategy.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/instagram-shopping.svg",
            type: "Ecommerce",
            name: "Instagram Shopping",
            desc: "Effortlessly tag your products in Agorapulse to promote them on Instagram.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/facebook-messenger.svg",
            type: "Messaging",
            name: "Facebook Messenger",
            desc: "Easily communicate with your followers on Facebook pages directly from Agorapulse Inbox.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/google-analytics.svg",
            type: "Analytics & BI",
            name: "Google Analytics",
            desc: "Connect GA to Agorapulse and start measuring the real business results of your marketing efforts.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/looker-studio.svg",
            type: "Analytics & BI",
            name: "Looker Studio",
            desc: "Easily pull data from Agorapulse's Reporting to create your own custom reports in Looker Studio.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/salesforce.svg",
            type: "CRM",
            name: "Salesforce",
            desc: "Turn your social interactions into business opportunities. Create leads and contacts in Salesforce, directly from your Agorapulse inbox.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/hubspot.svg",
            type: "CRM",
            name: "HubSpot",
            desc: "Get more leads from your conversations. Create leads and contacts in HubSpot, directly from your Agorapulse inbox.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/slack.svg",
            type: "Productivity",
            name: "Slack",
            desc: "Stay informed, collaborate effortlessly, and take timely action—all within your familiar communication app. Get instant notifications from Agorapulse to Slack.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/google-drive.svg",
            type: "Productivity",
            name: "Google Drive",
            desc: "Upload your media directly from your Google Drive account.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/canva.svg",
            type: "Productivity",
            name: "Canva",
            desc: "Enhance your content with Canva's advanced visual design tools. Import your Canva creations directly to your posts.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/bitly.svg",
            type: "Productivity",
            name: "Bitly",
            desc: "Shorten and track your links using one of the world's most popular link shortening services.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/tenor-1.svg",
            type: "Productivity",
            name: "Tenor",
            desc: "Enrich your interactions with your followers with GIFs.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/microsoft-teams.svg",
            type: "Productivity",
            name: "Microsoft Teams",
            desc: "Stay up to date and collaborate seamlessly, without leaving Microsoft Teams. Receive real-time notifications from Agorapulse directly in your Teams channels.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/zapier.svg",
            type: "Productivity",
            name: "Zapier",
            desc: "Connect Agorapulse with business tools using Zapier. Automate your social workflows, sync Agorapulse with your CRM and project boards like Asana, Trello and more—no coding required!",
            btn: "Discover templates",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/chatgpt.svg",
            logo2: "https://www.agorapulse.com/assets/integrations/claude.svg",
            type: "API & MCP",
            name: "ChatGPT & Claude",
            desc: "Connect Agorapulse MCP in your favorite AI tool to streamline your entire social workflow. Create, analyze, and plan content directly inside ChatGPT or Claude.",
            btn: "Find out more",
        },
        {
            logo: "https://www.agorapulse.com/assets/integrations/reports-open-api.svg",
            type: "API & MCP",
            name: "Reports Open API",
            desc: "Connect your social data directly to your business intelligence tools with our API. Analyze, visualize, and act on your social insights without manual exports or complex workflows.",
            btn: "Find out more",
        },
    ];

    const filteredIntegrations =
        activeFilter === 'All'
            ? integrations
            : integrations.filter(
                (integration) => integration.type === activeFilter
            );

    return (
        <div className='px-10 py-15 [@media(min-width:1400px)]:px-24'>
            <div className="flex flex-wrap gap-5 justify-center">
                {filterBox.map((item) => (
                    <motion.button
                        key={item}
                        onClick={() => setActiveFilter(item)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className={`p-5 rounded-lg cursor-pointer transition-colors duration-200 ${activeFilter === item
                            ? 'bg-[#ffe1d4] text-[#ff6726]'
                            : 'bg-[#f5f5f7] text-[#212e44] hover:bg-[#e9eaf0]'
                            }`}
                    >
                        <p className="font-extrabold">{item}</p>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.07,
                            },
                        },
                        exit: {
                            transition: {
                                staggerChildren: 0.025,
                                staggerDirection: -1,
                            },
                        },
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-10'>
                    {filteredIntegrations.map((int, idx) => (
                        <motion.div key={idx}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 18,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                },
                                exit: {
                                    opacity: 0,
                                    y: -8,
                                    transition: {
                                        duration: 0.18,
                                        ease: 'easeIn',
                                    },
                                },
                            }}
                            whileHover={{
                                y: -4,
                                transition: { duration: 0.2 },
                            }}
                            className='bg-white border border-[#858fa133] py-6 px-8 rounded-2xl shadow-[0_24px_20px_0_rgba(33,46,68,.0196078431)]'>
                            <div className='flex justify-between'>
                                {int.logo2 ? (
                                    <div className='flex'>
                                        <img src={int.logo} alt="" className='h-15 w-15 object-contain' />
                                        <img src={int.logo2} alt="" className='h-15 w-15 object-contain' />
                                    </div>
                                ) : (
                                    <img src={int.logo} alt="" className='h-15 w-15 object-contain' />
                                )}
                                <p className='text-xs bg-[#f9f9fa] h-fit px-4 py-2 rounded-full text-[#858fa1] font-bold'>{int.type}</p>
                            </div>

                            <div className='pt-5'>
                                <h4 className='text-[#344563] text-2xl font-extrabold'>{int.name}</h4>
                                <p className='text-[#212e44] text-lg font-medium pt-5'>{int.desc}</p>
                            </div>

                            <div>
                                <button className='pt-5 text-lg text-[#ff6726] font-extrabold underline flex items-center gap-3'>{int.btn} <ArrowRight size={18} strokeWidth={3} /></button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default IntegrationsSection