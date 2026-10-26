import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Cards = ({ title, span, image1, image2, image3, image4, image5, image6, title1, title2, title3, title4, title5, title6, desc1, desc2, desc3, desc4, desc5, desc6 }) => {

  const cards = [
    { image: image1, title: title1, desc: desc1 },
    { image: image2, title: title2, desc: desc2 },
    { image: image3, title: title3, desc: desc3 },
    { image: image4, title: title4, desc: desc4 },
    { image: image5, title: title5, desc: desc5 },
    { image: image6, title: title6, desc: desc6 },
  ]

  return (
    <div className='px-15 [@media(min-width:1400px)]:px-30 py-20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className='text-center text-[#212e44] text-4xl md:text-5xl font-black'>
          {title} <span className='text-[#ff6726]'>{span}</span>
        </h2>
      </motion.div>

      <div className='pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {cards.map((card, idx) => (
          <motion.div key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.2 }}
            
            viewport={{ once: true }}
            className='bg-white shadow-[0_19px_40px_0_rgba(255,224,210,.2)] p-8 rounded-lg flex flex-col items-center'>
            <div className='flex flex-col items-center justify-start'>
              <p>{card.image}</p>
            </div>
            <div>
              <h4 className='text-xl pt-3 text-center font-extrabold text-[#212e44]'>{card.title}</h4>
              <p className='text-[#212e44] pt-5 text-center font-medium text-base'>{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='pt-10 flex justify-center'>
        <Link to={'/demo'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
          <button className='flex items-center gap-2 bg-[#ff6726] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>Book a Demo <ArrowRight size={18} /></button>
        </Link>
      </div>
    </div>
  )
}

export default Cards