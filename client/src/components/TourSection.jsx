import React, { useRef } from 'react'

const TourSection = () => {
    const videoRef = useRef(null)

    return (
        <div className="px-4 min-[1400px]:px-24 py-15 flex flex-col items-center gap-8">

            <div className="flex flex-col items-center gap-4 text-center text-[#021a41]">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Explore Agorapulse - At Your Own Pace
                </h1>

                <p className="text-center">
                    Dive into Agorapulse's top-rated social media management
                    platform and see how you can work more efficiently, stay
                    aligned as a team, and deliver better results from social.
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl">
                <iframe
                    src="https://app.guideflow.com/embed/r3560g0tpv"
                    title="Explore Agorapulse"
                    allow="fullscreen"
                    allowFullScreen
                    className="block w-full h-112.5 sm:h-150 lg:h-187.5 border-0"
                />
            </div>
        </div>
    )
}

export default TourSection