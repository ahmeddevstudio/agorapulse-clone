import React from 'react'
import Hero from '../components/solutions/Hero'
import TrustBar from '../components/solutions/TrustBar'
import Cards from '../components/solutions/Cards'
import { assets } from '../assets/assets'
import { Clock, Magnet, PaperBag, Podium, Settings, WashingMachine } from 'lucide-react'
import SolutionsSection from '../components/solutions/SolutionsSection'
import SocialSection from '../components/solutions/SocialSection'
import SupportSection from '../components/solutions/SupportSection'
import CTASection from '../components/solutions/CTASection'
import MobileAppSection from '../components/solutions/MobileAppSection'
import PricingSection from '../components/solutions/PricingSection'
import VideoSection from '../components/solutions/VideoSection'

const Agencies = () => {
  return (
    <div className='nunito-sans'>
        <Hero mainTitle1={'Supercharge Your'} mainTitle2={'with Agorapulse'} span={"Clients' Goals"} desc={"Streamline your agency's social media workflow and drive positive results with Agorapulse's powerful features and unrivaled customer support. It's the ultimate social media management solution for juggling multiple social media accounts with diverse clients, platforms, and industries."} image={'https://www.agorapulse.com/assets/hv2-agencies/featured-image-en-v1.png'}/>

        <TrustBar title={'Over 3,000 agencies use our tool daily'} c1={'Everscale Agency'} image1={'https://www.agorapulse.com/assets/hv2-agencies/logo-ever-scale-agency.png'} c2={'Ogilvy'} image2={'https://www.agorapulse.com/assets/hv2-agencies/logo-ogilvy.png'} c3={'McCaNN'} image3={'https://www.agorapulse.com/assets/hv2-agencies/logo-mc-cann.png'} c4={'Havas'} image4={'https://www.agorapulse.com/assets/hv2-agencies/logo-havas.png'} c5={'Isobar'} image5={'https://www.agorapulse.com/assets/hv2-agencies/logo-isobar.png'} c6={'FM Media'} image6={'https://www.agorapulse.com/assets/hv2-agencies/logo-fm-media.png'}/>

        <Cards title={'Why agencies'} span={'love Agorapulse'} image1={<Clock size={40} color='#ff6726'/>} image2={<PaperBag size={40} color='#ff6726'/>} image3={<Settings size={40} color='#ff6726'/>} image4={<Magnet size={40} color='#ff6726'/>} image5={<Podium size={40} color='#ff6726'/>} image6={<WashingMachine size={40} color='#ff6726'/>} title1={'Save time'} title2={'Collaborate faster'} title3={'Streamline efforts'} title4={'Engage and take action'} title5={'Revamp strategic direction'} title6={'Unleash creativity'} desc1={'Effortlessly edit, schedule, and publish content for all social networks without navigating away from a single tab.'} desc2={'Enhance teamwork and productivity through real-time collaboration with colleagues and clients, including internal approval workflows, bulk actions, and shared calendar.'} desc3={'Harness the power of the asset library, UTM tracking, and dynamic personalization for multi-location accounts.'} desc4={'Engage and take action with saved replies, Facebook and Instagram Ad management, monitoring,  and community management reports.'} desc5={'Give meaningful direction to strategy and measure business impact with advanced reporting capabilities, such as  Power Reports, white-label reports, and cross-channel reporting.'} desc6={'Get creative with our Canva Integration and AI Writing Assistant right through publishing.'}/>

        <SolutionsSection title={'Limitless growth,'} span={'powerful solutions'} title1={'Effortlessly handle multiple clients'} desc1={'Experience seamless cross-platform publishing across Instagram, Facebook, YouTube, TikTok, X (Twitter), and LinkedIn. Manage scheduling for Reels, Stories, TikTok videos, and more content types within a single platform.'} image1={'https://www.agorapulse.com/assets/social-media-publishing/Composer_IG_EN_2.webp'} title2={'Share the big picture'} desc2={'Easily incorporate your clients into the social media scheduling process and give them visibility on upcoming posts and overall social strategy.'} image2={'https://www.agorapulse.com/assets/social-media-publishing/Request_Changes_EN_1.webp'} title3={'Easily collaborate as a team'} desc3={'Delegate approval processes with workflows for enhanced accountability and transparency. Utilize bulk actions. Collaborate through shared notes, track action items, and monitor real-time communication to stay updated on progress.'} image3={'https://www.agorapulse.com/assets/social-media-publishing/Inbox_Assign_EN_1.webp'} title4={'Manage your social inbox efficiently'} desc4={'Use inbox filters, saved replies, and one-click translations to achieve more in less time. Label, assign, and bookmark items, so all team members can easily manage inbox activities.'} image4={'https://www.agorapulse.com/assets/hv2-feature-inbox/Inbox2-Saved-Replies-EN-2.webp'} title5={'Insightful reporting'} desc5={'Effortlessly generate comprehensive reports delivered to inboxes, using labels, tags, and content from your inbox or published materials. Streamline reporting with automated white-label reports. Customize metrics, date ranges, and profiles.'} image5={'https://www.agorapulse.com/assets/hv2-feature-reporting/audience-growth-en-v2.webp'}/>

        <SocialSection mainTitle1={'Discover how'} span={'Agorapulse empowers'} mainTitle2={'the best agencies'}/>

        <SupportSection />

        <CTASection mainTitle1={'Access'} span={'valuable resources and nurture connections'} mainTitle2={'with industry leaders'} image1={'https://www.agorapulse.com/assets/hv2-agencies/agency-love.png'} title1={'Agency Love'} desc1={'Give meaningful direction to strategy and measure business impact with advanced reporting capabilities, such as Power Reports, white-label reports, and cross-channel reporting.'} btn1={'Read it now'} image2={'https://www.agorapulse.com/assets/hv2-agencies/social-media-agency-playbook.png'} title2={'The Ultimate Social Media Agency Playbook'} desc2={'Your quick guide to winning more clients, proving social ROI, and outperforming your competition.'} btn2={'Download it now'}/>

        <MobileAppSection />

        <PricingSection />

        <VideoSection />
    </div>
  )
}

export default Agencies