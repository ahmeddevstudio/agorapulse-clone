import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const SocialSection = ({ mainTitle1, mainTitle2, span }) => {
    return (
        <div className='px-6 md:px-15 [@media(min-width:1400px)]:px-30 py-15'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className='mb-12'>
                <h2 className='text-center text-[#212e44] text-3xl md:text-5xl font-superbold'>
                    {mainTitle1} <span className='text-[#ff6726]'>{span}</span> <div>{mainTitle2}</div>
                </h2>
            </motion.div>

            <div className='pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <img src="https://www.agorapulse.com/assets/agencies/funnel-by-profile-1.png" alt="" className='h-auto' />
                </div>

                <div className='flex flex-col items-center lg:items-start'>
                    <h2 className='text-[#212e44] text-3xl md:text-5xl font-superbold'>
                        Measure the real <span className='text-[#ff6726]'>business impact</span> of social campaigns
                    </h2>
                    <p className='py-4 text-base md:text-lg font-medium'>Determine the impact of social media, best source by social network, best traffic/conversion event from social with Agorapulse's Social Media ROI.</p>

                    <Link to={'/roi'} onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}>
                        <button className='flex items-center gap-2 bg-[#ff6726] text-white px-4 py-3 rounded-lg font-extrabold cursor-pointer border border-transparent hover:border-[#ff6726] hover:bg-transparent hover:text-[#ff6726] hover:gap-3 transition-all duration-300'>Learn More <ArrowRight size={18} /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SocialSection