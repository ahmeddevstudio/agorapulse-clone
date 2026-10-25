import React from 'react'
import { Link } from 'react-router-dom'

const VideoSection = () => {
    return (
        <div className='px-5 md:px-15 [@media(min-width:1400px)]:px-30 py-15 flex flex-col items-center'>
            <div className='text-center text-[#212e44] max-w-2xl'>
                <h2 className='text-3xl font-black'>Turn Powerful Features Into <span className='text-[#ff6726]'>Real Results</span></h2>
                <p className='pt-5 font-medium'>Whether you're managing a single brand or juggling multiple clients, Agorapulse Academy teaches you how to use the platform more effectively and strategically.</p>
            </div>

            <div className='mt-10 md:border-10 border-white rounded-2xl shadow-[0_4px_40px_0_rgba(255,103,38,.1019607843)]'>
                <iframe src="https://www.youtube.com/embed/daiB6Fc7gGI?si=Dy0pASy6lM-8dgsz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-2xl md:w-176.75 md:h-99.25'></iframe>
            </div>

            <div className='mt-20 bg-[#f5f5f7] p-8 rounded-lg'>
                <p className='text-[#212e44] text-2xl font-bold'>You'll need access to the app to complete the certification. Not a customer? <Link to={'/signup'} className='text-[#ff6726] underline' onClick={()=>window.scrollTo({'top': 0, 'left': 0, 'behavior': 'smooth'})}>Start your free trial now to get started.</Link></p>
            </div>
        </div>
    )
}

export default VideoSection