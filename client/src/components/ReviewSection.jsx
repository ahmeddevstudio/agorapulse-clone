import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const ReviewSection = () => {
  const reviews = [
    {
      title: 'Intuitive and easy to use',
      desc: "Agorapulse's user-friendly UI/UX boosts team productivity by saving 50% of content creation time.",
      userImg: 'https://www.agorapulse.com/assets/hv2-home2/nadira-davis.png',
      userName: 'Nadira Davis',
      userRole: 'OneStreet Residential',
      userDesc:
        "Posting content for 21 different communities has been easier, thanks to Agorapulse's excellent user-friendliness.",
    },
    {
      title: 'Get backed by the best support team in the industry',
      desc: 'Our support team is ready to assist you with an average response time of 30 minutes or less, and a 96% user satisfaction rating.',
      userImg: 'https://www.agorapulse.com/assets/hv2-home2/kyle-riches.png',
      userName: 'Kyle Riches',
      userRole: 'Collaborative Drug Discovery',
      userDesc:
        'Active and responsive customer support topped our list of needs!',
    },
    {
      title: 'Cost-effective and transparent pricing',
      desc: "Users who switch to Agorapulse from other social media tools don't suffer hidden costs, so they average savings of 30% for teams.",
      userImg: 'https://www.agorapulse.com/assets/hv2-home2/chris-edmonds.png',
      userName: 'Chris Edmonds',
      userRole: 'The Purposeful Culture Group',
      userDesc:
        'We needed a reliable platform that was fast, simple, and fairly priced. Agorapulse was a great solution for our needs.',
    },
  ]

  return (
    <div className="px-4 [@media(min-width:1400px)]:px-32 py-15">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex justify-center text-center text-[#021a41]">
        <h3 className="text-3xl sm:text-4xl font-bold">
          What makes <span className="text-[#f50]">Agorapulse great?</span>
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="pt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch">
        {reviews.map((review, idx) => (
          <div key={idx} className="flex flex-col h-full min-w-0">
            <div className="md:flex flex-col gap-5 sm:gap-6 text-[#021a41] hidden">
              <h4 className="text-xl sm:text-2xl text-center font-semibold min-h-0 lg:min-h-18">
                {review.title}
              </h4>

              <p className="text-center text-base sm:text-lg">
                {review.desc}
              </p>
            </div>

            <div className="border border-[#858fa133] rounded-2xl p-5 mt-8 sm:mt-10 flex flex-col flex-1 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={review.userImg}
                  alt={review.userName}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />

                <div className="text-[#021a41] min-w-0">
                  <p className="text-base sm:text-lg font-bold">
                    {review.userName}
                  </p>
                  <p className="text-sm sm:text-base">
                    {review.userRole}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="text-center text-[#021a41cc] leading-relaxed">
                  “{review.userDesc}”
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className='pt-20 px-10 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-0'>
        <div>
          <iframe
            src="https://www.youtube.com/embed/sMzfo7p-pAk?si=3Kgxdj0zHzYxmNs8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full aspect-video rounded-4xl md:w-[575.18px] md:h-80.75"
          />
        </div>

        <div>
          <h3 className='text-2xl font-bold text-[#021a41]'>“Agorapulse has really changed our ability to follow up with customers and make sure we're being responsive and interacting with them when they want.”</h3>

          <div className='pt-5 text-lg text-[#f50] font-semibold'>
            <p>Jamie Mendelsohn,</p>
            <p>Director of Customer Happiness Lovepop</p>
          </div>

          <div className='pt-5'>
            <Link to="/resources" onClick={() => window.scrollTo({ 'top': 0, 'left': 0, 'behavior': 'smooth' })}>
              <button className='flex items-center border-[1.5px] border-[#f50] text-[#f50] py-2 px-4 rounded-full gap-4 cursor-pointer font-medium hover:bg-[#f7ffc5] transition-all'>See success stories <ArrowRight size={20} /></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
