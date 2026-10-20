import React from 'react'
import Hero from '../components/TopFeatures/Hero'
import TrustBar from '../components/TrustBar'
import MoreFeaturesSection from '../components/TopFeatures/MoreFeaturesSection'
import { Clock, Gauge, Headset, Settings } from 'lucide-react'
import TabsSection from '../components/B2b/TabsSection'
import { financialServicesTabs, manufacturingTabs, professionalServicesTabs, techTabs } from '../components/B2b/tabsData'
import ReviewSection from '../components/B2b/ReviewSection'
import CustomerReviewSection from '../components/B2b/CustomerReviewSection'
import SocialSection from '../components/B2b/SocialSection'

const B2B = () => {
  return (
    <div className='nunito-sans'>
      <Hero title={'Comprehensive Social Media Management Solutions for B2B Businesses'} PMColor={'#ff6726'} desc={'Foster authentic connections, transform teams into brand advocates, and drive growth with tailored data-driven social strategies.'} image={'https://www.agorapulse.com/assets/hv2-feature-b2b/hero-image-EN-1.webp'} />

      <TrustBar />

      <MoreFeaturesSection title={'Do it all, in one powerful platform'} PMBgColor={'#fff9f4'} LightBgColor={'#fff9f4'} PMTextColor={'black'} BgImage={'https://www.agorapulse.com/assets/hv2-feature-inbox/blur.png'} icon1={<Clock size={30} color='#ff6726' />} title1={'Reduce time on content management'} desc1={'Streamline your content efforts and free up time to focus on strategies that drive real engagement and growth.'} icon2={<Settings size={30} color='#ff6726' />} title2={'Easy-to-use platform for faster team onboarding and higher productivity'} desc2={"Elevate your team's efficiency and get them up to speed quickly with Agorapulse's intuitive interface, allowing them to focus on what matters most."} icon3={<Gauge size={30} color='#ff6726' />} title3={'Prove social media ROI from organic and paid social campaigns'} desc3={"Increase productivity by assigning moderation to specific threads, moderating individual posts with just a few clicks, and monitoring ad comments and posts."} icon4={<Headset size={30} color='#ff6726' />} title4={'Get backed by the best support team in the industry'} desc4={'Our award-winning support team with a 96% user satisfaction score is here to help you focus on your B2B success.'} grid2={'true'}/>

      <TabsSection title={'Tailored social media solutions for B2B success'} tag={'Tech/Software'} tabs={techTabs}/>

      <TabsSection tag={'Financial Services'} tabs={financialServicesTabs} order={'true'}/>

      <TabsSection tag={'Professional Services'} tabs={professionalServicesTabs} />

      <TabsSection tag={'Manufacturing'} tabs={manufacturingTabs} order={'true'}/>

      <ReviewSection review={`"When we started using Agorapulse, we gained the ability to customize our reports perfectly for our quarterly needs. We also generate weekly stats effortlessly—just update the dates, and the data is instantly available with a click. It's been an amazing tool for us!"`} name={'Jenna Rizzo'} role={'Zink Corporation'} profilePic={'https://www.agorapulse.com/assets/hv2-feature-b2b/jennarizzo.png'}/>

      <CustomerReviewSection title={'B2B companies rate Agorapulse #1 on G2'}/>

      <SocialSection />
    </div>
  )
}

export default B2B