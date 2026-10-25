import React from 'react'

const Webinar = () => {
    return (
        <div className='px-5 md:px-15 [@media(min-width:1400px)]:px-30 py-15'>
            <div className='bg-[linear-gradient(322.82deg,rgba(122,102,240,.3),rgba(131,113,241,0)_46.63%)] px-8 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <div>
                        <p className='font-extrabold text-[#7a66f0]'>Live Webinar</p>
                        <h2 className='pt-10 text-5xl text-[#212e44] font-superbold'>Social Listening in Action</h2>
                        <h3 className='text-[#212e4499] font-superbold text-2xl pt-3'>Featuring</h3>
                        <h3 className='pt-3 text-4xl text-[#212e44] font-superbold'>Axel Vanacker, Jacob Hilpertshauser & Connor Aylward</h3>
                    </div>

                    <div>
                        <h3 className='text-[#212e4499] font-superbold text-2xl pt-3'>Upcoming</h3>
                        <h3 className='text-[#212e4499] font-superbold text-2xl'>Oct. 22, 2026, 10:00 am ET | 4:00 pm CET</h3>
                    </div>

                    <div className='pt-10'>
                        <img src="https://social.agorapulse.com/hs-fs/hubfs/Group%205.png?width=144&height=27&name=Group%205.png" alt="" />
                    </div>
                </div>

                <div className='bg-no-repeat bg-cover' style={{'backgroundImage': 'url("https://social.agorapulse.com/hubfs/events/bg-author-1.png")'}}>
                    <img src="https://static1.agorapulse.com/events/wp-content/uploads/sites/11/2026/10/Social-Listening-EN-Webinar.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Webinar