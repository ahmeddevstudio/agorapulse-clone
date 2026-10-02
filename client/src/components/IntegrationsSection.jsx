import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const IntegrationsSection = () => {

    const integrationsImg = [
        {
            name: "Facebook",
            image: "https://www.agorapulse.com/assets/hv2-home2/facebook-logo.svg",
        },
        {
            name: "YouTube",
            image: "https://www.agorapulse.com/assets/hv2-home2/youtube-logo-2.svg",
        },
        {
            name: "TikTok",
            image: "https://www.agorapulse.com/assets/hv2-home2/tiktok-logo.svg",
        },
        {
            name: "Pinterest",
            image: "https://www.agorapulse.com/assets/hv2-home2/pinterest-logo.svg",
        },
        {
            name: "X",
            image: "https://www.agorapulse.com/assets/hv2-home2/x-logo.svg",
        },
        {
            name: "Salesforce",
            image: "https://www.agorapulse.com/assets/hv2-home2/sales-force-logo.svg",
        },
        {
            name: "Google Business Profile",
            image: "https://www.agorapulse.com/assets/hv2-home2/google-business-logo.svg",
        },
        {
            name: "Bluesky",
            image: "https://www.agorapulse.com/assets/hv2-home2/bluesky-logo.svg",
        },
        {
            name: "Instagram",
            image: "https://www.agorapulse.com/assets/hv2-home2/instagram-logo.svg",
        },
        {
            name: "LinkedIn",
            image: "https://www.agorapulse.com/assets/hv2-home2/linkedin-logo.svg",
        },
        {
            name: "Threads",
            image: "https://www.agorapulse.com/assets/hv2-home2/threads-logo.svg",
        },
        {
            name: "Google Analytics",
            image: "https://www.agorapulse.com/assets/hv2-home2/google-analytics-logo.svg",
        },
        {
            name: "Google Drive",
            image: "https://www.agorapulse.com/assets/hv2-home2/google-drive-logo.svg",
        },
        {
            name: "Canva",
            image: "https://www.agorapulse.com/assets/hv2-home2/canva-logo.svg",
        },
        {
            name: "Tenor",
            image: "https://www.agorapulse.com/assets/hv2-home2/tenor-logo.svg",
        },
        {
            name: "HubSpot",
            image: "https://www.agorapulse.com/assets/hv2-home2/hubspot-logo.svg",
        },
        {
            name: "Slack",
            image: "https://www.agorapulse.com/assets/hv2-home2/slack-logo.svg",
        },
        {
            name: "Reddit",
            image: "https://www.agorapulse.com/assets/hv2-home2/reddit-logo.svg",
        },
    ];

    return (
        <div className='min-[1400px]:px-24 py-10 bg-no-repeat bg-cover grid grid-cols-1 lg:grid-cols-2 gap-10' style={{ backgroundImage: `url(${assets.integrations_pattern})` }}>
            <div className='flex flex-col gap-5 px-4 text-[#021a41] max-w-xl'>
                <p className='font-semibold'>Integrations</p>
                <h2 className='text-4xl font-bold'>Works perfectly with your favorite tools and platforms</h2>
                <p className='text-lg font-medium'>No more jumping between social networks and other solutions. Use Agorapulse to centralize all of your team's social media marketing activities.</p>
                <Link to={'integrations'}>
                    <button className='border-[1.5px] border-[#f50] px-5 py-2 text-[#f50] rounded-full font-medium cursor-pointer flex items-center gap-4 hover:bg-[#f7ffc5] transition-all'>See all Integrations <ArrowRight size={20} /></button>
                </Link>
            </div>

            <div className='flex flex-wrap items-center gap-10 overflow-hidden px-4 lg:px-0'>
                {integrationsImg.map((int, idx) => (
                    <div key={idx}>
                        <img src={int.image} alt={int.name} className='w-10 h-10' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IntegrationsSection