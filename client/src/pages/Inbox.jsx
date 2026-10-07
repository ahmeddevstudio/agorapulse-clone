import React from 'react'
import Hero from '../components/TopFeatures/Hero'
import Card from '../components/TopFeatures/Card'
import { InboxIcon, NotepadText, UserRoundGroup } from 'lucide-react'

const Inbox = () => {
  return (
    <div>
        <Hero title={'Conquer the Chaos in Your'} PMText={'Social Inbox'} PMColor={'#ff6726'} desc={'Equip yourself with everything needed to easily manage all your organic and paid post comments, mentions, private messages, and reviews in one centralized inbox.'} image={'https://www.agorapulse.com/assets/hv2-feature-inbox/hero-image-EN.webp'}/>

        <Card title={'Manage your conversations with ease'} icon1={<InboxIcon strokeWidth={2.5}/>} icon2={<UserRoundGroup strokeWidth={2.5}/>} icon3={<NotepadText strokeWidth={2.5}/>} desc1={'Organize your inbox with Inbox Assistant. Automatically.'} desc2={'Assign inbox conversations for easy sharing and organization with your team.'} desc3={'Label items to notice emerging trends and generate reports.'} PMColor={'#ff6726'} BgColor={'#fffaf6'} shadowColor={'#ff67261a'}/>
    </div>
  )
}

export default Inbox