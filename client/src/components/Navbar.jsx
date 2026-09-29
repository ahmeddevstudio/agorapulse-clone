import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            {/* DESKTOP NAVBAR */}
            <div className='lg:flex hidden items-center justify-between px-4 py-5 [@media(min-width:1400px)]:px-24 sticky top-0 z-999 bg-white'>
                <div className='flex gap-6 items-center'>
                    <Link to='/'>
                        <img
                            src={assets.agorapulse_logo}
                            alt='agorapulse-logo'
                            className='h-8'
                        />
                    </Link>

                    <ul className='flex gap-4 text-[#344563] text-[14px] font-semibold'>
                        <li>Top Features</li>
                        <li>Solutions</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>

                <div className='flex items-center gap-8'>
                    <button className='text-[#344563] font-semibold text-[14px] cursor-pointer'>
                        Log In
                    </button>

                    <div className='flex gap-3'>
                        <button className='flex items-center gap-3 px-4 py-2 border-[1.5px] border-[#f50] rounded-3xl text-[#f50] font-semibold text-[14px] cursor-pointer hover:bg-[#f7ffc5] transition-all'>
                            Try for free
                            <ArrowRight size={18} />
                        </button>

                        <button className='flex items-center gap-3 px-4 py-2 bg-[#f50] rounded-3xl text-[14px] text-white font-semibold hover:bg-[#f7ffc5] hover:text-black border-[1.5px] transition-all cursor-pointer'>
                            Schedule a demo
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/*  MOBILE NAVBAR  */}
            <div className='lg:hidden flex items-center justify-between px-6 py-5 sticky top-0 z-999 bg-white'>
                <Link to='/'>
                    <img
                        src={assets.agorapulse_logo}
                        alt='agorapulse-logo'
                        className='h-8'
                    />
                </Link>

                <button
                    onClick={() => setSidebarOpen(true)}
                    className='cursor-pointer'
                    aria-label='Open menu'
                >
                    <Menu size={24} />
                </button>
            </div>

            {/*  MOBILE SIDEBAR  */}

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className='lg:hidden fixed inset-0 bg-black/30 z-1000'
                />
            )}


            <div
                className={`lg:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-1001 shadow-xl transform transition-transform duration-300 ${
                    sidebarOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'
                }`}
            >

                <div className='flex items-center justify-between px-6 py-5 border-b border-gray-200'>
                    <img
                        src={assets.agorapulse_logo}
                        alt='agorapulse-logo'
                        className='h-8'
                    />

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className='cursor-pointer'
                        aria-label='Close menu'
                    >
                        <X size={24} />
                    </button>
                </div>


                <nav className='px-6 py-6'>
                    <ul className='flex flex-col text-[#344563] font-semibold text-[16px]'>
                        <li className='py-4 border-b border-gray-100'>
                            <Link
                                to='#'
                                onClick={() => setSidebarOpen(false)}
                            >
                                Top Features
                            </Link>
                        </li>

                        <li className='py-4 border-b border-gray-100'>
                            <Link
                                to='#'
                                onClick={() => setSidebarOpen(false)}
                            >
                                Solutions
                            </Link>
                        </li>

                        <li className='py-4 border-b border-gray-100'>
                            <Link
                                to='#'
                                onClick={() => setSidebarOpen(false)}
                            >
                                Pricing
                            </Link>
                        </li>

                        <li className='py-4 border-b border-gray-100'>
                            <Link
                                to='#'
                                onClick={() => setSidebarOpen(false)}
                            >
                                Resources
                            </Link>
                        </li>
                    </ul>

                    {/* Actions */}
                    <div className='flex flex-col gap-3 mt-8'>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className='w-full py-3 text-[#344563] font-semibold border border-gray-200 rounded-3xl cursor-pointer'
                        >
                            Log In
                        </button>

                        <button
                            onClick={() => setSidebarOpen(false)}
                            className='w-full flex justify-center items-center gap-3 px-4 py-3 border-[1.5px] border-[#f50] rounded-3xl text-[#f50] font-semibold cursor-pointer hover:bg-[#f7ffc5] transition-all'
                        >
                            Try for free
                            <ArrowRight size={18} />
                        </button>

                        <button
                            onClick={() => setSidebarOpen(false)}
                            className='w-full flex justify-center items-center gap-3 px-4 py-3 bg-[#f50] rounded-3xl text-white font-semibold cursor-pointer hover:bg-[#f7ffc5] hover:text-black transition-all'
                        >
                            Schedule a demo
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
