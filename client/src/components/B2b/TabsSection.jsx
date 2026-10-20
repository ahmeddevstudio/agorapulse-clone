import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const TabsSection = ({ title, tag, tabs, order }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [displayImage, setDisplayImage] = useState(
        tabs[0]?.image || ''
    );
    const [opacity, setOpacity] = useState('opacity-100');

    const currentImage = (activeIndex !== null && tabs[activeIndex]?.image)
        ? tabs[activeIndex].image
        : (tabs[0]?.image || '');

    const handleTabClick = (idx) => {
        setActiveIndex(prev => prev === idx ? null : idx);
    };

    useEffect(() => {
        if (currentImage !== displayImage) {
            setOpacity('opacity-0');

            const timer = setTimeout(() => {
                setDisplayImage(currentImage);
                setOpacity('opacity-100');
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [currentImage, displayImage]);

    return (
        <div className="px-4 [@media(min-width:1400px)]:px-24">
            <h2 className="text-[#212e44] text-3xl md:text-4xl text-center font-black">
                {title}
            </h2>

            <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className={`flex flex-col space-y-6 ${order ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="text-[#ff7e46] text-2xl font-black bg-[#fff9f4] w-fit p-2 px-4 rounded-full">
                        {tag}
                    </p>

                    <div className="space-y-4">
                        {tabs.map((tab, idx) => {
                            const activeTab = activeIndex === idx;

                            return (
                                <div
                                    key={idx}
                                    className={`rounded-lg overflow-hidden transition-all duration-300 shadow-[0_10px_40px_0_rgba(58,158,254,.1019607843)] ${activeTab ? 'bg-[#e8f4ff]' : 'bg-white'
                                        }`}
                                >
                                    <button
                                        onClick={() => handleTabClick(idx)}
                                        aria-expanded={activeTab}
                                        className="w-full p-5 flex cursor-pointer gap-6 items-center text-left"
                                    >
                                        <ChevronDown
                                            strokeWidth={3}
                                            className={`shrink-0 mt-1 transition-transform duration-300 ${activeTab
                                                    ? 'rotate-180 text-[#ff7e46]'
                                                    : 'text-[#212e44]'
                                                }`}
                                        />

                                        <h4
                                            className={`text-lg font-extrabold leading-snug transition-colors ${activeTab
                                                    ? 'text-[#ff7e46]'
                                                    : 'text-[#212e44]'
                                                }`}
                                        >
                                            {tab.title}
                                        </h4>
                                    </button>

                                    {activeTab && (
                                        <div className="px-5 pb-5 text-[#212e44] font-semibold space-y-4">
                                            <div>{tab.desc}</div>
                                            {tab.image && (
                                                <div className="lg:hidden flex justify-center items-center pt-2">
                                                    <img
                                                        src={tab.image}
                                                        alt={tab.title}
                                                        className="h-auto w-auto object-contain rounded-xl"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={`hidden lg:flex justify-center items-center p-6 ${order ? 'lg:order-1' : 'lg:order-2'}`}>
                    {displayImage ? (
                        <img
                            src={displayImage}
                            alt={tabs[activeIndex]?.title || title}
                            className={`h-auto w-auto object-contain rounded-xl transition-opacity duration-300 ease-in-out ${opacity}`}
                        />
                    ) : (
                        <div className="text-gray-400 font-medium">
                            No image available
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default TabsSection;