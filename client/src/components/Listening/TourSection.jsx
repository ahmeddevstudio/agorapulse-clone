import React from 'react'

const TourSection = () => {
    return (
        <div className='px-4 min-[1400px]:px-24 py-15 flex flex-col items-center'>
            <div className="flex flex-col items-center gap-4 text-center text-[#212e44]">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight [-webkit-text-stroke:1.5px]">
                    See Listening in action
                </h1>

                <p className="text-center font-medium">
                    Click through a real search at your own pace. If you want the version with your own brand and competitors in it, book a demo.
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl">
                <iframe
                    src="https://app.guideflow.com/embed/dr9v7q2fnp"
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