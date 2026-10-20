import { ArrowRight } from 'lucide-react'
import React from 'react'

const VideoSection = () => {
    return (
        <div className='px-15 [@media(min-width:1400px)]:px-30 py-15 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div>
                <iframe
                    src="https://www.youtube.com/embed/sMzfo7p-pAk?si=3Kgxdj0zHzYxmNs8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="aspect-video rounded-4xl w-auto"
                />
            </div>

            <div>
                <h3 className='text-xl lg:text-3xl font-extrabold text-[#212e44]'>“I actually can't say enough great things about the reporting with Agorapulse. I feel like that is my job security every month.”</h3>
                <p className='text-lg lg:text-xl text-[#ff6726] pt-3 font-extrabold'>Erinn Giefer</p>

                <button className='mt-5 flex items-center gap-2 bg-[#ff6726] py-3 px-5 rounded-lg text-white font-extrabold cursor-pointer border border-transparent hover:bg-transparent hover:text-[#ff6726] hover:border-[#ff6726] transition-all duration-300 hover:gap-3'>More Case Studies <ArrowRight size={18} /></button>
            </div>
        </div>
    )
}

export default VideoSection