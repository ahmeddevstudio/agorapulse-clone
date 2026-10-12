import { AudioLines, Target, UsersRound } from 'lucide-react'
import React from 'react'

const Cards = () => {

  const cards = [
    {
      Icon: Target,
      title: 'Built around your expertise',
      desc: 'Archie starts with your own source material. Upload a webinar, article, PDF, video or audio file and let Archie identify the insights, arguments, stories and quotes worth sharing.'
    },
    {
      Icon: AudioLines,
      title: 'Sounds like you from draft one',
      desc: 'Build your Playbook and give Archie the context to create content that sounds and looks like you. Set your goals, audience and voice once, and apply them to everything it creates.'
    },
    {
      Icon: UsersRound,
      title: 'Made for social media',
      desc: 'Archie knows how platforms differ and what earns attention. Same idea, adapted natively to each channel, instead of one post copy-pasted everywhere.'
    },
  ]

  return (
    <div className='px-4 [@media(min-width:1400px)]:px-24 py-15 bg-[#021a41]'>
      <div>
        <h2 className='text-white font-black text-4xl text-center'>Built for Social, <span className='text-[#f6ffc4]'>Powered by You.</span></h2>
      </div>

      <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {cards.map((card, idx) => {
          const Icon = card.Icon;

          return (
            <div key={idx} className='bg-white rounded-xl p-10'>
              <div className='flex justify-center'>
                <Icon size={40} color='#f50' className='border-[1.5px] border-[#f50] p-2 rounded-xl'/>
              </div>

              <div className='pt-3'>
                <h3 className='text-2xl text-center text-[#021a41] font-bold font'>{card.title}</h3>
                <p className='pt-3 text-center text-[#212e44] font-medium'>{card.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards