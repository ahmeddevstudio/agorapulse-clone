import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='px-16 lg:px-32 py-15 nunito-sans bg-no-repeat bg-contain' style={{'backgroundImage': 'url("https://www.agorapulse.com/wp-content/themes/theme/img/hero-engage.png")', 'backgroundPosition': '100% 100%'}}>
            <div className='max-w-xl'>
                <div className='text-[#212e44] text-6xl font-superbold'>
                    <h1>Whoops!</h1>
                    <h2>404 Page not <span className='text-[#ff6726]'>found</span></h2>
                </div>

                <div className='pt-10'>
                    <p className='text-[#212e44] text-lg font-medium'>We couldn't find the page you were looking for. Maybe the link to the page got outdated or moved somewhere else.</p>
                </div>

                <Link to={'/'} onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>
                    <button className='mt-10 flex items-center text-xl text-[#ff6726] gap-2 bg-white rounded-full shadow-[0_19px_40px_-10px_#ffe0d2] py-3 px-5 font-extrabold cursor-pointer hover:bg-[#ff6726] hover:text-white transition-all duration-300'>Go back <ArrowRight /></button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound