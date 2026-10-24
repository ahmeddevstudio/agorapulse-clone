import { ArrowRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const TrustBar = () => {

    const logos = [
        {
            name: "Ogilvy",
            image: "https://www.agorapulse.com/assets/pricing/ogilvy.svg",
        },
        {
            name: "1First Bank",
            image: "https://www.agorapulse.com/assets/pricing/firstbank.svg",
        },
        {
            name: "Group SEB",
            image: "https://www.agorapulse.com/assets/hv2-home2/group-seb-logo-grey-4.svg",
        },
        {
            name: "First Bank",
            image: "https://www.agorapulse.com/assets/hv2-home2/1-first-bank-logo-grey-4.svg",
        },
        {
            name: "Rockler",
            image: "https://www.agorapulse.com/assets/pricing/rockler.svg",
        },
        {
            name: "Blue Diamond Resorts",
            image: "https://www.agorapulse.com/assets/pricing/bluediamond.svg",
        },
        {
            name: "WWF",
            image: "https://www.agorapulse.com/assets/pricing/wwf.svg",
        },
        {
            name: "McCann",
            image: "https://www.agorapulse.com/assets/pricing/mccann.svg",
        },
        {
            name: "Sézane",
            image: "https://www.agorapulse.com/assets/pricing/sezane.svg",
        },
        {
            name: "Atari",
            image: "https://www.agorapulse.com/assets/pricing/atari.svg",
        },
        {
            name: "Dassault Aviation",
            image: "https://www.agorapulse.com/assets/pricing/dassault.svg",
        },
        {
            name: "Saint-Gobain",
            image: "https://www.agorapulse.com/assets/pricing/saint-gobain.svg",
        },
        {
            name: "Berliner Philharmoniker",
            image: "https://www.agorapulse.com/assets/pricing/berliner.svg",
        },
    ];

    return (
        <div className='py-15 bg-[#fff9f4]'>
            <div>
                <h2 className='text-center text-4xl text-[#212e44] font-superbold'>See Why Over 31,000 Marketers Prefer Agorapulse</h2>
            </div>

            <div className="overflow-hidden pt-5">
                <div className="flex w-max animate-marquee gap-10">
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex h-16 shrink-0 items-center justify-center px-6"
                        >
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="max-h-16 w-auto max-w-32.5 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center pt-10'>
                <Link to={'/signup'} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })}>
                    <button className='flex items-center gap-2 bg-[#ff6726] py-2 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>Try it yourself <ArrowRight size={18} /></button>
                </Link>
            </div>
        </div>
    )
}

export default TrustBar