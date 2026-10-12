import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ReviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragStart, setDragStart] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const reviews = [
        {
            review: "The outputs just sounded like me, which is exactly what you want when you're creating social media content for yourself. It used our frameworks, our concepts, our vernacular. It was not generic in any way, which was honestly very surprising.",
            name: 'Brooke Sellas',
            role: 'Founder & CEO, B Squared Media'
        },
        {
            review: "The content felt completely natural, like it was written by me from the start. It captured our tone, our ideas, and the way we communicate with our audience. Nothing felt forced or generic, which genuinely exceeded my expectations.",
            name: 'Corey Walker',
            role: 'Social Media Strategist, author of Instagram for Dummies'
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const handlePointerDown = (e) => {
        setDragStart(e.clientX);
    };

    const handlePointerUp = (e) => {
        if (dragStart === null) return;
        const diff = e.clientX - dragStart;
        const threshold = 40;

        if (diff > threshold) {
            handlePrev();
        } else if (diff < -threshold) {
            handleNext();
        }
        setDragStart(null);
    };

    const cardWidth = 620;
    const gap = 32;

    return (
        <section className='px-4 [@media(min-width:1400px)]:px-24 py-20 bg-[linear-gradient(0deg,#F7FFC5_0%,#FFF_100%)] overflow-hidden'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-16'>
                    <h2 className='text-[#021a41] font-black text-3xl md:text-4xl text-center tracking-tight'>
                        What people are saying about <span className='text-[#f50]'>Archie.</span>
                    </h2>
                </div>

                <div className='relative flex items-start justify-center max-w-5xl mx-auto'>
                    <button
                        onClick={handlePrev}
                        className='absolute left-2 md:-left-6 z-30 bg-white border border-gray-200 text-[#021a41] p-3.5 rounded-full shadow-md hover:bg-gray-50 transition-all active:scale-95 focus:outline-none flex items-center justify-center cursor-pointer'
                        aria-label='Previous review'
                    >
                        <ChevronLeft className='w-6 h-6' />
                    </button>

                    <div 
                        className='w-full overflow-hidden py-6 px-2 md:px-4 cursor-grab active:cursor-grabbing select-none'
                        onPointerDown={handlePointerDown}
                        onPointerUp={handlePointerUp}
                    >
                        <div 
                            className={`flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] items-center ${isMobile ? 'gap-0' : 'gap-8'}`}
                            style={{ 
                                transform: isMobile 
                                    ? `translateX(-${currentIndex * 100}%)` 
                                    : `translateX(calc(50% - 310px - ${currentIndex * (cardWidth + gap)}px))` 
                            }}
                        >
                            {reviews.map((item, index) => {
                                const isActive = index === currentIndex;
                                return (
                                    <div
                                        key={index}
                                        className={`w-full md:w-155 shrink-0 bg-white border border-gray-100/90 rounded-3xl md:rounded-4xl p-6 md:p-10 shadow-xl flex flex-col justify-between relative transition-all duration-700 ${
                                            isMobile
                                                ? 'opacity-100 scale-100'
                                                : isActive 
                                                    ? 'opacity-100 blur-none scale-100 shadow-2xl' 
                                                    : 'opacity-30 blur-xs scale-[0.95] pointer-events-none select-none'
                                        }`}
                                    >
                                        <div className='absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center'>
                                            <div className='w-2.5 h-2.5 bg-[#f50] rounded-full' />
                                        </div>

                                        <Quote className='w-10 h-10 text-gray-200/80 mb-4' />
                                        
                                        <p className='text-[#021a41] text-base md:text-xl font-semibold leading-relaxed mb-6 tracking-tight'>
                                            {item.review}
                                        </p>
                                        
                                        <div>
                                            <h4 className='font-bold text-[#021a41] text-base md:text-lg'>{item.name},</h4>
                                            <p className='text-gray-400 text-sm font-medium mt-0.5'>{item.role}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        className='absolute right-2 md:-right-6 z-30 bg-white border border-gray-200 text-[#021a41] p-3.5 rounded-full shadow-md hover:bg-gray-50 transition-all active:scale-95 focus:outline-none flex items-center justify-center cursor-pointer'
                        aria-label='Next review'
                    >
                        <ChevronRight className='w-6 h-6' />
                    </button>
                </div>

                <div className='flex justify-center items-center gap-2 mt-8'>
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                currentIndex === index ? 'w-8 bg-[#021a41]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;