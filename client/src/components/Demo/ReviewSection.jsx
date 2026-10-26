import React from 'react'

const ReviewSection = () => {

    const testimonials = [
        {
            profilePic: "https://www.agorapulse.com/assets/hv2-home2/nadira-davis.png",
            name: "Nadira Davis",
            role: "OneStreet Residential",
            review:
                "Posting content for 21 different communities has been easier, thanks to Agorapulse’s excellent user-friendliness.",
        },
        {
            profilePic: "https://www.agorapulse.com/assets/hv2-home2/kyle-riches.png",
            name: "Kyle Riches",
            role: "Collaborative Drug Discovery",
            review:
                "Active and responsive customer support topped our list of needs!",
        },
        {
            profilePic: "https://www.agorapulse.com/assets/hv2-home2/chris-edmonds.png",
            name: "Chris Edmonds",
            role: "The Purposeful Culture Group",
            review:
                "We needed a reliable platform that was fast, simple, and fairly priced. Agorapulse was a great solution for our needs.",
        },
    ];

    return (
        <div className='px-10 py-15 [@media(min-width:1400px)]:px-24 bg-[#212e44]'>
            <div>
                <h2 className='text-center text-4xl font-superbold text-white'>Don't wait—register for your demo today and discover how Agorapulse can transform your social media strategy!</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10'>
                {testimonials.map((review, idx)=>(
                    <div key={idx} className='bg-white shadow-[0_24px_20px_0_rgba(33,46,68,.02)] p-8 rounded-xl flex flex-col items-center justify-center'>
                        <div className='flex gap-3 items-center'>
                            <img src={review.profilePic} alt={review.name} className='h-15 w-15'/>
                            <div className='text-[#212e44]'>
                                <h4 className='text-lg font-extrabold'>{review.name}</h4>
                                <p className='font-medium'>{review.role}</p>
                            </div>
                        </div>

                        <div className='text-center pt-5'>
                            <p className='text-lg text-[#5d6a82]'>{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewSection