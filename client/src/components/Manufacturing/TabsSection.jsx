import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const TabsSection = ({ title, Icon1, Icon2, Icon3, title1, title2, title3, desc1, desc2, desc3, mainImage, btnHidden }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [fade, setFade] = useState(true);

    const tabs = [
        {
            Icon: Icon1,
            title: title1,
            desc: desc1,
        },
        {
            Icon: Icon2,
            title: title2,
            desc: desc2,
        },
        {
            Icon: Icon3,
            title: title3,
            desc: desc3,
        },
    ];

    const handleTabClick = (index) => {
        const nextIndex = activeIndex === index ? null : index;

        if (nextIndex !== activeIndex) {
            setFade(false);

            setTimeout(() => {
                setActiveIndex(nextIndex);
                setFade(true);
            }, 150);
        }
    };

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 max-w-7xl mx-auto'>
            {title && (
                <div className='mb-12'>
                    <h2 className='text-[#212e44] text-center text-3xl md:text-4xl font-superbold'>{title}</h2>
                </div>
            )}

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                <div className='flex flex-col lg:col-span-5 gap-4'>
                    {tabs.map((tab, index) => {
                        const isOpen = activeIndex === index;
                        const Icon = tab.Icon;

                        return (
                            <div
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${isOpen ? 'bg-[#e8f4ff]' : 'bg-white'
                                    }`}
                            >
                                <div className='flex items-center gap-4'>
                                    {Icon && (
                                        <div className={`w-12 h-12 rounded-xl text-blue-600 flex items-center justify-center shrink-0 ${isOpen ? 'bg-white' : 'bg-[#e8f4ff]'}`}>
                                            <Icon className='w-6 h-6' />
                                        </div>
                                    )}
                                    <h3 className='text-[#212e44] text-lg font-bold leading-snug'>
                                        {tab.title}
                                    </h3>
                                </div>

                                {isOpen && tab.desc && (
                                    <div className='mt-4 pt-2 text-[#212e44] font-medium text-base animate-fadeIn'>
                                        {tab.desc}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className='flex justify-center lg:col-span-7 items-center overflow-hidden'>
                    {mainImage && (
                        <img
                            src={mainImage}
                            alt='Feature illustration'
                            className={`w-full max-w-xl h-auto object-contain rounded-2xl transition-opacity duration-600 ease-in-out ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}
                        />
                    )}
                </div>
            </div>

            <div className={`justify-center pt-10 ${btnHidden ? 'hidden': 'flex'}`}>
                <Link to={'/demo'}>
                    <button className='flex items-center gap-2 bg-transparent py-3 px-5 rounded-lg text-[#3a9efe] font-extrabold cursor-pointer border border-[#3a9efe] hover:bg-[#3a9efe] hover:text-white transition-all duration-300 hover:gap-3'>Request a demo <ArrowRight size={18} /></button>
                </Link>
            </div>
        </div>
    );
};

export default TabsSection;