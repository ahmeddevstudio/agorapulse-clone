import { Download } from 'lucide-react';
import React from 'react'

const EBookSection = ({ image, tag, title, span, subtitle, desc, btn }) => {
    return (
        <div className='px-4 lg:pl-20 [@media(min-width:1400px)]:px-24 pt-15 bg-[#f9f9fa] grid grid-cols-1 lg:grid-cols-12 gap-5'>
            <div className='col-span-7 order-1 flex justify-center lg:block pt-10 lg:pt-0'>
                <img src={image} alt="" className='h-auto' />
            </div>

            <div className='col-span-5 lg:order-1 text-center lg:text-left'>
                <div className='flex justify-center lg:block'>
                    <p className='shadow-[0_10px_40px_0_rgba(255,103,38,.1098039216)] bg-white w-fit py-1 px-2 rounded-2xl text-2xl font-bold text-[#ff7e46]'>{tag}</p>
                </div>

                <div className='pt-6'>
                    <h3 className='text-4xl font-superbold text-[#212e44]'>{title} <span className='text-[#ff7e46]'>{span}</span></h3>
                    <h4 className='text-2xl text-[#212e44] pt-4 font-bold'>{subtitle}</h4>
                    <p className='pt-6 text-[#212e44] font-medium'>{desc}</p>
                </div>

                <div className='pt-10 flex justify-center lg:block'>
                    <button className='flex items-center gap-2 bg-[#ff6726] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300'><Download size={20} strokeWidth={2.5}/> Download free guide</button>
                </div>
            </div>
        </div>
    )
}

export default EBookSection;