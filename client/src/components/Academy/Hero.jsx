import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='px-5 lg:px-15 [@media(min-width:1400px)]:px-30 py-15'>
        <div className='bg-[#ffefe9] rounded-xl p-5 md:p-10 lg:p-20 grid grid-cols-1 lg:grid-cols-12 items-center gap-10'>
            <div className='lg:col-span-8 flex flex-col items-center lg:block'>
                <div className='bg-white py-2 px-5 w-fit rounded-full shadow-[0_4px_40px_0_rgba(255,103,38,.1019607843)]'>
                    <p className='font-bold text-[#ff6726] text-center lg:text-left'>Agorapulse Academy</p>
                </div>

                <div className='pt-5 text-center lg:text-left'>
                    <h1 className='text-5xl md:text-6xl font-superbold text-[#212e44]'><span className='text-[#ff6726]'>Strategic Social</span> Starts Here</h1>
                    <p className='pt-5 text-[#212e44] font-medium'>Agorapulse Academy helps you get the most out of every feature, unlock smarter workflows, and deliver impactful results.</p>
                </div>

                <div className='pt-10'>
                    <Link to={'/signup'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                        <button className='flex items-center gap-2 bg-[#ff6726] text-white font-extrabold py-3 px-5 rounded-xl cursor-pointer border border-transparent hover:bg-white hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>Start learning now <ArrowRight size={20}/></button>
                    </Link>
                </div>
            </div>

            <div className='lg:col-span-4 flex justify-center lg:block'>
                <img src="https://www.agorapulse.com/assets/academy/certified.png" alt="" className='w-auto h-auto md:w-80'/>
            </div>
        </div>
    </div>
  )
}

export default Hero