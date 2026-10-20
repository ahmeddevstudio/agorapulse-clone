import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const PricingSection = () => {
    return (
        <div className='px-15 [@media(min-width:1400px)]:px-30 py-15 relative'>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl lg:text-5xl text-center max-w-2xl font-superbold text-[#212e44]'>Discover pricing that scales with <span className='text-[#ff6726]'>your agency</span></h2>

                <p className='max-w-2xl text-center pt-5 text-xl font-medium text-[#212e44]'>We offer an unbeatable price for the most complete solution for agencies. Our pricing helps you to easily calculate the cost of adding a new client, so you can factor that into your pricing. No surprises when billed! Just clear, honest pricing.</p>

                <Link to={'/pricing'}>
                    <button className='mt-10 flex items-center gap-2 bg-[#ff6726] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>Discover plans <ArrowRight size={18} /></button>
                </Link>
            </div>

            <div className='hidden lg:block'>
                <div className='absolute top-[37%] left-[4%] shadow-[0_5.6px_28px_0_rgba(52,69,99,.1)] bg-white p-[17px_13px] rounded-md'>
                    <img src="https://www.agorapulse.com/assets/hv2-agencies/iz1.svg" alt="" />
                </div>

                <div className='absolute bottom-[3%] left-[9.5%] shadow-[0_5.6px_28px_0_rgba(52,69,99,.1)] bg-white p-[17px_13px] rounded-md'>
                    <img src="https://www.agorapulse.com/assets/hv2-agencies/iz2.svg" alt="" />
                </div>

                <div className='absolute bottom-[17%] left-[28%] shadow-[0_5.6px_28px_0_rgba(52,69,99,.1)] bg-white rounded-md'>
                    <img src="https://www.agorapulse.com/assets/hv2-agencies/iz3.svg" alt="" />
                </div>

                <div className='absolute bottom-[24%] right-[19%] shadow-[0_5.6px_28px_0_rgba(52,69,99,.1)] bg-white p-1 rounded-md'>
                    <img src="https://www.agorapulse.com/assets/hv2-agencies/iz4.svg" alt="" />
                </div>

                <div className='absolute top-[40%] right-[0%] shadow-[0_5.6px_28px_0_rgba(52,69,99,.1)] bg-white p-2 rounded-md'>
                    <img src="https://www.agorapulse.com/assets/hv2-agencies/iz5.svg" alt="" />
                </div>

                <div className='absolute bottom-[8%] right-[6%] shadow-[0_5.6px_28px_0_rgba(52,69,99,.1)] bg-white p-2 rounded-md'>
                    <img src="https://www.agorapulse.com/assets/hv2-agencies/iz6.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PricingSection