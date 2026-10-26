import React, { useState } from 'react'
import { motion } from 'motion/react'

const SocialInteractionsSection = ({ title, threeDIcon1, title1, desc1, image1, threeDIcon2, title2, desc2, image2, threeDIcon3, title3, desc3, image3, hoverBgColor, hoverTextColor }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const interactions = [
        {
            threeDIcon: threeDIcon1,
            title: title1,
            desc: desc1,
            image: image1
        },
        {
            threeDIcon: threeDIcon2,
            title: title2,
            desc: desc2,
            image: image2
        },
        {
            threeDIcon: threeDIcon3,
            title: title3,
            desc: desc3,
            image: image3
        },
    ]

    return (
        <div className='nunito-sans px-4 [@media(min-width:1400px)]:px-24 py-15'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className='text-center mb-12'>
                <h2 className='text-4xl font-black [-webkit-text-stroke:1.5px] text-[#212e44]'>{title}</h2>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

                <div className='flex flex-col gap-6'>
                    {interactions.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className='py-6 px-3 rounded transition-all duration-300 cursor-pointer flex gap-4 items-start' style={{ background: isActive ? hoverBgColor : '#f9f9fa' }}>
                                <div className='shrink-0'>
                                    <img src={item.threeDIcon} alt="" className='h-14 w-16' />
                                </div>
                                <div>
                                    <h3
                                        style={{ color: isActive ? hoverTextColor : '#212e44' }}
                                        className="text-xl font-bold mb-2 transition-colors"
                                    >
                                        {item.title}
                                    </h3>
                                    <p className='text-[#212e44cc] leading-relaxed'>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='relative w-full overflow-hidden p-2'>
                    <img
                        src={interactions[activeIndex]?.image}
                        alt={interactions[activeIndex]?.title}
                        className='w-full h-auto rounded-xl transition-all duration-500 ease-in-out object-cover'
                    />
                </div>

            </div>
        </div>
    )
}

export default SocialInteractionsSection