import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = ({ title, desc, title1, title2, title3, title4, icon1, icon2, icon3, icon4, desc1, desc2, desc3, desc4, mainImg, btn, to, order }) => {

    const twoColumns = [
        {
            icon: icon1,
            title: title1,
            desc: desc1,
        },
        {
            icon: icon2,
            title: title2,
            desc: desc2,
        },
        {
            icon: icon3,
            title: title3,
            desc: desc3,
        },
        {
            icon: icon4,
            title: title4,
            desc: desc4,
        },
    ]

    return (
        <div className='px-15 [@media(min-width:1400px)]:px-30 py-15'>
            <div className='text-[#212e44] text-center'>
                <h2 className='text-4xl md:text-5xl font-superbold'>{title}</h2>
                <p className='pt-10 text-lg font-medium'>{desc}</p>
            </div>

            <div className='pt-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

                    <div className={`${order ? 'lg:order-0': 'lg:order-1'}`}>
                        <img src={mainImg} alt="" className='h-auto' />
                    </div>

                    <div className='flex flex-col gap-10'>
                        {twoColumns.map((item, idx) => (
                            <div key={idx}>
                                <div className='flex gap-3'>
                                    <img src={item.icon} alt="" className='h-7.25 w-8 lg:w-18 lg:h-18 object-cover' />
                                    <div>
                                        <h4 className='text-[#ff6726] font-extrabold text-xl'>{item.title}</h4>
                                        <p className='pt-5 leading-[20.8px] text-[#212e44cc] font-medium'>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className='flex justify-center lg:justify-end'>
                            <Link to={to} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                                <button className='flex items-center gap-2 px-4 py-3 border-[1.5px] border-[#ff6726] rounded-lg text-[#ff6726] font-extrabold cursor-pointer hover:bg-[#ff6726] hover:border-transparent hover:text-white transition-all justify-center duration-300 hover:gap-3'>
                                    {btn}
                                    <ArrowRight size={18} strokeWidth={2.5}/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTASection