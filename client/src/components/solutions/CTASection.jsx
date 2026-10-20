import { ArrowRight } from 'lucide-react'
import React from 'react'

const CTASection = ({ mainTitle1, span, mainTitle2, image1, title1, desc1, btn1, image2, title2, desc2, btn2 }) => {

    const CTAs = [
        {
            image: image1,
            title: title1,
            desc: desc1,
            btn: btn1
        },
        {
            image: image2,
            title: title2,
            desc: desc2,
            btn: btn2
        },
    ]

    return (
        <div className='px-5 md:px-15 [@media(min-width:1400px)]:px-30 py-15 bg-contain' style={{'backgroundImage': 'url("https://www.agorapulse.com/assets/hv2-feature/pattern-orange-left.svg")'}}>
            <div>
                <h2 className='text-center text-[#212e44] text-3xl md:text-5xl font-superbold'>{mainTitle1} <span className='text-[#ff6726]'>{span}</span> {mainTitle2}</h2>
            </div>

            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {CTAs.map((cta, idx) => (
                    <div key={idx} className='bg-white shadow-[0_0_40px_0_rgba(235,235,237,.4)] border border-[#858fa133] rounded-lg p-11'>
                        <div className='h-15'>
                            <img src={cta.image} alt="" className='h-full' />
                        </div>

                        <div className='pt-10'>
                            <h4 className='text-[#212e44] text-2xl font-extrabold'>{cta.title}</h4>
                            <p className='pt-5 text-[#212e44] text-lg font-medium'>{cta.desc}</p>
                        </div>

                        <div className='pt-10'>
                            <button className='flex items-center gap-2 bg-transparent py-3 px-4 rounded-lg text-[#ff6726] font-extrabold cursor-pointer border border-[#ff6726] hover:bg-[#ff6726] hover:text-white hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>{cta.btn} <ArrowRight size={18} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CTASection