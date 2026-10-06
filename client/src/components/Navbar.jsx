import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpenText, Boxes, BriefcaseBusiness, Building, Calendar, ChevronDown, FileChartColumnIncreasing, GraduationCap, Inbox, Laptop, Link2, Megaphone, Menu, Pencil, Play, RadioTower, School, Search, Send, Settings, Sparkles, SquareText, TrendingUp, UsersRound, UserStar, X } from 'lucide-react'

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [activeDropdown, setActiveDropdown] = useState(null);

    const [mobileSubNavbarOpenTopFeature, setMobileSubNavbarOpenTopFeature] = useState(false);
    const [mobileSubNavbarOpenSolutions, setMobileSubNavbarOpenSolutions] = useState(false);
    const [mobileSubNavbarOpenResources, setMobileSubNavbarOpenResources] = useState(false);

    const handleDropdownToggle = (menuName) => {
        setActiveDropdown(prev => (prev === menuName ? null : menuName));
    };

    const topFeatureNav = {
        topFeatures: [
            {
                Icon: Inbox,
                title: 'Inbox',
                desc: 'Take control of your social interactions',
                to: '/inbox',
            },
            {
                Icon: TrendingUp,
                title: 'ROI',
                desc: 'Measure the business results of your social media efforts',
                to: '/roi',
            },
            {
                Icon: Send,
                title: 'Publishing',
                desc: 'Everything you need to publish on social media',
                to: '/publishing',
            },
            {
                Icon: FileChartColumnIncreasing,
                title: 'Reporting',
                desc: 'Get actionable insights to inform your social strategy',
                to: '/reporting',
            },
            {
                Icon: RadioTower,
                title: 'Listening',
                desc: 'Discover what people are saying about your brand, industry, and competitors',
                to: '/listening',
            },
            {
                Icon: Boxes,
                title: 'Archie',
                badge: 'New!',
                desc: 'Turn your best content into on-brand social posts',
                to: '/archie',
                isSpecial: true,
            },
        ],

        advancedFeatures: [
            {
                Icon: Sparkles,
                title: 'Agorapulse AI',
                desc: 'AI sidekick inside your tool',
                to: '/agorapulse-ai',
            },
            {
                Icon: Link2,
                title: 'PulseLink in Bio',
                desc: 'Link in bio tool from Agorapulse',
                to: '/link-in-bio',
            },
            {
                Icon: Megaphone,
                title: 'Advocacy',
                desc: 'Amplify your message to boost reach',
                to: '/advocacy',
            },
        ],

        promo: {
            image: 'https://www.agorapulse.com/assets/nav/top-features-promo.avif',
            title: 'See Agorapulse In Action',
            desc: 'An On-Demand Demo you can watch in less time than it takes to finish your coffee—no sign-up required!',
            linkText: 'Learn More',
            to: '/demo',
        },
    };

    const solutionsNav = {
        solutions: [
            {
                Icon: Building,
                title: 'For Agencies',
                desc: 'Preffered choice for agencies, priced for growing teams.',
                to: '/agencies',
            },
            {
                Icon: Laptop,
                title: 'For E-commerce',
                desc: 'Sell online easily and efficiently',
                to: '/e-commerce',
            },
            {
                Icon: UsersRound,
                title: 'For B2B Business',
                desc: 'Tailored social media solutions for B2B success',
                to: '/b2b',
            },
            {
                Icon: Settings,
                title: 'For Manufacturing',
                desc: 'Run a tighter and faster social operation across brands, teams, and region',
                to: '/manufacturing',
            },
            {
                Icon: BriefcaseBusiness,
                title: 'For Retail',
                desc: 'Build a better retail experience on social media',
                to: '/retail',
            },
            {
                Icon: GraduationCap,
                title: 'For Higher Education',
                desc: 'Engage students and alumns with a simple click',
                to: '/higher-education',
            },
        ],
        intregrations: [
            {
                name: 'Facebook',
                icon: 'https://www.agorapulse.com/assets/hv2-home2/facebook-logo.svg'
            },
            {
                name: 'LinkedIn',
                icon: 'https://www.agorapulse.com/assets/hv2-home2/linkedin-logo.svg'
            },
            {
                name: 'Instagram',
                icon: 'https://www.agorapulse.com/assets/hv2-home2/instagram-logo.svg'
            },
            {
                name: 'Pinterest',
                icon: 'https://www.agorapulse.com/assets/hv2-home2/pinterest-logo.svg'
            },
            {
                name: 'X (Twitter)',
                icon: 'https://www.agorapulse.com/assets/hv2-home2/x-logo.svg'
            },
            {
                name: 'Tiktok',
                icon: 'https://www.agorapulse.com/assets/hv2-home2/tiktok-logo.svg'
            },
        ]
    };

    const resourcesNav = {
        resources: [
            {
                Icon: SquareText,
                title: 'Blog',
                desc: 'Insights, trends, and winning strategies',
                to: '/blog',
            },
            {
                Icon: Pencil,
                title: 'Free Tools',
                desc: 'Improve your results at no cost',
                to: '/free-tools',
            },
            {
                Icon: BookOpenText,
                title: 'Resources Center',
                desc: 'Reports and content to share strategies',
                to: '/resources',
            },
            {
                Icon: School,
                title: 'Agorapulse Academy',
                desc: 'Step-by-step courses to unlock the full potential of Agorapulse',
                to: '/academy',
            },
            {
                Icon: Calendar,
                title: 'Events & Webinars',
                desc: 'Insights from industry experts',
                to: '/events',
            },
        ],
        connect: [
            {
                Icon: Search,
                title: 'Case Studies',
                desc: 'Loved by marketers and agencies worldwide',
                to: '/case-studies',
            },
            {
                Icon: UserStar,
                title: 'Help Center',
                desc: 'Get answers about using Agorapulse',
                to: '/help-center',
            },
            {
                Icon: Play,
                title: 'Video Tutorials',
                desc: 'Get Answers about using agorapulse',
                to: '/video-tutorial',
            },
        ],

        promo: {
            image: 'https://www.agorapulse.com/assets/nav/archie_website_navigation.avif',
            title: 'Archie is here',
            desc: 'Turn your articles, webinars and videos into on-brand social posts, guided by a Playbook that captures your strategy, audience, goals and voice.',
            linkText: 'Try for free',
            to: '/archie',
        },
    };

    return (
        <>
            {/* DESKTOP NAVBAR */}
            <div className='lg:flex hidden items-center justify-between px-8 h-19 [@media(min-width:1400px)]:px-24 sticky top-0 z-999 bg-white border-b border-gray-100'>
                <div className='flex gap-8 items-center h-full'>
                    <Link to='/' className='flex items-center'>
                        <img
                            src={assets.agorapulse_logo}
                            alt='agorapulse-logo'
                            className='h-7'
                        />
                    </Link>

                    <ul className='flex gap-4 text-[#344563] text-[15px] font-semibold h-full'>
                        <li className='h-full flex items-center text-sm'>
                            <h3 className={`flex items-center cursor-pointer select-none ${activeDropdown === 'topFeature' ? 'text-[#f50]' : 'text-[#344563]'}`} onClick={() => handleDropdownToggle('topFeature')}>
                                Top Features
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ease-in-out ${activeDropdown === 'topFeature' ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </h3>
                        </li>

                        <li className='h-full flex items-center text-sm'>
                            <h3 className={`flex items-center cursor-pointer select-none ${activeDropdown === 'solutions' ? 'text-[#f50]' : 'text-[#344563]'}`} onClick={() => handleDropdownToggle('solutions')}>
                                Solutions
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ease-in-out ${activeDropdown === 'solutions' ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </h3>
                        </li>

                        <li className='cursor-pointer flex items-center h-full hover:text-[#f50] transition-colors text-sm' onClick={() => setActiveDropdown(null)}>
                            <Link to='/pricing'>
                                Pricing
                            </Link>
                        </li>

                        <li className='h-full flex items-center text-sm'>
                            <h3 className={`flex items-center cursor-pointer select-none ${activeDropdown === 'resources' ? 'text-[#f50]' : 'text-[#344563]'}`} onClick={() => handleDropdownToggle('resources')}>
                                Resources
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ease-in-out ${activeDropdown === 'resources' ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </h3>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-6'>
                    <button className='text-[#344563] font-semibold text-[14px] cursor-pointer hover:text-[#f50] transition-colors'>
                        Log In
                    </button>

                    <div className='flex gap-3'>
                        <button className='flex items-center gap-2 px-5 py-2.5 border-[1.5px] border-[#f50] rounded-3xl text-[#f50] font-semibold text-[14px] cursor-pointer hover:bg-[#f7ffc5] transition-all'>
                            Try for free
                            <ArrowRight size={16} />
                        </button>

                        <button className='flex items-center gap-2 px-5 py-2.5 bg-[#f50] rounded-3xl text-[14px] text-white font-semibold hover:bg-[#f7ffc5] hover:text-black border-[1.5px] transition-all cursor-pointer'>
                            Schedule a demo
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {activeDropdown === 'topFeature' && (
                    <div className='absolute left-0 top-19 w-full bg-white border-t border-gray-100 grid grid-cols-12 cursor-default'>
                        <div className='col-span-7 py-12 pl-[8%] pr-12 bg-white'>
                            <div className='grid grid-cols-2 gap-x-8 gap-y-6'>
                                {topFeatureNav.topFeatures.map((feature, idx) => {
                                    const Icon = feature.Icon;

                                    return (
                                        <Link
                                            key={idx}
                                            to={feature.to}
                                            className={`flex gap-4 p-3 rounded-xl transition-all group`}
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            <div className={`shrink-0 p-3 rounded h-fit ${feature.isSpecial ? 'bg-[#f7ffc5] text-[#e05000] group-hover:bg-[#021a41] group-hover:text-[#f7ffc5]' : 'bg-[#f5f5f7] text-[#344563] group-hover:bg-[#ff6726] group-hover:text-white'
                                                }`}>
                                                <Icon size={24} strokeWidth={2} />
                                            </div>

                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <h4 className='font-semibold text-[#212e44] group-hover:text-[#ff6726]'>
                                                        {feature.title}
                                                    </h4>

                                                    {feature.badge && (
                                                        <span className='text-[12px] font-bold bg-[#7b51e0] text-white px-1.5 rounded'>
                                                            {feature.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                <p className='text-[14px] text-[#212e44] mt-1 leading-relaxed pr-4'>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='col-span-3 bg-[#f5f5f7] py-12 px-10'>
                            <h5 className='text-[12px] font-semibold text-[#5d6a82] mb-6'>
                                Advanced features
                            </h5>
                            <div className='flex flex-col gap-6'>
                                {topFeatureNav.advancedFeatures.map((feature, idx) => {
                                    const Icon = feature.Icon;

                                    return (
                                        <Link
                                            key={idx}
                                            to={feature.to}
                                            className='flex items-center gap-4 group'
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            <div className='shrink-0 text-gray-400 mt-0.5 group-hover:text-[#f50] transition-colors'>
                                                <Icon size={16} strokeWidth={2} />
                                            </div>

                                            <div>
                                                <h4 className='font-bold text-[#212e44] group-hover:scale-101'>
                                                    {feature.title}
                                                </h4>
                                                <p className='text-[14px] text-[#212e44] mt-0.5 leading-snug'>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='col-span-2 bg-[#212e44] py-12 px-12 pr-[8%] text-white'>
                            <img
                                src={topFeatureNav.promo.image}
                                alt="Promo"
                                className='w-full h-auto object-cover rounded-xl mb-6 shadow-lg'
                            />
                            <h4 className='font-bold text-[18px] mb-2'>
                                {topFeatureNav.promo.title}
                            </h4>
                            <p className='text-[14px] leading-relaxed mb-5'>
                                {topFeatureNav.promo.desc}
                            </p>
                            <Link
                                to={topFeatureNav.promo.to}
                                className='text-[14px] font-bold text-white underline hover:opacity-75 transition-colors inline-block'
                                onClick={() => setActiveDropdown(null)}
                            >
                                {topFeatureNav.promo.linkText}
                            </Link>
                        </div>

                    </div>
                )}

                {activeDropdown === 'solutions' && (
                    <div className='absolute left-0 top-19 w-full bg-white border-t border-gray-100 grid grid-cols-12 cursor-default'>
                        <div className='col-span-8 py-12 pl-[8%] pr-12 bg-white'>
                            <div className='grid grid-cols-2 gap-x-8 gap-y-6'>
                                {solutionsNav.solutions.map((feature, idx) => {
                                    const Icon = feature.Icon;

                                    return (
                                        <Link
                                            key={idx}
                                            to={feature.to}
                                            className={`flex gap-4 p-3 rounded-xl transition-all group`}
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            <div className={`shrink-0 p-3 rounded h-fit ${feature.isSpecial ? 'bg-[#f7ffc5] text-[#e05000] group-hover:bg-[#021a41] group-hover:text-[#f7ffc5]' : 'bg-[#f5f5f7] text-[#344563] group-hover:bg-[#ff6726] group-hover:text-white'
                                                }`}>
                                                <Icon size={24} strokeWidth={2} />
                                            </div>

                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <h4 className='font-semibold text-[#212e44] group-hover:text-[#ff6726]'>
                                                        {feature.title}
                                                    </h4>

                                                    {feature.badge && (
                                                        <span className='text-[12px] font-bold bg-[#7b51e0] text-white px-1.5 rounded'>
                                                            {feature.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                <p className='text-[14px] text-[#212e44] mt-1 leading-relaxed pr-4'>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='col-span-4 bg-[#f5f5f7] py-12 px-10'>
                            <h5 className='text-[12px] font-semibold text-[#5d6a82] mb-6'>
                                Network & Integrations
                            </h5>
                            <div className='grid grid-cols-2 gap-6'>
                                {solutionsNav.intregrations.map((int, idx) => {
                                    return (
                                        <div key={idx} className='flex items-center gap-2 cursor-pointer'>
                                            <div className='shrink-0 mt-0.5'>
                                                <img src={int.icon} alt="" className='h-5 w-5 fill-gray-900' />
                                            </div>

                                            <div>
                                                <p className='text-[#212e44] mt-0.5 leading-snug font-bold'>
                                                    {int.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='pt-10'>
                                <Link to={'integrations'} onClick={() => setActiveDropdown(null)}>
                                    <button className='flex items-center text-[#ff6726] cursor-pointer font-semibold gap-2 hover:font-bold'>See all integrations <ArrowRight size={20} /></button>
                                </Link>

                                <div className='flex gap-6 flex-wrap pt-10'>
                                    <img src="https://www.agorapulse.com/assets/partners/partner-tiktok.svg" alt="" className='h-6' />
                                    <img src="https://www.agorapulse.com/assets/partners/partner-aws.svg" alt="" className='h-6' />
                                    <img src="https://www.agorapulse.com/assets/partners/partner-meta.svg" alt="" className='h-6' />
                                    <img src="https://www.agorapulse.com/assets/partners/partner-linkedin.svg" alt="" className='h-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeDropdown === 'resources' && (
                    <div className='absolute left-0 top-19 w-full bg-white border-t border-gray-100 grid grid-cols-12 cursor-default'>
                        <div className='col-span-7 py-12 pl-[8%] pr-12 bg-white'>
                            <div className='grid grid-cols-2 gap-x-8 gap-y-6'>
                                {resourcesNav.resources.map((feature, idx) => {
                                    const Icon = feature.Icon;

                                    return (
                                        <Link
                                            key={idx}
                                            to={feature.to}
                                            className={`flex gap-4 p-3 rounded-xl transition-all group`}
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            <div className={`shrink-0 p-3 rounded h-fit ${feature.isSpecial ? 'bg-[#f7ffc5] text-[#e05000] group-hover:bg-[#021a41] group-hover:text-[#f7ffc5]' : 'bg-[#f5f5f7] text-[#344563] group-hover:bg-[#ff6726] group-hover:text-white'
                                                }`}>
                                                <Icon size={24} strokeWidth={2} />
                                            </div>

                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <h4 className='font-semibold text-[#212e44] group-hover:text-[#ff6726]'>
                                                        {feature.title}
                                                    </h4>

                                                    {feature.badge && (
                                                        <span className='text-[12px] font-bold bg-[#7b51e0] text-white px-1.5 rounded'>
                                                            {feature.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                <p className='text-[14px] text-[#212e44] mt-1 leading-relaxed pr-4'>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='col-span-3 bg-[#f5f5f7] py-12 px-10'>
                            <h5 className='text-[12px] font-semibold text-[#5d6a82] mb-6'>
                                Learn & Connect
                            </h5>
                            <div className='flex flex-col gap-6'>
                                {resourcesNav.connect.map((feature, idx) => {
                                    const Icon = feature.Icon;

                                    return (
                                        <Link
                                            key={idx}
                                            to={feature.to}
                                            className='flex items-center gap-4 group'
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            <div className='shrink-0 text-gray-400 mt-0.5 group-hover:text-[#f50] transition-colors'>
                                                <Icon size={16} strokeWidth={2} />
                                            </div>

                                            <div>
                                                <h4 className='font-bold text-[#212e44] group-hover:scale-101'>
                                                    {feature.title}
                                                </h4>
                                                <p className='text-[14px] text-[#212e44] mt-0.5 leading-snug'>
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='col-span-2 bg-[#212e44] py-12 px-12 pr-[8%] text-white'>
                            <img
                                src={resourcesNav.promo.image}
                                alt="Promo"
                                className='w-full h-auto object-cover rounded-xl mb-6 shadow-lg'
                            />
                            <h4 className='font-bold text-[18px] mb-2'>
                                {resourcesNav.promo.title}
                            </h4>
                            <p className='text-[14px] leading-relaxed mb-5'>
                                {resourcesNav.promo.desc}
                            </p>
                            <Link
                                to={resourcesNav.promo.to}
                                className='text-[14px] font-bold text-white underline hover:opacity-75 transition-colors inline-block'
                                onClick={() => setActiveDropdown(null)}
                            >
                                {resourcesNav.promo.linkText}
                            </Link>
                        </div>

                    </div>
                )}
            </div>

            {/* MOBILE NAVBAR */}
            <div className='lg:hidden flex items-center justify-between px-6 py-5 sticky top-0 z-999 bg-white border-b border-gray-100'>
                <Link to='/'>
                    <img
                        src={assets.agorapulse_logo}
                        alt='agorapulse-logo'
                        className='h-7'
                    />
                </Link>

                <button
                    onClick={() => setSidebarOpen(true)}
                    className='cursor-pointer text-[#344563]'
                    aria-label='Open menu'
                >
                    <Menu size={26} />
                </button>
            </div>

            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className='lg:hidden fixed inset-0 bg-black/40 z-1000'
                />
            )}

            <div
                className={`lg:hidden fixed top-0 right-0 h-screen w-[88%] max-w-sm bg-white z-1001 shadow-xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className='flex items-center justify-between px-6 py-5 border-b border-gray-100'>
                    <img
                        src={assets.agorapulse_logo}
                        alt='agorapulse-logo'
                        className='h-7'
                    />

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className='cursor-pointer text-gray-500'
                        aria-label='Close menu'
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className='px-6 py-6 overflow-y-auto h-[calc(100vh-80px)]'>
                    <ul className='flex flex-col text-[#344563] font-semibold text-[16px]'>

                        <li className='py-4 border-b border-gray-100'>
                            <div
                                onClick={() => setMobileSubNavbarOpenTopFeature(prev => !prev)}
                                className='flex items-center justify-between cursor-pointer select-none'
                            >
                                <span className={mobileSubNavbarOpenTopFeature ? 'text-[#f50]' : ''}>
                                    Top Features
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${mobileSubNavbarOpenTopFeature ? 'rotate-180 text-[#f50]' : 'text-gray-400'
                                        }`}
                                />
                            </div>

                            {mobileSubNavbarOpenTopFeature && (
                                <div className='mt-4 flex flex-col gap-6 pl-1 transition-all'>
                                    <div className='flex flex-col gap-3'>
                                        {topFeatureNav.topFeatures.map((feature, idx) => {
                                            const Icon = feature.Icon;
                                            return (
                                                <Link
                                                    key={idx}
                                                    to={feature.to}
                                                    onClick={() => setSidebarOpen(false)}
                                                    className={`flex items-start gap-3 p-3 transition-all ${feature.isSpecial ? 'bg-[#f7ffc5]' : 'border-b border-[#0000001a]'
                                                        }`}
                                                >
                                                    <div className={`shrink-0 p-2 rounded-lg ${feature.isSpecial ? 'bg-white text-[#e05000]' : 'bg-white text-[#344563]'
                                                        }`}>
                                                        <Icon size={20} strokeWidth={2} />
                                                    </div>

                                                    <div>
                                                        <div className='flex items-center gap-2'>
                                                            <h4 className='font-semibold text-[#212e44] text-[14px]'>
                                                                {feature.title}
                                                            </h4>
                                                            {feature.badge && (
                                                                <span className='text-[10px] font-bold bg-[#7b51e0] text-white px-1.5 py-0.5 rounded'>
                                                                    {feature.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className='text-[12px] text-gray-500 mt-0.5 leading-relaxed'>
                                                            {feature.desc}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    <div className='pt-3 border-t border-gray-100'>
                                        <h5 className='text-[11px] font-semibold text-[#5d6a82] uppercase tracking-wider mb-3'>
                                            Advanced features
                                        </h5>
                                        <div className='flex flex-col gap-3.5 pl-1'>
                                            {topFeatureNav.advancedFeatures.map((feature, idx) => {
                                                const Icon = feature.Icon;
                                                return (
                                                    <Link
                                                        key={idx}
                                                        to={feature.to}
                                                        onClick={() => setSidebarOpen(false)}
                                                        className='flex items-start gap-3 text-[#212e44]'
                                                    >
                                                        <Icon size={18} strokeWidth={2} className='shrink-0 text-gray-400 mt-0.5' />
                                                        <div>
                                                            <h4 className='font-bold text-[13px]'>
                                                                {feature.title}
                                                            </h4>
                                                            <p className='text-[12px] text-gray-500 leading-snug mt-0.5'>
                                                                {feature.desc}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className='bg-[#212e44] text-white p-4 rounded-xl mt-1'>
                                        <img
                                            src={topFeatureNav.promo.image}
                                            alt="Promo"
                                            className='w-full h-28 object-cover rounded-lg mb-3'
                                        />
                                        <h4 className='font-bold text-[14px] mb-1'>
                                            {topFeatureNav.promo.title}
                                        </h4>
                                        <p className='text-[12px] text-gray-300 leading-relaxed mb-3'>
                                            {topFeatureNav.promo.desc}
                                        </p>
                                        <Link
                                            to={topFeatureNav.promo.to}
                                            onClick={() => setSidebarOpen(false)}
                                            className='text-[13px] font-bold text-white underline hover:opacity-80 inline-block'
                                        >
                                            {topFeatureNav.promo.linkText}
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className='py-4 border-b border-gray-100'>
                            <div
                                onClick={() => setMobileSubNavbarOpenSolutions(prev => !prev)}
                                className='flex items-center justify-between cursor-pointer select-none'
                            >
                                <span className={mobileSubNavbarOpenSolutions ? 'text-[#f50]' : ''}>
                                    Solutions
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${mobileSubNavbarOpenSolutions ? 'rotate-180 text-[#f50]' : 'text-gray-400'
                                        }`}
                                />
                            </div>

                            {mobileSubNavbarOpenSolutions && (
                                <div className='mt-4 flex flex-col gap-6 pl-1 transition-all'>
                                    <div className='flex flex-col gap-3'>
                                        {solutionsNav.solutions.map((feature, idx) => {
                                            const Icon = feature.Icon;
                                            return (
                                                <Link
                                                    key={idx}
                                                    to={feature.to}
                                                    onClick={() => setSidebarOpen(false)}
                                                    className={`flex items-start gap-3 p-3 transition-all ${feature.isSpecial ? 'bg-[#f7ffc5]' : 'border-b border-[#0000001a]'
                                                        }`}
                                                >
                                                    <div className={`shrink-0 p-2 rounded-lg ${feature.isSpecial ? 'bg-white text-[#e05000]' : 'bg-white text-[#344563]'
                                                        }`}>
                                                        <Icon size={20} strokeWidth={2} />
                                                    </div>

                                                    <div>
                                                        <div className='flex items-center gap-2'>
                                                            <h4 className='font-semibold text-[#212e44] text-[14px]'>
                                                                {feature.title}
                                                            </h4>
                                                            {feature.badge && (
                                                                <span className='text-[10px] font-bold bg-[#7b51e0] text-white px-1.5 py-0.5 rounded'>
                                                                    {feature.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className='text-[12px] text-gray-500 mt-0.5 leading-relaxed'>
                                                            {feature.desc}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    <div className='p-3 border-t border-gray-100 bg-[#f5f5f7] rounded-2xl'>
                                        <h5 className='text-[11px] font-semibold text-[#5d6a82] uppercase tracking-wider mb-3'>
                                            Network & Integrations
                                        </h5>
                                        <div className='flex flex-wrap gap-6 pl-1'>
                                            {solutionsNav.intregrations.map((int, idx) => {
                                                return (
                                                    <div
                                                        key={idx}
                                                        className='flex items-start gap-3 text-[#212e44]'
                                                    >
                                                        <img src={int.icon} alt="" className='h-5 w-5' />
                                                        <div>
                                                            <h4 className='font-bold text-[13px]'>
                                                                {int.name}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className='pt-10'>
                                            <Link to={'intregrations'} onClick={() => setSidebarOpen(false)}>
                                                <button className='flex items-center gap-2 text-[#ff6726]'>See all Intregrations <ArrowRight size={18} /></button>
                                            </Link>

                                            <div className='pt-5 flex flex-wrap gap-6'>
                                                <img src="https://www.agorapulse.com/assets/partners/partner-tiktok.svg" alt="" className='h-6' />
                                                <img src="https://www.agorapulse.com/assets/partners/partner-aws.svg" alt="" className='h-6' />
                                                <img src="https://www.agorapulse.com/assets/partners/partner-meta.svg" alt="" className='h-6' />
                                                <img src="https://www.agorapulse.com/assets/partners/partner-linkedin.svg" alt="" className='h-6' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className='py-4 border-b border-gray-100'>
                            <Link to='/pricing' onClick={() => setSidebarOpen(false)}>
                                Pricing
                            </Link>
                        </li>

                        <li className='py-4 border-b border-gray-100'>
                            <div
                                onClick={() => setMobileSubNavbarOpenResources(prev => !prev)}
                                className='flex items-center justify-between cursor-pointer select-none'
                            >
                                <span className={mobileSubNavbarOpenResources ? 'text-[#f50]' : ''}>
                                    Resources
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${mobileSubNavbarOpenResources ? 'rotate-180 text-[#f50]' : 'text-gray-400'
                                        }`}
                                />
                            </div>

                            {mobileSubNavbarOpenResources && (
                                <div className='mt-4 flex flex-col gap-6 pl-1 transition-all'>
                                    <div className='flex flex-col gap-3'>
                                        {resourcesNav.resources.map((feature, idx) => {
                                            const Icon = feature.Icon;
                                            return (
                                                <Link
                                                    key={idx}
                                                    to={feature.to}
                                                    onClick={() => setSidebarOpen(false)}
                                                    className={`flex items-start gap-3 p-3 transition-all ${feature.isSpecial ? 'bg-[#f7ffc5]' : 'border-b border-[#0000001a]'
                                                        }`}
                                                >
                                                    <div className={`shrink-0 p-2 rounded-lg ${feature.isSpecial ? 'bg-white text-[#e05000]' : 'bg-white text-[#344563]'
                                                        }`}>
                                                        <Icon size={20} strokeWidth={2} />
                                                    </div>

                                                    <div>
                                                        <div className='flex items-center gap-2'>
                                                            <h4 className='font-semibold text-[#212e44] text-[14px]'>
                                                                {feature.title}
                                                            </h4>
                                                            {feature.badge && (
                                                                <span className='text-[10px] font-bold bg-[#7b51e0] text-white px-1.5 py-0.5 rounded'>
                                                                    {feature.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className='text-[12px] text-gray-500 mt-0.5 leading-relaxed'>
                                                            {feature.desc}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    <div className='pt-3 border-t border-gray-100'>
                                        <h5 className='text-[11px] font-semibold text-[#5d6a82] uppercase tracking-wider mb-3'>
                                            Learn & Connect
                                        </h5>
                                        <div className='flex flex-col gap-3.5 pl-1'>
                                            {resourcesNav.connect.map((feature, idx) => {
                                                const Icon = feature.Icon;
                                                return (
                                                    <Link
                                                        key={idx}
                                                        to={feature.to}
                                                        onClick={() => setSidebarOpen(false)}
                                                        className='flex items-start gap-3 text-[#212e44]'
                                                    >
                                                        <Icon size={18} strokeWidth={2} className='shrink-0 text-gray-400 mt-0.5' />
                                                        <div>
                                                            <h4 className='font-bold text-[13px]'>
                                                                {feature.title}
                                                            </h4>
                                                            <p className='text-[12px] text-gray-500 leading-snug mt-0.5'>
                                                                {feature.desc}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className='bg-[#212e44] text-white p-4 rounded-xl mt-1'>
                                        <img
                                            src={resourcesNav.promo.image}
                                            alt="Promo"
                                            className='w-full h-28 object-cover rounded-lg mb-3'
                                        />
                                        <h4 className='font-bold text-[14px] mb-1'>
                                            {resourcesNav.promo.title}
                                        </h4>
                                        <p className='text-[12px] text-gray-300 leading-relaxed mb-3'>
                                            {resourcesNav.promo.desc}
                                        </p>
                                        <Link
                                            to={resourcesNav.promo.to}
                                            onClick={() => setSidebarOpen(false)}
                                            className='text-[13px] font-bold text-white underline hover:opacity-80 inline-block'
                                        >
                                            {resourcesNav.promo.linkText}
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>

                    <div className='flex flex-col gap-3 mt-8 pb-8'>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className='w-full py-3 text-[#344563] font-semibold border border-gray-200 rounded-3xl cursor-pointer'
                        >
                            Log In
                        </button>

                        <button
                            onClick={() => setSidebarOpen(false)}
                            className='w-full flex justify-center items-center gap-2 px-4 py-3 border-[1.5px] border-[#f50] rounded-3xl text-[#f50] font-semibold cursor-pointer hover:bg-[#fff5f0] transition-all'
                        >
                            Try for free
                            <ArrowRight size={18} />
                        </button>

                        <button
                            onClick={() => setSidebarOpen(false)}
                            className='w-full flex justify-center items-center gap-2 px-4 py-3 bg-[#f50] rounded-3xl text-white font-semibold cursor-pointer hover:bg-[#e04a00] transition-all'
                        >
                            Schedule a demo
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar