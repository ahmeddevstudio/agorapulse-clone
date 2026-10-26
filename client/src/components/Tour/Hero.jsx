import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="px-20 min-[1400px]:px-24 py-15 flex flex-col items-center gap-8">
            <div className='text-center text-[#212e44]'>
                <h1 className="text-4xl lg:text-6xl font-superbold">Explore Agorapulse - <span className='text-[#3a9efe]'>At Your Own Pace</span></h1>
                <p className="text-center pt-5 text-lg font-medium">
                    Dive into Agorapulse's top-rated social media management
                    platform and see how you can work more efficiently, stay
                    aligned as a team, and deliver better results from social.
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl">
                <iframe
                    src="https://app.guideflow.com/embed/r3560g0tpv"
                    title="Explore Agorapulse"
                    allow="fullscreen"
                    className="block w-full h-112.5 sm:h-150 lg:h-187.5 border-0"
                />
            </div>

            <div className='pt-20 text-4xl text-center flex flex-col items-center'>
                <h2 className='text-[#212e44] font-black'>Wondering what's next?</h2>
                <h3 className='text-[#3a9efe] pt-5 font-black'>Start a trial to unlock powerful features for yourself or book a personalized walkthrough.</h3>

                <div className='pt-10 flex flex-col md:flex-row gap-3'>
                    <Link to={'/signup'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                        <button className='text-lg flex items-center gap-2
                        text-[#3a9efe] border border-[#3a9efe] py-2 px-3 rounded-lg font-extrabold cursor-pointer hover:bg-[#3a9efe] hover:text-white hover:gap-3 transition-all duration-300 hover:border-transparent'>Start a trail <ArrowRight size={18}/></button>
                    </Link>

                    <Link to={'/demo'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                        <button className='text-lg flex items-center gap-2
                        text-white border border-transparent py-2 px-3 rounded-lg bg-[#3a9efe] font-extrabold cursor-pointer hover:bg-transparent hover:text-[#3a9efe] hover:border-[#3a9efe] hover:gap-3 transition-all duration-300'>Request a demo <ArrowRight size={18}/></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero