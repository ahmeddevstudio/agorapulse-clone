import React from 'react'

const SupportSection = () => {
    return (
        <div className='px-6 md:px-15 [@media(min-width:1400px)]:px-30 py-15'>
            <div className='mb-12 flex flex-col items-center'>
                <h2 className='text-center text-[#212e44] text-3xl md:text-5xl font-superbold'>
                    <span className='text-[#ff6726]'>Best support</span> in the business
                </h2>
                <p className='text-center max-w-2xl text-lg pt-3 text-[#212e44] font-medium'>
                    Social media changes quickly, so we do, too! That's why Agorapulse received leadership awards for six years in a row for ease of use, its unrivaled support, and product direction.
                </p>
            </div>

            <div className='relative pt-6 flex flex-col lg:flex-row items-center justify-center'>

                <div className='z-10 -mb-10 lg:mb-0 lg:-mr-16 shrink-0 w-60 md:w-68'>
                    <img
                        src="https://www.agorapulse.com/assets/badges/winter/2025/g2-SocialMediaListeningTools_Leader_Leader.webp"
                        alt="G2 Leader Winter 2025 Badge"
                        className='w-full h-auto drop-shadow-md'
                    />
                </div>

                <div className='w-full max-w-5xl bg-white rounded-3xl shadow-sm border border-gray-100/80 p-8 md:p-10 lg:pl-28 flex flex-col lg:flex-row items-center justify-around gap-8'>
                    <div className='flex items-center gap-4 w-full lg:w-auto justify-start'>
                        <div className='relative w-20 h-20 shrink-0 flex items-center justify-center'>
                            <svg className='w-full h-full transform -rotate-7' viewBox='0 0 36 36'>
                                <path
                                    className='text-gray-200'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    fill='none'
                                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                    className='text-indigo-500'
                                    strokeDasharray='91, 100'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    stroke='currentColor'
                                    fill='none'
                                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                            </svg>
                            <span className='absolute text-2xl font-extrabold text-indigo-600'>9.1</span>
                        </div>
                        <div>
                            <h4 className='text-indigo-600 font-bold text-lg'>Ease of Use</h4>
                            <p className='text-xs text-gray-500 mt-0.5 font-black'>Hootsuite: 8.3</p>
                            <p className='text-xs text-gray-500 font-black'>Sprout Social: 8.9</p>
                        </div>
                    </div>

                    {/* Support */}
                    <div className='flex items-center gap-4 w-full lg:w-auto justify-start'>
                        <div className='relative w-20 h-20 shrink-0 flex items-center justify-center'>
                            <svg className='w-full h-full transform -rotate-7' viewBox='0 0 36 36'>
                                <path
                                    className='text-gray-200'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    fill='none'
                                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                    className='text-blue-500'
                                    strokeDasharray='92, 100'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    stroke='currentColor'
                                    fill='none'
                                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                            </svg>
                            <span className='absolute text-2xl font-extrabold text-blue-500'>9.2</span>
                        </div>
                        <div>
                            <h4 className='text-blue-500 font-bold text-lg'>Support</h4>
                            <p className='text-xs text-gray-500 mt-0.5 font-black'>Hootsuite: 7.8</p>
                            <p className='text-xs text-gray-500 font-black'>Sprout Social: 8.8</p>
                        </div>
                    </div>

                    {/* Product Direction */}
                    <div className='flex items-center gap-4 w-full lg:w-auto justify-start'>
                        <div className='relative w-20 h-20 shrink-0 flex items-center justify-center'>
                            <svg className='w-full h-full transform -rotate-7' viewBox='0 0 36 36'>
                                <path
                                    className='text-gray-200'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    fill='none'
                                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                    className='text-teal-400'
                                    strokeDasharray='93, 100'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    stroke='currentColor'
                                    fill='none'
                                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                            </svg>
                            <span className='absolute text-2xl font-bold text-teal-400'>9.3</span>
                        </div>
                        <div>
                            <h4 className='text-teal-400 font-bold text-lg'>Product Direction</h4>
                            <p className='text-xs text-gray-500 mt-0.5 font-black'>Hootsuite: 7.3</p>
                            <p className='text-xs text-gray-500 font-black'>Sprout Social: 8.8</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SupportSection