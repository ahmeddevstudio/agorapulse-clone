import React, { useRef } from 'react'
import { motion } from 'motion/react'

const TourSection = () => {
    const videoRef = useRef(null)

    return (
        <div className="px-4 min-[1400px]:px-24 py-15 flex flex-col items-center gap-8">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 text-center text-[#021a41]">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Explore Agorapulse - At Your Own Pace
                </h1>

                <p className="text-center">
                    Dive into Agorapulse's top-rated social media management
                    platform and see how you can work more efficiently, stay
                    aligned as a team, and deliver better results from social.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl">
                <iframe
                    src="https://app.guideflow.com/embed/r3560g0tpv"
                    title="Explore Agorapulse"
                    allow="fullscreen"
                    className="block w-full h-112.5 sm:h-150 lg:h-187.5 border-0"
                />
            </motion.div>
        </div>
    )
}

export default TourSection