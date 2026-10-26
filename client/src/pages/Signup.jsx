import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

    const images = [
        {
            title: "TikTok Marketing",
            src: "https://app.agorapulse.com/assets/img/connect/signup/footer-tiktok.svg",
        },
        {
            title: "Meta Marketing",
            src: "https://app.agorapulse.com/assets/img/connect/signup/footer-meta.svg",
        },
        {
            title: "LinkedIn Marketing",
            src: "https://app.agorapulse.com/assets/img/connect/signup/footer-linkedin.svg",
        },
        {
            title: "AWS Partner",
            src: "https://app.agorapulse.com/assets/img/connect/signup/aws.svg",
        },
        {
            title: "AICPA",
            src: "https://app.agorapulse.com/assets/img/connect/signup/aicpa.png",
        },
        {
            title: "Security Audit",
            src: "https://app.agorapulse.com/assets/img/connect/signup/security-audit.png",
        },
        {
            title: "ISO 27001",
            src: "https://app.agorapulse.com/assets/img/connect/signup/iso27001.svg",
        },
    ];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 nunito-sans'>
            <div className='lg:col-span-8 px-4 [@media(min-width:1400px)]:px-24 py-5 bg-[#fff9f4] lg:min-h-screen'>
                <div className='text-center text-[#354563]'>
                    <h1 className='text-3xl font-black'>Drive <span className='text-[#ff6726]'>real impact</span> on social media.</h1>
                    <p className='pt-1 font-bold'>Measure and drive real business impact from your social campaign—all in one platform</p>
                </div>

                <div className='pt-3 flex justify-center'>
                    <img src="https://app.agorapulse.com/assets/img/connect/signup/sign-up.svg" alt="" className='h-auto' />
                </div>

                <div className='flex flex-wrap justify-center gap-10'>
                    {images.map((image) => (
                        <div key={image.title}>
                            <img src={image.src} alt={image.title} className='h-15 w-15 object-contain' />
                        </div>
                    ))}
                </div>
            </div>

            <div className='lg:col-span-4 px-10 [@media(min-width:1400px)]:px-24 py-5 lg:min-h-screen'>
                <form action="#">
                    <div className='flex flex-col items-center text-[#354563]'>
                        <h2 className='text-2xl font-black'>Welcome aboard 👋</h2>
                        <p className='font-bold'>Try us for free. No credit card needed.</p>
                    </div>

                    <div className='pt-5 flex flex-col gap-5 items-center'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="email" className='font-bold text-[#354563] text-sm'>Business email</label>
                            <input type="email" name="email" id="email" placeholder='name@email.com' className='border border-[#D6DAE0] rounded-md pl-3 p-1 outline-none text-[#354563] focus:border-[#178dfe] placeholder:font-medium placeholder:text-sm text-sm font-medium' required />
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="confirm-email" className='font-bold text-[#354563] text-sm'>Confirm email</label>
                            <input type="email" name="confirm-email" id="confirm-email" placeholder='name@email.com' className='border border-[#D6DAE0] rounded-md pl-3 p-1 outline-none text-[#354563] focus:border-[#178dfe] placeholder:font-medium placeholder:text-sm text-sm font-medium' required />
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="password" className='font-bold text-[#354563] text-sm'>Password</label>
                            <input type="password" name="password" id="password" placeholder='********' className='border border-[#D6DAE0] rounded-md pl-3 p-1 outline-none text-[#354563] focus:border-[#178dfe] placeholder:font-medium placeholder:text-sm text-sm font-medium' required />
                        </div>
                    </div>

                    <div className='pt-10'>
                        <p className='text-xs font-semibold text-[#354563]'>By clicking on “Sign up”, I agree to Agorapulse's <span className='text-[#178dfe] underline'>Terms of Service</span> and acknowledge its <span className='text-[#178dfe] underline'>Privacy policy.</span></p>
                    </div>

                    <div className='pt-10 flex justify-center'>
                        <button className='bg-[#ff6726] w-full py-2 rounded-md text-white font-bold text-sm cursor-pointer hover:bg-[#FF7E46]'>Sign up</button>
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

                    <div className='pt-8 text-[#354563]'>
                        <p className='text-sm font-black'>Already have an account? <Link to={'/log-in'} onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })} className='text-[#178dfe]'>Log in</Link></p>
                        <p className='text-xs pt-2 font-semibold'>This site is protected by reCAPTCHA and the Google's <span className='text-[#178dfe] underline'>Privacy policy</span> and <span className='text-[#178dfe] underline'>Terms of service</span> apply.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup