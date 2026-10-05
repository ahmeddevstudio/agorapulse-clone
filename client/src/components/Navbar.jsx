import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, ChevronDown, FileChartColumnIncreasing, Inbox, Link2, Megaphone, Menu, RadioTower, Send, Sparkles, TrendingUp, X } from 'lucide-react'

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isSubNavbarOpen, SetisSubNavbarOpen] = useState(false);
    const [mobileSubNavbarOpen, setMobileSubNavbarOpen] = useState(false);

    const handleSubNavbarOpenClick = () => {
        SetisSubNavbarOpen(prev => !prev);
    }

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
                            <h3 className={`flex items-center cursor-pointer select-none ${isSubNavbarOpen ? 'text-[#f50]' : 'text-[#344563]'}`} onClick={handleSubNavbarOpenClick}>
                                Top Features
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ease-in-out ${isSubNavbarOpen ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </h3>
                        </li>
                        <li className='cursor-pointer flex items-center h-full hover:text-[#f50] transition-colors text-sm'>Solutions</li>
                        <li className='cursor-pointer flex items-center h-full hover:text-[#f50] transition-colors text-sm'>Pricing</li>
                        <li className='cursor-pointer flex items-center h-full hover:text-[#f50] transition-colors text-sm'>Resources</li>
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

                {isSubNavbarOpen && (
                    <div className='absolute left-0 top-19 w-full bg-white border-t border-gray-100 grid grid-cols-12 cursor-default'>
                        <div className='col-span-7 py-12 pl-[8%] pr-12 bg-white'>
                            <div className='grid grid-cols-2 gap-x-8 gap-y-6'>
                                {topFeatureNav.topFeatures.map((feature, idx) => {
                                    const Icon = feature.Icon;

                                    return (
                                        <Link
                                            key={idx}
                                            to={feature.to}
                                            className={`flex gap-4 p-3 rounded-xl transition-all group`} onClick={handleSubNavbarOpenClick}
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
                                            className='flex items-center gap-4 group' onClick={handleSubNavbarOpenClick}
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
                                className='text-[14px] font-bold text-white underline hover:opacity-75 transition-colors inline-block' onClick={handleSubNavbarOpenClick}
                            >
                                {topFeatureNav.promo.linkText}
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
                                onClick={() => setMobileSubNavbarOpen(prev => !prev)}
                                className='flex items-center justify-between cursor-pointer select-none'
                            >
                                <span className={mobileSubNavbarOpen ? 'text-[#f50]' : ''}>
                                    Top Features
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${mobileSubNavbarOpen ? 'rotate-180 text-[#f50]' : 'text-gray-400'
                                        }`}
                                />
                            </div>

                            {mobileSubNavbarOpen && (
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
                            <Link to='#' onClick={() => setSidebarOpen(false)}>
                                Solutions
                            </Link>
                        </li>
                        <li className='py-4 border-b border-gray-100'>
                            <Link to='#' onClick={() => setSidebarOpen(false)}>
                                Pricing
                            </Link>
                        </li>
                        <li className='py-4 border-b border-gray-100'>
                            <Link to='#' onClick={() => setSidebarOpen(false)}>
                                Resources
                            </Link>
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