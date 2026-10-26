import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ tag, title, desc, bgImage, gradient = true }) => {
    return (
        <div className="px-4 [@media(min-width:1400px)]:px-24 py-15 min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center" style={{
            backgroundImage: gradient
                ? `linear-gradient(270deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.85) 89.9%), url(${bgImage})`
                : `url(${bgImage})`
        }} >
            <div className='flex flex-col items-center text-white max-w-4xl'>
                <p className='text-lg font-medium text-center'>{tag}</p>
                <h1 className='text-4xl lg:text-6xl text-center pt-5 font-superbold'>{title}</h1>
                <p className='pt-5 text-center'>{desc}</p>

                <div className='pt-10 flex flex-col md:flex-row gap-3 items-center'>
                    <Link to={'/signup'} onClick={()=>window.scrollTo({'top':0, 'left': 0, 'behavior': 'smooth'})}>
                        <button className='flex items-center gap-2 bg-white py-3 px-5 rounded-lg text-[#3a9efe] font-extrabold cursor-pointer border border-[#3a9efe] hover:bg-[#3a9efe] hover:text-white hover:border-transparent transition-all duration-300 hover:gap-3'>Free trail <ArrowRight size={18} /></button>
                    </Link>

                    <Link to={'/demo'} onClick={()=>window.scrollTo({'top':0, 'left': 0, 'behavior': 'smooth'})}>
                        <button className='flex items-center gap-2 bg-[#3a9efe] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-white hover:text-[#3a9efe] hover:border-[#3a9efe] transition-all duration-300 hover:gap-3'>Request a demo <ArrowRight size={18} /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero