import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 nunito-sans'>
            <div className='lg:col-span-8 px-4 [@media(min-width:1400px)]:px-24 py-5 bg-[#f9f9f2] lg:min-h-screen flex flex-col items-center'>
                <div className='text-center max-w-lg'>
                    <p className='text-[#ff6726] font-bold'>New · Archie</p>
                    <h1 className='text-[#212e44] pt-3 text-2xl font-bold'>Repurpose your best content into <span className='bg-[#f7ffc5] w-fit'>engaging social posts</span></h1>
                    <p className='text-[#5d6a82] pt-5 text-sm font-semibold'>Drop a PDF, a video, article or a link. Archie pulls the strongest ideas and drafts them into on-brand, platform-native posts.</p>
                    <p className='pt-5 text-sm text-[#344563] font-extrabold'>Try it for free now. <span className='text-[#0e72d6] font-medium underline'>Click here to learn more.</span></p>
                </div>

                <div className="w-full max-w-md pt-20">
                    <img
                        src="https://app.agorapulse.com/assets/img/connect/archie-animation.svg"
                        alt="Archie animation"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className='lg:col-span-4 px-20 [@media(min-width:1400px)]:px-30 py-5 lg:min-h-screen flex flex-col justify-center'>
                <form action="#">
                    <div>
                        <h2 className='text-[#344563] text-2xl font-extrabold'>Log In</h2>
                    </div>

                    <div className='pt-5 flex flex-col gap-5'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="email" className='font-bold text-[#354563] text-sm'>Business email</label>
                            <input type="email" name="email" id="email" placeholder='name@email.com' className='border border-[#D6DAE0] rounded-md pl-3 p-1 outline-none text-[#354563] focus:border-[#178dfe] placeholder:font-medium placeholder:text-sm text-sm font-medium' required />
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="password" className='font-bold text-[#354563] text-sm'>Password</label>
                            <input type="password" name="password" id="password" placeholder='********' className='border border-[#D6DAE0] rounded-md pl-3 p-1 outline-none text-[#354563] focus:border-[#178dfe] placeholder:font-medium placeholder:text-sm text-sm font-medium' required />

                            <div className='flex justify-end'>
                                <p className='text-sm text-[#178dfe] font-bold cursor-pointer'>Forgot your password?</p>
                            </div>
                        </div>
                    </div>

                    <div className='pt-10 flex justify-center'>
                        <button className='bg-[#ff6726] w-full py-2 rounded-md text-white font-bold text-sm cursor-pointer hover:bg-[#FF7E46]'>Log In</button>
                    </div>

                    <div className="pt-5 flex items-center gap-3">
                        <div className="h-[0.1px] flex-1 bg-[#354563] opacity-30"></div>
                        <p className="text-sm text-[#5d6a82] font-black">or</p>
                        <div className="h-[0.1px] flex-1 bg-[#354563] opacity-30"></div>
                    </div>

                    <div className='pt-5 flex justify-center'>
                        <button className='text-[#5d6a82] font-bold text-sm border border-[#5d6a8250] hover:border-[#5d6a82] w-full py-2 rounded-md cursor-pointer flex items-center justify-center gap-3'>
                            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#EA4335" d="M8.5 2.969c1.106 0 2.097.381 2.878 1.125l2.14-2.14C12.219.743 10.523 0 8.5 0a7.5 7.5 0 0 0-6.7 4.131l2.494 1.935c.59-1.779 2.25-3.097 4.206-3.097"></path><path fill="#4285F4" d="M15.681 7.672c0-.49-.047-.966-.118-1.422H8.5v2.819h4.044a3.49 3.49 0 0 1-1.494 2.243l2.416 1.876c1.409-1.307 2.215-3.238 2.215-5.516"></path><path fill="#FBBC05" d="M4.29 8.934A4.6 4.6 0 0 1 4.054 7.5c0-.5.085-.981.238-1.434L1.797 4.13A7.5 7.5 0 0 0 1 7.5c0 1.212.288 2.356.8 3.369z"></path><path fill="#34A853" d="M8.5 15c2.025 0 3.728-.666 4.966-1.816L11.05 11.31c-.672.454-1.538.72-2.55.72-1.956 0-3.616-1.32-4.21-3.098l-2.493 1.935A7.5 7.5 0 0 0 8.5 15"></path></svg>
                            Sign up with Google</button>
                    </div>

                    <div className='pt-5 flex justify-center'>
                        <button className='text-[#5d6a82] font-bold text-sm border border-[#5d6a8250] hover:border-[#5d6a82] w-full py-2 rounded-md cursor-pointer flex items-center justify-center gap-3'>
                            <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 8.8a.8.8 0 0 1 .8.8v1.6a.8.8 0 0 1-1.6 0V9.6a.8.8 0 0 1 .8-.8"></path><path fill-rule="evenodd" d="M12 5.737v-.87a4.1 4.1 0 0 0-1.166-2.87A3.97 3.97 0 0 0 8 .8a3.97 3.97 0 0 0-2.834 1.197A4.1 4.1 0 0 0 4 4.867v.87A2.4 2.4 0 0 0 2.4 8v4.8a2.4 2.4 0 0 0 2.4 2.4h6.4a2.4 2.4 0 0 0 2.4-2.4V8A2.4 2.4 0 0 0 12 5.737M8 2.4c-.631 0-1.24.256-1.691.717a2.5 2.5 0 0 0-.709 1.75V5.6h4.8v-.733a2.5 2.5 0 0 0-.709-1.75A2.37 2.37 0 0 0 8 2.4m3.2 4.8H4.8A.8.8 0 0 0 4 8v4.8a.8.8 0 0 0 .8.8h6.4a.8.8 0 0 0 .8-.8V8a.8.8 0 0 0-.8-.8" clip-rule="evenodd"></path></svg>
                            Log In with SSO</button>
                    </div>

                    <div className='pt-8 text-[#354563]'>
                        <p className='text-sm font-black'>New to Agorapulse? <Link to={'/signup'} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })} className='text-[#178dfe]'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn