import { Check } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='px-10 [@media(min-width:1400px)]:px-24 py-15 bg-[#212e44] grid grid-cols-1 lg:grid-cols-12 gap-20 items-center'>
            <div className='lg:col-span-7'>
                <div>
                    <h1 className='text-white text-5xl md:text-6xl font-superbold'>Having trouble keeping up with <span className='text-[#ff6726]'>social media?</span></h1>
                    <h3 className='pt-5 text-white text-3xl md:text-4xl font-black'>Request your personalized demo today</h3>
                </div>

                <div className='pt-10'>
                    <ul className='flex flex-col gap-4 text-white'>
                        <li className='flex gap-2'>
                            <div className='bg-[#ff6726] rounded-full h-fit p-0.5 flex items-center justify-center'>
                                <Check size={16} />
                            </div>
                            <p className='text-lg font-medium'>Let us assess your social strategy 1:1</p>
                        </li>

                        <li className='flex gap-2'>
                            <div className='bg-[#ff6726] rounded-full h-fit p-0.5 flex items-center justify-center'>
                                <Check size={16} />
                            </div>
                            <p className='text-lg font-medium'>Match you with one of our social media experts</p>
                        </li>

                        <li className='flex gap-2'>
                            <div className='bg-[#ff6726] rounded-full h-fit p-0.5 flex items-center justify-center'>
                                <Check size={16} />
                            </div>
                            <p className='text-lg font-medium'>Get a personalized walkthrough - no obligations - customized just for you</p>
                        </li>
                    </ul>
                </div>

                <div className='pt-10'>
                    <p className='text-lg font-medium text-white'>Let's simplify your social media management together!</p>
                </div>
            </div>

            <div className='lg:col-span-5'>
                <div className='bg-white p-10 rounded-lg'>
                    <form action="#">
                        <div className='flex flex-col gap-4'>
                            <label htmlFor="email" className='text-[#212e44] text-lg'>Email<span className='text-red-500'>*</span></label>
                            <input type="text" name="email" id="email" className='border py-2 pl-5' required/>
                        </div>

                        <div className='pt-10 flex justify-end'>
                            <button className='bg-[#425b76] text-white py-3 px-6 font-bold rounded-md cursor-pointer'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero