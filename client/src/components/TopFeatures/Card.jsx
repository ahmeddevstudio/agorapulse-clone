import React from 'react'
import { motion } from 'motion/react'

const Card = ({ title, icon1, icon2, icon3, desc1, desc2, desc3, PMColor, BgColor, shadowColor }) => {

    const cards = [
        {
            Icon: icon1,
            desc: desc1,
            duration: 0.5,
            y: 30
        },
        {
            Icon: icon2,
            desc: desc2,
            duration: 0.8,
            y: 50
        },
        {
            Icon: icon3,
            desc: desc3,
            duration: 1,
            y: 70
        },
    ]

    return (
        <div className='nunito-sans px-4 [@media(min-width:1400px)]:px-24 py-15 text-[#212e44]'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className='text-center'>
                <h2 className='text-4xl font-black [-webkit-text-stroke:1.5px]'>{title}</h2>
            </motion.div>

            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {cards.map((card, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: card.y }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: card.duration, ease: "easeOut" }}
                        viewport={{ once: true }}
                        key={idx} className={`bg-white p-8 flex flex-col items-center h-50 justify-between rounded-2xl`} style={{ 'boxShadow': `0 19px 40px 0 ${shadowColor}` }}>
                        <p className={`p-2 rounded-xl`} style={{ 'backgroundColor': `${BgColor}`, 'color': `${PMColor}` }}>{card.Icon}</p>
                        <p className='text-center'>{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Card