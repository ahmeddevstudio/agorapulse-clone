import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react'

const PricingSection = () => {
    const [billing, setBilling] = useState('monthly');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(1);

    const pricing = [
        {
            name: 'Standard',
            for: 'Built for social media managers handling it all themselves',
            annualPrice: 79,
            monthlyPrice: 99,
            save: 240,
            benefits: [
                'Schedule and publish unlimited posts',
                'Manage all messages and organic comments from one inbox',
                'Access basic reports on your audience and top content, and export branded reports',
            ],
            popular: false,
        },
        {
            name: 'Professional',
            for: 'Perfect for growing teams who need to move faster together',
            annualPrice: 119,
            monthlyPrice: 149,
            save: 360,
            benefits: [
                'Expand your publishing toolbox with link in bio, Instagram product tagging, and calendar notes',
                'Monitor and reply to ad comments',
                'Improve teamwork with post and inbox assignments, plus team performance reports',
            ],
            popular: false,
        },
        {
            name: 'Advanced',
            for: 'Ideal for teams needing structure and deeper insights',
            annualPrice: 149,
            monthlyPrice: 199,
            save: 600,
            benefits: [
                'Streamline operations with labels, saved replies, automated moderation rules, and bulk actions',
                'Align your team with shared content calendars',
                'Level up your reporting with advanced reports, ads reports, ROI analysis, and competitor benchmarking',
            ],
            popular: true,
        },
        {
            name: 'Custom',
            for: 'Best for large teams or enterprises with complex needs',
            annualPrice: 'Tailored Pricing',
            monthlyPrice: 'Tailored Pricing',
            benefits: [
                'Scale without limits: manage unlimited social profiles and leverage AI-powered reply suggestions',
                'Collaborate at an enterprise level with SSO, custom roles, and multi-step approval workflows',
                'Unlock full reporting capabilities: import historical data, integrate via API, and analyze sentiment',
                'Get priority support, a dedicated Customer Success Manager, 1:1 training, and quarterly business reviews',
            ],
            popular: false,
        },
    ];

    const changePlan = (direction) => {
        const nextDirection = direction === 'next' ? 1 : -1;

        setSlideDirection(nextDirection);

        setCurrentIndex((prev) => {
            if (direction === 'next') {
                return (prev + 1) % pricing.length;
            }

            return (prev - 1 + pricing.length) % pricing.length;
        });
    };

    const renderPricingCard = (item, idx) => (
        <div
            key={item.name}
            className={`border border-[#d6dae0] rounded-xl py-10 px-4 ${item.popular ? 'bg-[#fff9f4]' : 'bg-transparent'
                }`}
        >
            <div className="text-center text-[#212e44]">
                <h4 className="text-2xl font-superbold">
                    {item.name}
                </h4>

                <p className="pt-5 font-medium">
                    {item.for}
                </p>
            </div>

            <div className="pt-7 text-center flex flex-col items-center">
                <p className="text-[#212e44] text-xl font-superbold">
                    {item.name === 'Custom' ? '' : 'US $'}

                    <span
                        className={
                            item.name === 'Custom'
                                ? 'text-2xl'
                                : 'text-5xl'
                        }
                    >
                        {billing === 'annually'
                            ? item.annualPrice
                            : item.monthlyPrice}
                    </span>
                </p>

                <p>
                    <span className="text-[#858fa1]">
                        {item.name === 'Custom'
                            ? ''
                            : 'per user /monthly'}
                    </span>
                </p>

                <p
                    className={`mt-5 bg-[#e8f4ff] text-[#1799dd] w-fit px-4 py-2 rounded-full font-medium ${billing === 'monthly' || item.name === 'Custom'
                        ? 'hidden'
                        : 'block'
                        }`}
                >
                    Save ${item.save}/year
                </p>
            </div>

            <div className="flex justify-center pt-10">
                <Link
                    to={item.name === 'Custom' ? '/demo' : '/signup'}
                >
                    <button
                        className={`flex items-center gap-2 py-3 px-5 rounded-full text-[#3a9efe] font-extrabold cursor-pointer border hover:bg-[#3a9efe] transition-all duration-300 hover:gap-3 ${item.popular
                            ? 'bg-[#ff6726] text-white border-transparent hover:bg-transparent hover:border-[#ff6726] hover:text-[#ff6726]'
                            : 'bg-transparent hover:border-transparent hover:text-white'
                            }`}
                    >
                        {item.name === 'Custom'
                            ? 'Request a demo'
                            : 'Try for free now'}

                        <ArrowRight size={18} />
                    </button>
                </Link>
            </div>

            <div className="pt-10 pb-50 flex flex-col gap-4">
                <p
                    className={`font-extrabold pb-2 text-[#212e44] ${item.name === 'Standard' ? 'hidden' : 'block'
                        }`}
                >
                    {item.name === 'Advanced'
                        ? 'Everything in Professional plus:'
                        : item.name === 'Custom'
                            ? 'Everything in Advanced plus:'
                            : 'Everything in Standard plus:'}
                </p>

                {item.benefits.map((ben, benefitIndex) => (
                    <ul
                        key={benefitIndex}
                        className="flex items-start gap-2"
                    >
                        <div
                            className={`text-white rounded-full w-4 h-4 shrink-0 flex items-center justify-center ${item.popular
                                ? 'bg-[#ff6726]'
                                : 'bg-black'
                                }`}
                        >
                            <Check
                                className="w-3 h-3"
                                strokeWidth={2.5}
                            />
                        </div>

                        <li className="text-sm font-medium">
                            {ben}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );

    return (
        <div className="px-4 [@media(min-width:1400px)]:px-24 py-5">
            <div className="flex justify-center">
                <div className="flex items-center gap-1 bg-[#f9f9f9aa] p-3 rounded-2xl">
                    <button
                        onClick={() => setBilling('monthly')}
                        className={`lg:text-lg font-bold p-2 rounded-2xl transition-all duration-200 cursor-pointer ${billing === 'monthly'
                            ? 'bg-white text-[#001b44] font-extrabold'
                            : 'bg-transparent text-[#7d7d7d]'
                            }`}
                    >
                        Pay monthly
                    </button>

                    <button
                        onClick={() => setBilling('annually')}
                        className={`flex items-center gap-3 lg:text-lg p-2 rounded-2xl transition-all duration-200 cursor-pointer ${billing === 'annually'
                            ? 'bg-white text-[#001b44] font-extrabold'
                            : 'bg-transparent text-[#7d7d7d]'
                            }`}
                    >
                        Pay annually

                        <span className="text-xs font-normal text-[#0097f0] bg-[#e8f4ff] py-1 px-3 rounded-2xl whitespace-nowrap">
                            Save up to 20%
                        </span>
                    </button>
                </div>
            </div>

            <div className="pt-10 lg:hidden">
                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={() => changePlan('prev')}
                        aria-label="Previous pricing plan"
                        className="shrink-0 rounded-full border border-[#d6dae0] p-2 hover:bg-[#f9f9f9] transition-colors cursor-pointer text-[#ff6726]"
                    >
                        <ChevronLeft size={22} strokeWidth={2.5} />
                    </button>

                    <div className="min-w-0 flex-1 overflow-hidden">
                        <AnimatePresence
                            mode="wait"
                            initial={false}
                            custom={slideDirection}
                        >
                            <motion.div
                                key={pricing[currentIndex].name}
                                custom={slideDirection}
                                variants={{
                                    enter: (direction) => ({
                                        x: direction * 100,
                                        opacity: 1,
                                    }),
                                    center: {
                                        x: 0,
                                        opacity: 1,
                                    },
                                    exit: (direction) => ({
                                        x: direction * -100,
                                        opacity: 0,
                                    }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: {
                                        type: 'tween',
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                    opacity: {
                                        duration: 0.25,
                                    },
                                }}
                            >
                                {renderPricingCard(
                                    pricing[currentIndex],
                                    currentIndex
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => changePlan('next')}
                        aria-label="Next pricing plan"
                        className="shrink-0 rounded-full border border-[#d6dae0] p-2 hover:bg-[#f9f9f9] transition-colors cursor-pointer text-[#ff6726]"
                    >
                        <ChevronRight size={22} strokeWidth={2.5} />
                    </button>
                </div>

                <div className="flex justify-center items-center gap-2 mt-5">
                    {pricing.map((item, idx) => (
                        <button
                            key={item.name}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Show ${item.name} plan`}
                            aria-current={
                                currentIndex === idx ? 'true' : undefined
                            }
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === idx
                                ? 'bg-[#ff6726] w-6'
                                : 'bg-[#d6dae0] w-2'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="hidden lg:grid grid-cols-4 gap-5 pt-10">
                {pricing.map((item, idx) =>
                    renderPricingCard(item, idx)
                )}
            </div>
        </div>
    );
};

export default PricingSection;
