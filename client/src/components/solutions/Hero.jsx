import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ mainTitle1, mainTitle2, span, desc, image }) => {
    return (
        <div className='px-15 [@media(min-width:1400px)]:px-30 py-15 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='text-[#212e44]'>
                <h1 className='text-4xl lg:text-6xl font-superbold leading-10 lg:leading-15'>{mainTitle1} <span className='text-[#ff6726]'>{span}</span> {mainTitle2}</h1>
                <p className='pt-5 font-medium'>{desc}</p>

                <div className='pt-10'>
                    <Link to={'/contact'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                        <button className='flex items-center gap-2 bg-[#ff6726] py-4 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>Contact us <ArrowRight size={18} /></button>
                    </Link>

                    <Link to={'/demo'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                        <p className='pt-5 underline text-sm text-[#212e44]'>Watch a free demo of Agorapulse</p>
                    </Link>
                </div>
            </div>

            <div className='flex flex-col items-center lg:items-start'>
                <img src={image} alt="" className='h-70 lg:h-110' />
            </div>
        </div>
    )
}

export default Hero