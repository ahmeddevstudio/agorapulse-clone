import React from 'react'

const ReviewSection = ({ title, image1, name1, role1, desc1, image2, name2, role2, desc2, image3, name3, role3, desc3 }) => {

    const reviews = [
        {
            image: image1,
            name: name1,
            role: role1,
            desc: desc1
        },
        {
            image: image2,
            name: name2,
            role: role2,
            desc: desc2
        },
        {
            image: image3,
            name: name3,
            role: role3,
            desc: desc3
        }
    ]

    return (
        <div className='nunito-sans px-4 [@media(min-width:1400px)]:px-24 py-15'>
            <div className='text-center'>
                <h2 className='text-4xl font-black [-webkit-text-stroke:1.5px] text-[#212e44]'>{title}</h2>
            </div>

            <div className='pt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {reviews.map((review, idx) => (
                    <div key={idx} className='border p-5 h-63 shadow-xs border-[#858fa133] rounded-2xl flex flex-col items-center'>
                        <div className='flex items-center gap-3'>
                            <img src={review.image} alt={review.name} className='size-14' />
                            <div className='text-[#212e44]'>
                                <h4 className='text-lg font-bold'>{review.name}</h4>
                                <p>{review.role}</p>
                            </div>
                        </div>

                        <div className='pt-5 text-center'>
                            <p className='text-[#5d6a82]'>{review.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewSection