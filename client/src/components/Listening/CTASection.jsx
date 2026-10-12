import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CTASection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      threeDIcon: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/icon-clock.svg',
      title: 'Cover every source that matters',
      desc: 'Monitor Facebook, Instagram, YouTube, X, LinkedIn and Reddit alongside thousands of news sites, blogs and forums. Setting up a search takes under a minute: type your brand, your product or a competitor, pick your sources, done.',
      image: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/listening-sources-EN.webp'
    },
    {
      threeDIcon: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/icon-x-button.svg',
      title: 'Cut the noise in one click',
      desc: 'More coverage means more irrelevant mentions. Listening Screening reads your results and separates real conversations about your brand from coincidental keyword matches, in a single click. No filter tuning, no query syntax to learn. This is the part most listening tools leave to you.',
      image: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/listening-screening-EN.webp'
    },
    {
      threeDIcon: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/icon-trends-up.svg',
      title: 'See your share of voice',
      desc: 'Add your competitors and get a native Share of Voice view: who is talked about most, on which platforms, and how that moves over time. Ready for the strategy review, and for the slide your client or your team asks for every quarter.',
      image: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/listening-share-of-voice-EN.webp'
    },
    {
      threeDIcon: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/icon-bell-alert.svg',
      title: 'Know the moment something moves',
      desc: 'Set alerts on volume spikes and sentiment shifts, and save a dedicated search for your crisis keywords so the right people are notified immediately. Live volume and engagement views tell you whether a topic is gaining traction fast enough to be worth joining.',
      image: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/listening-brand-search-alert-2-EN.webp'
    },
    {
      threeDIcon: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/icon-graph-up.svg',
      title: 'Share reports your teams actually read',
      desc: 'Export listening reports built for sharing, covering mention volume, engagement, sentiment and Share of Voice. Your listening data also flows into Report Studio, so it sits in the same report as your publishing, inbox and analytics numbers instead of living in its own silo.',
      image: 'https://www.agorapulse.com/assets/hv2-feature-monitoring/listening-mentions-2-EN.webp'
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className='px-4 [@media(min-width:1400px)]:px-24 py-16 bg-white'>
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <div className='text-center'>
          <h2 className='text-4xl font-extrabold [-webkit-text-stroke:1.5px] text-[#212e44]'>
            It's never been easier to stay <div>ahead of your market</div>
          </h2>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto'>
        <div className='lg:col-span-6 space-y-4'>
          {cards.map((card, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => handleToggle(idx)}
                className={`cursor-pointer rounded-2xl transition-all duration-300 p-6 shadow-[0_12px_26.9px_0_rgba(93,106,130,.08)] ${isActive ? 'bg-[#c1f4ed]' : 'bg-white'
                  }`}
              >
                <div className='flex items-center'>
                  <div className={`flex items-center justify-center rounded-xl`}>
                    <img src={card.threeDIcon} alt="" className='w-16 h-16 object-contain' />
                  </div>
                  <h3 className={`text-lg font-extrabold text-[#05737a]`}>
                    {card.title}
                  </h3>
                </div>

                {isActive && (
                  <div className='mt-4'>
                    <p className='text-[#212e44] text-lg font-medium'>
                      {card.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className='lg:col-span-6 sticky top-8'>
          <div className='p-4 overflow-hidden grid grid-cols-1 grid-rows-1'>
            {cards.map((card, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`col-start-1 row-start-1 transition-all duration-500 ease-out transform ${isActive
                      ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto z-10'
                      : 'opacity-0 scale-95 translate-y-4 pointer-events-none z-0'
                    }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className='w-full h-auto object-cover'
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <div className='flex justify-center pt-10'>
        <Link to={'/demo'}>
            <button className='flex items-center gap-2 font-extrabold bg-[#2fd9c4] py-3 px-4 text-white rounded-lg border border-transparent cursor-pointer hover:bg-transparent hover:text-[#2fd9c4] hover:border-[#2fd9c4] transition-all duration-300 hover:gap-3'>Book a Demo <ArrowRight size={18} strokeWidth={2.5}/></button>
        </Link>
      </div>
    </div>
  )
}

export default CTASection