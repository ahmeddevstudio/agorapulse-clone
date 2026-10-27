import { ArrowRight, BriefcaseBusiness, Headset } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='nunito-sans px-10 [@media(min-width:1400px)]:px-24 py-15 grid grid-cols-1 lg:grid-cols-2 gap-20'>
        <div>
            <div className='text-[#212e44]'>
                <h1 className='text-4xl md:text-5xl font-superbold'>Get in Touch with <span className='text-[#ff6726]'>Agorapulse</span></h1>
                <p className='pt-10 text-lg font-medium'>Discover how Agorapulse can transform your social media management. Speak with our sales team to explore solutions tailored to your needs.</p>
            </div>

            <div className='pt-20'>
                <h2 className='text-4xl font-black text-[#212e44]'>We're here to help</h2>

                <div className='bg-[#ff6726] px-7.5 rounded-xl mt-10'>
                    <div className='text-white py-7.5'>
                        <img src="https://www.agorapulse.com/assets/contact-demo/demo.svg" alt="" />
                        <h4 className='pt-5 text-2xl font-black'>Request a Demo</h4>
                        <p className='pt-5 font-medium'>See Agorapulse in action! Book a personalized demo with our experts and unlock the full potential of our platform.</p>

                        <Link to={'/demo'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                            <button className='flex items-center mt-10 bg-white text-[#ff6726] px-4 py-3 rounded-xl font-extrabold gap-2 cursor-pointer hover:bg-[#ff6726] hover:text-white hover:gap-3 transition-all duration-300'>Schedule a demo <ArrowRight size={18} strokeWidth={2.5}/></button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-10'>
                <div className='text-[#212e44]'>
                    <Headset size={35} color='#212e44'/>
                    <h4 className='text-2xl font-black pt-5'>Customer Support</h4>
                    <p className='pt-6 font-medium'>Our helpful, knowledgeable, and friendly customer support team is on hand to offer help.</p>

                    <button className='flex items-center gap-2 text-[#ff6726] border border-[#ff6726] py-3 px-4 rounded-lg mt-5 font-extrabold cursor-pointer'>Contact Support <ArrowRight size={18} strokeWidth={2.5}/></button>
                </div>

                <div className='text-[#212e44]'>
                    <BriefcaseBusiness size={35} color='#212e44'/>
                    <h4 className='text-2xl font-black pt-5'>Careers</h4>
                    <p className='pt-6 font-medium'>Working at Agorapulse means flexible working, personal development, and a strong community-focused culture, whether you're remote or in the office.</p>

                    <button className='flex items-center gap-2 text-[#ff6726] border border-[#ff6726] py-3 px-4 rounded-lg mt-5 font-extrabold cursor-pointer'>See Open Roles <ArrowRight size={18} strokeWidth={2.5}/></button>
                </div>
            </div>
        </div>

        <div>
            <div>
                <p className='text-lg text-[#ff6726] font-extrabold'>Please add your information here, and we'll get back to you ASAP.</p>
            </div>

            <div className='bg-[#f9f9fa] p-10 mt-10 rounded-xl flex flex-col justify-center'>
                <form action="#" className='flex flex-col gap-3'>
                    <label htmlFor="email" className='text-lg text-[#425b76]'>Business Email<span className='text-red-500'>*</span></label>
                    <input type="email" name="email" id="email" className='py-3 px-5 border rounded-lg text-[#212d3a] bg-[#f5f8fa]'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact