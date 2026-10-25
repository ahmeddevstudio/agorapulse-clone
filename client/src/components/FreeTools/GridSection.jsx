import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const GridSection = ({ title, subTitle, desc, CTA, btn, to, img, order }) => {
    return (
        <div className='px-15 [@media(min-width:1400px)]:px-30 py-15 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
            <div className={`text-[#212e44] max-w-lg ${order ? 'lg:order-1' : ''}`}>
                <div>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <h4 className='text-lg pt-3 italic font-medium'>{subTitle}</h4>
                </div>

                <div className='pt-8'>
                    <p className='text-lg font-medium'>{desc}</p>
                    <p className='pt-5 text-lg font-medium'>{CTA}</p>
                </div>

                <div>
                    <Link to={to} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                        <button className='pt-5 cursor-pointer text-[#ff6726] font-black flex items-center gap-3'>{btn} <ArrowRight size={18}/></button>
                    </Link>
                </div>
            </div>

            <div>
                <img src={img} alt="" className='h-auto'/>
            </div>
        </div>
    )
}

export default GridSection