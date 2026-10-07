import React from 'react'
import Hero from '../components/TopFeatures/Hero'
import Card from '../components/TopFeatures/Card'
import { InboxIcon, NotepadText, UserRoundGroup } from 'lucide-react'
import SocialInteractionsSection from '../components/TopFeatures/SocialInteractionsSection'

const Inbox = () => {
  return (
    <div>
        <Hero title={'Conquer the Chaos in Your'} PMText={'Social Inbox'} PMColor={'#ff6726'} desc={'Equip yourself with everything needed to easily manage all your organic and paid post comments, mentions, private messages, and reviews in one centralized inbox.'} image={'https://www.agorapulse.com/assets/hv2-feature-inbox/hero-image-EN.webp'}/>

        <Card title={'Manage your conversations with ease'} icon1={<InboxIcon strokeWidth={2.5}/>} icon2={<UserRoundGroup strokeWidth={2.5}/>} icon3={<NotepadText strokeWidth={2.5}/>} desc1={'Organize your inbox with Inbox Assistant. Automatically.'} desc2={'Assign inbox conversations for easy sharing and organization with your team.'} desc3={'Label items to notice emerging trends and generate reports.'} PMColor={'#ff6726'} BgColor={'#fffaf6'} shadowColor={'#ff67261a'}/>

        <SocialInteractionsSection title={'Get ahead of your social interactions'} threeDIcon1={'https://www.agorapulse.com/assets/hv2-feature-inbox/icon-social-schedule.svg'} title1={'Enhance productivity and team collaboration'} desc1={'Use Inbox Assistant to manage your inbox efficiently and Saved Replies to respond promptly and keep customers happy. Label, assign, and bookmark items, so all team members can easily manage inbox activities.'} image1={'https://www.agorapulse.com/assets/hv2-feature-inbox/inbox-screen-productivity-collaboration-EN-2.png'} threeDIcon2={'https://www.agorapulse.com/assets/hv2-feature-inbox/icon-communicate.svg'} title2={'Manage your ad comments with ease'} desc2={'Sync your Facebook, Instagram, LinkedIn, and TikTok ads comments. Effortlessly hide or delete the comments that devalue your social ads. Receive statistics chronologically as soon as you want them.'} image2={'https://www.agorapulse.com/assets/hv2-feature-inbox/inbox-screen-manage-comments-EN-1.png'} threeDIcon3={'https://www.agorapulse.com/assets/hv2-feature-inbox/icon-measure.svg'} title3={'Gain measurable results with your interactions'} desc3={'Use UTM tracking codes when posting links in your replies and messages to measure the success of your social campaigns. Effortlessly identify which conversations and social profiles drive sales, leads, and traffic.'} image3={'https://www.agorapulse.com/assets/hv2-feature-inbox/inbox-screen-measurable-results-EN-1.png'} hoverBgColor={'#fff9f4'} hoverTextColor={'#ff6726'}/>
    </div>
  )
}

export default Inbox