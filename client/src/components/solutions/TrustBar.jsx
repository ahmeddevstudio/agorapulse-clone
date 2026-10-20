import React from 'react'

const TrustBar = ({title, c1, image1, c2, image2, c3, image3, c4, image4, c5, image5, c6, image6,}) => {

    const companies = [
        {
            name: c1,
            image: image1
        },
        {
            name: c2,
            image: image2
        },
        {
            name: c3,
            image: image3
        },
        {
            name: c4,
            image: image4
        },
        {
            name: c5,
            image: image5
        },
        {
            name: c6,
            image: image6
        },
    ]

  return (
    <div className='px-15 [@media(min-width:1400px)]:px-30 py-15'>
        <div>
            <h2 className='text-center text-[#212e44] text-4xl font-extrabold'>{title}</h2>
        </div>

        <div className='pt-10 flex gap-15 lg:justify-between items-center flex-wrap justify-center'>
            {companies.map((item, idx)=>(
                <div key={idx}>
                    <img src={item.image} alt={item.name}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrustBar