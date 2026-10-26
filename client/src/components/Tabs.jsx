import { ArrowRight, ChartColumnIncreasing, Gauge, Globe, Inbox, Send } from 'lucide-react'
import React, { act, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Tabs = () => {

    const tabsData = [
        {
            id: 'inbox',
            label: 'Inbox',
            Icon: Inbox,
            title: 'Keep tabs, without switching tabs',
            desc: 'Track and respond to all your social media interactions in one centralized Inbox.',
            list1: 'Prioritize, automate, and respond more efficiently.',
            list2: 'Centralize comment moderation and facilitate better teamwork.',
            list3: 'Enhance your engagement and improve customer experience.',
            image: assets.tab_inbox,
            button: 'Explore Inbox',
            to: '/inbox',
            color: '#ff5353',
            hoverColor: 'hover:bg-[#fff9f4]'
        },
        {
            id: 'publishing',
            label: 'Publishing',
            Icon: Send,
            title: 'Master your social media content strategy',
            desc: 'Plan and schedule your social media content across all platforms with an intuitive post scheduler and shared calendars.',
            list1: 'Streamline your content management.',
            list2: 'Customize your post content for each platform.',
            list3: 'Enhance internal and external team collaboration.',
            image: assets.publishing_tab,
            button: 'Explore Publishing',
            to: '/publishing',
            color: '#7a66f0',
            hoverColor: 'hover:bg-[#f6f8ff]'
        },
        {
            id: 'listening',
            label: 'Listening',
            Icon: Globe,
            title: 'Listen to the conversations that matter most',
            desc: 'Monitor and track mentions of your brand, industry, and competitors. Capture conversations from social networks, news websites, and blogs.',
            list1: 'Measure and protect your brand reputation.',
            list2: 'Customize your post content for each platform.',
            list3: 'Find out customer requirements and enhance brand loyalty.',
            image: assets.listing_tab,
            button: 'Explore Listening',
            to: '/listening',
            color: '#2fd9c4',
            hoverColor: 'hover:bg-[#f3fffe]'
        },
        {
            id: 'reporting',
            label: 'Reporting',
            Icon: ChartColumnIncreasing,
            title: 'Create meaningful reports, without the headache',
            desc: "Make better business decisions with actionable social media reports that don't take all day to create.",
            list1: 'Compare key social metrics across all channels from a centralized dashboard.',
            list2: 'Easily identify your top-performing posts for each platform.',
            list3: 'Build and automate custom, presentation-ready social media reports.',
            image: assets.reporting_tab,
            button: 'Explore Reporting',
            to: '/reporting',
            color: '#3a9efe',
            hoverColor: 'hover:bg-[#f5fdff]'
        },
        {
            id: 'roi',
            label: 'ROI',
            Icon: Gauge,
            title: 'Measure and prove your social media ROI',
            desc: "You already know that social media is more than brand awareness. But now you can actually prove it by uncovering what posts and conversations drive sales, leads, and traffic.",
            list1: 'Automatically pull data from Google Analytics.',
            list2: 'Tie your social media activity to real revenue goals.',
            list3: 'Understand where to use your budget effectively.',
            image: assets.roi_tab,
            button: 'Explore ROI',
            to: '/roi',
            color: '#ff5353',
            hoverColor: 'hover:bg-[#fff9f9]'
        }
    ];

    const [activeTabId, setActiveTabId] = useState(tabsData[0].id);

    const activeTab = tabsData.find((tab) => tab.id === activeTabId) || tabsData[0];

    return (
        <div className='px-4 py-15 [@media(min-width:1400px)]:px-24'>
            <div className='text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='text-[#021a41] text-4xl font-semibold'>Features to boost efficiency and save time</motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className='grid grid-cols-2 md:grid-cols-5 gap-3 pt-15'>
                {tabsData.map((tab) => {
                    const Icon = tab.Icon;
                    const isActive = activeTabId === tab.id;

                    return (
                        <button key={tab.id} onClick={() => setActiveTabId(tab.id)} className={`flex items-center cursor-pointer bg-[#f9f9fa] space-x-2.5 py-3 px-4 font-medium border ${isActive ? 'border-[#021a41] text-[#021a41]' : 'border-transparent text-[#6b7280]'} ${tab.hoverColor} transition-colors rounded-lg duration-300`}>
                            <Icon color={isActive ? tab.color : '#6b7280'} />
                            <span>{tab.label}</span>
                        </button>
                    )
                })}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-105">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#021a41] leading-tight">
                        {activeTab.title}
                    </h2>

                    <p className="text-lg text-[#021a41] font-medium leading-relaxed">
                        {activeTab.desc}
                    </p>

                    <ul className="space-y-3 pt-2">
                        {[activeTab.list1, activeTab.list2, activeTab.list3].map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-base text-[#021a41]">
                                <span
                                    className="shrink-0 mt-0.5 p-0.5 rounded-full"

                                >
                                    {activeTab.Icon && <activeTab.Icon size={14} color={activeTab.color} />}
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4">
                        <Link to={activeTab.to} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })}>
                            <button
                                className="px-6 py-3 cursor-pointer rounded-full text-[#f50] font-medium transition-opacity duration-200 hover:bg-[#f7ffc5] border-[1.5px] border-[#f50] flex items-center gap-4">
                                {activeTab.button}
                                <ArrowRight size={20} />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={activeTab.image}
                        alt={activeTab.title}
                        className="w-full max-w-2xl h-auto rounded-2xl object-cover"
                    />
                </div>
            </motion.div>

            <div className='flex flex-col md:flex-row justify-center items-center pt-25 gap-5'>
                <Link to={'/signup'} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })}>
                    <button className="px-6 py-3 cursor-pointer rounded-full text-[#f50] font-medium transition-all duration-200 hover:bg-[#f7ffc5] border-[1.5px] border-[#f50] flex items-center gap-4">Try for free <ArrowRight size={20} /></button>
                </Link>

                <Link to={'/demo'} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })}>
                    <button className='flex px-6 py-3 cursor-pointer rounded-full bg-[#f50] text-white gap-4 font-medium transition-all duration-200 hover:bg-[#f7ffc5] hover:text-black border-[1.5px]'>Book a demo <ArrowRight /></button>
                </Link>
            </div>
        </div>
    )
}

export default Tabs