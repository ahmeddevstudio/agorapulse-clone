import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const IntegrationsSection = ({ title, desc }) => {
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
    ]

    return (
        <section className="relative isolate grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-b-3xl overflow-hidden py-10 min-[1400px]:px-32">

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url(${assets.integrations_pattern})`,
                }}
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{
                    background: `
                        radial-gradient(
                            ellipse at bottom left,
                            rgba(255, 120, 70, 0.12),
                            transparent 50%
                        ),
                        radial-gradient(
                            ellipse at bottom right,
                            rgba(100, 170, 255, 0.15),
                            transparent 50%
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.88),
                            rgba(252, 251, 255, 0.78)
                        )
                    `,
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-5 px-4 text-[#021a41] max-w-xl">
                <p className="font-semibold">Integrations</p>

                <h2 className="text-4xl font-bold">
                    {title}
                </h2>

                <p className="text-lg font-medium">
                    {desc}
                </p>

                <Link to="/integrations" onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })} className="w-fit">
                    <button className="border-[1.5px] border-[#f50] px-5 py-2 text-[#f50] rounded-full font-medium cursor-pointer flex items-center gap-4 hover:bg-[#f7ffc5] transition-all">
                        See all Integrations
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </motion.div>

            <div className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center content-center px-4 lg:px-0">
                {integrationsImg.map((int) => (
                    <div
                        key={int.name}
                        className="flex items-center justify-center"
                        title={int.name}
                    >
                        <img
                            src={int.image}
                            alt={int.name}
                            loading="lazy"
                            className="w-10 h-10 object-contain"
                        />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default IntegrationsSection