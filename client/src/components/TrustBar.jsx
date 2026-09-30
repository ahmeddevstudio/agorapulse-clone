import React from 'react'

const TrustBar = () => {

    const logos = [
        {
            name: "Ogilvy",
            image: "https://www.agorapulse.com/assets/hv2-home2/ogilvy-logo-grey-4.svg",
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
            image: "https://www.agorapulse.com/assets/hv2-home2/rockler-logo-grey-4.svg",
        },
        {
            name: "Blue Diamond Resorts",
            image: "https://www.agorapulse.com/assets/hv2-home2/blue-diamond-resorts-logo-grey-4.svg",
        },
        {
            name: "WWF",
            image: "https://www.agorapulse.com/assets/hv2-home2/wwf-logo-grey-4.svg",
        },
        {
            name: "McCann",
            image: "https://www.agorapulse.com/assets/hv2-home2/mccann-logo-grey-4.svg",
        },
        {
            name: "Sézane",
            image: "https://www.agorapulse.com/assets/hv2-home2/sezane-logo-grey-4.svg",
        },
        {
            name: "Atari",
            image: "https://www.agorapulse.com/assets/hv2-home2/atari-logo-grey-4.svg",
        },
        {
            name: "Dassault Aviation",
            image: "https://www.agorapulse.com/assets/hv2-home2/dassault-aviation-logo-grey-4.svg",
        },
        {
            name: "Saint-Gobain",
            image: "https://www.agorapulse.com/assets/hv2-home2/saint-gobain-logo-grey-4.svg",
        },
        {
            name: "WD-40",
            image: "https://www.agorapulse.com/assets/hv2-home2/wd-40-logo-grey-4.svg",
        },
        {
            name: "Berliner Philharmoniker",
            image: "https://www.agorapulse.com/assets/hv2-home2/berliner-philharmoniker-logo-grey-4.svg",
        },
    ];

    return (
        <div className='px-4 [@media(min-width:1400px)]:px-24'>
            <div className='pt-5'>
                <h3 className='text-2xl text-center text-[#021a41] font-semibold'>Over 31K+ social media managers use our tool daily</h3>
            </div>

            <div className="overflow-hidden pt-8">
                <div className="flex w-max animate-marquee gap-10">
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex h-16 shrink-0 items-center justify-center bg-white px-6"
                        >
                            <img
                                src={logo.image}
                                alt={logo.name}
                                className="max-h-16 w-auto max-w-32.5 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrustBar