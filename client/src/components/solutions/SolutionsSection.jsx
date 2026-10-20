import React, { useState } from 'react';
import { ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsSection = ({ title, span, title1, desc1, image1, title2, desc2, image2, title3, desc3, image3, title4, desc4, image4, title5, desc5, image5 }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const sections = [
        { title: title1, desc: desc1, image: image1 },
        { title: title2, desc: desc2, image: image2 },
        { title: title3, desc: desc3, image: image3 },
        { title: title4, desc: desc4, image: image4 },
        { title: title5, desc: desc5, image: image5 },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const currentImage = activeIndex !== null && sections[activeIndex]?.image
        ? sections[activeIndex].image
        : image1;

    const currentTitle = activeIndex !== null && sections[activeIndex]?.title
        ? sections[activeIndex].title
        : title1;

    return (
        <div className='px-6 md:px-15 [@media(min-width:1400px)]:px-30 py-15 bg-cover bg-no-repeat' style={{ 'backgroundImage': 'url("https://www.agorapulse.com/assets/hv2-home/pattern-orange.svg")' }}>
            <div className='mb-12'>
                <h2 className='text-center text-[#212e44] text-3xl md:text-5xl font-superbold'>
                    {title} <span className='text-[#ff6726]'>{span}</span>
                </h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                <div className='lg:col-span-6 flex flex-col'>
                    {sections.map((section, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div key={index}>
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className='w-full flex gap-4 items-center text-left group focus:outline-none cursor-pointer py-2'
                                >
                                    <span className={`p-2 rounded-full transition-colors ${isOpen ? 'text-[#ff6726]' : 'text-[#212e44] group-hover:text-[#ff6726]'}`}>
                                        <ChevronUp size={18} strokeWidth={3} className={`transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} />
                                    </span>
                                    <h3 className={`font-extrabold text-lg transition-colors ${isOpen ? 'text-[#ff6726]' : 'text-[#212e44] group-hover:text-[#ff6726]'}`}>
                                        {section.title}
                                    </h3>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out overflow-hidden px-12 ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className='overflow-hidden'>
                                        <p className='text-[#212e44] mb-4 font-medium'>
                                            {section.desc}
                                        </p>

                                        <div className={`block md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-150 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
                                            }`}>
                                            <div className='rounded-xl p-1 bg-white border border-gray-100'>
                                                {section.image ? (
                                                    <img
                                                        src={section.image}
                                                        alt={section.title}
                                                        className='w-full h-auto object-cover rounded-lg'
                                                    />
                                                ) : (
                                                    <div className='w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg'>
                                                        No image provided
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <Link to={'/demo'}>
                                            <button className='inline-flex items-center gap-2 bg-[#ff6726] text-white font-extrabold border border-transparent px-4 py-2 rounded-lg cursor-pointer hover:bg-transparent hover:border-[#ff6726] hover:text-[#ff6726] hover:gap-3 transition-all duration-300'>
                                                Book a demo <ArrowRight size={18} strokeWidth={2.5} />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='hidden md:flex lg:col-span-6 justify-center'>
                    <div className='w-full overflow-hidden transition-all duration-500 rounded-xl p-2'>
                        {currentImage ? (
                            <img
                                src={currentImage}
                                alt={currentTitle}
                                className='w-full h-auto object-cover transition-opacity duration-300'
                            />
                        ) : (
                            <div className='w-full h-80 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg'>
                                No image provided
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SolutionsSection;