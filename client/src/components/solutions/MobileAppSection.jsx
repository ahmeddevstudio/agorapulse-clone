import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'

const MobileAppSection = () => {
    return (
        <div className='px-5 md:px-25 [@media(min-width:1400px)]:px-45 py-15 grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <img
                    src="https://www.agorapulse.com/assets/hv2-agencies/phone-3.png"
                    alt="Agorapulse mobile app"
                    className='w-auto h-auto object-contain'
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                className='flex flex-col items-center md:items-start'
            >
                <h2 className='text-[#212e44] text-3xl md:text-4xl lg:text-5xl font-superbold text-center md:text-left'>
                    Everything on the go!
                </h2>

                <p className='pt-3 text-[#212e44] text-lg font-medium text-center md:text-left'>
                    Our mobile app lets you publish and schedule content, manage your social inbox, oversee reports, and do much more on your Android or iOS device from anywhere.
                </p>

                <button className='mt-5 flex items-center gap-2 bg-[#ff6726] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>
                    Download our app <ArrowRight size={18} />
                </button>
            </motion.div>

        </div>
    )
}

export default MobileAppSection