import React from 'react'

const TrustBar = () => {

    const logos = [
        {
            name: "Atari",
            logo: "https://www.agorapulse.com/assets/hv2-home2/atari-logo-white-4.svg",
        },
        {
            name: "Dassault Aviation",
            logo: "https://www.agorapulse.com/assets/hv2-home2/dassault-aviation-logo-white-4.svg",
        },
        {
            name: "Saint-Gobain",
            logo: "https://www.agorapulse.com/assets/hv2-home2/saint-gobain-logo-white-4.svg",
        },
        {
            name: "Berliner Philharmoniker",
            logo: "https://www.agorapulse.com/assets/hv2-home2/berliner-philharmoniker-logo-white-4.svg",
        },
        {
            name: "Ogilvy",
            logo: "https://www.agorapulse.com/assets/hv2-home2/ogilvy-logo-white-4.svg",
        },
        {
            name: "First Bank",
            logo: "https://www.agorapulse.com/assets/hv2-home2/1-first-bank-logo-white-4.svg",
        },
        {
            name: "Rockler",
            logo: "https://www.agorapulse.com/assets/hv2-home2/rockler-logo-white-4.svg",
        },
        {
            name: "Blue Diamond Resorts",
            logo: "https://www.agorapulse.com/assets/hv2-home2/blue-diamond-resorts-logo-white-4.svg",
        },
        {
            name: "WWF",
            logo: "https://www.agorapulse.com/assets/hv2-home2/wwf-logo-white-4.svg",
        },
        {
            name: "McCann",
            logo: "https://www.agorapulse.com/assets/hv2-home2/mccann-logo-white-4.svg",
        },
        {
            name: "Sézane",
            logo: "https://www.agorapulse.com/assets/hv2-home2/sezane-logo-white-4.svg",
        },
    ];

    return (
        <div className='px-10 py-15 [@media(min-width:1400px)]:px-24 bg-[#212e44]'>
            <div>
                <h2 className='text-center text-4xl font-superbold text-white'>Join Our Industry Leading Customers</h2>
            </div>

            <div className='flex gap-10 flex-wrap justify-center pt-10'>
                {logos.map((logo, idx)=>(
                    <div>
                        <img src={logo.logo} alt={logo.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrustBar