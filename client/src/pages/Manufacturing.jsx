import React from 'react'
import Hero from '../components/Manufacturing/Hero'
import TrustBar from '../components/TrustBar'
import TabsSection from '../components/Manufacturing/TabsSection'
import { RadioTower, Send, Sparkles, Target, TrendingUp, UsersRound } from 'lucide-react'
import EBookSection from '../components/Manufacturing/EBookSection'
import FAQSection from '../components/FAQSection'

const Manufacturing = () => {
  return (
    <div className='nunito-sans'>
      <Hero tag={'Agorapulse for Manufacturing'} title={'Manufacture Engaging Stories and Results on Social'} desc={'Run a tighter and faster social operation across brands, teams and regions. Publish at scale, centralize engagement, prove ROI, and keep your reputation protected without the bloat, cost, or six-month implementations.'} bgImage={'https://www.agorapulse.com/assets/higher-study/bg-manufacturing.webp'}/>

      <TrustBar />

      <TabsSection title={'Manufacturing Grade Social Media Without the Enterprise Headaches'} Icon1={Target} Icon2={UsersRound} Icon3={TrendingUp} title1={'Find True Value for Money From Your Tool'} title2={'Enhance Productivity and Collaboration'} title3={'See Metrics That Matter, Not Just That Flatter'} desc1={'Run a tighter and faster social operation across brands, teams and regions. Publish at scale, centralize engagement, prove ROI, and keep your reputation protected without the bloat, cost, or six-month implementations.'} desc2={'Enjoy a centralized workspace designed for manufacturing teams with shared calendars, streamline approvals with customizable workflows that maintain brand consistency and respond to every customer inquiry from a unified inbox that never misses a mention. Focus on creating content that showcases your manufacturing innovation, Agorapulse handles the operational complexity.'} desc3={'Track the metrics manufacturing executives care about - brand awareness and engagement, website traffic, lead generation, sales conversions, event sign ups with Social Media ROI, one-click custom reports and AI Report Summary - focus on what moves the needle.'} mainImage={'https://www.agorapulse.com/assets/higher-study/manufacturing-tab-tool.webp'} />

      <EBookSection image={'https://www.agorapulse.com/assets/higher-study/manufacturing-imgtext1.webp'} tag={'Free Ebook'} title={"A Social Media Manager's Guide"} span={'to Working Smarter'} subtitle={'Social media managers do it all: the planning, the writing, the designing, the publishing and thats just before lunch.'} desc={"To help you stay relevant (and profitable), we've compiled 10 of our most eye-opening expert insights from our latest agency summit, including how to handle the more than 75% shift in operations to AI industry-wide to one simple strategy that can boost your profits up to 95%."} />

      <TabsSection title={'Engineered for Efficiency. Built for Results'} Icon1={Send} Icon2={Sparkles} Icon3={RadioTower} title1={"Publishing That Doesn't Feel Like a Chore"} title2={"AI That Is Your SMM Buddy"} title3={'Listening and Benchmarking That Gives You Industry Intelligence'} desc1={'Intuitive publishing features that help you publish and your schedule your content and drafts with ease. Enjoy one of the best cross-posting experiences, customize messaging for different regions and platforms while maintaining brand voice, and visualize everything on shared calendars that keep corporate and local teams perfectly aligned.'} desc2={'Automate routine tasks with AI-driven suggestions - draft on-brand posts in seconds, generate alt text for accessibility, and get sentiment-aware reply templates that prioritize critical comments. Seamlessly blend AI efficiency with human oversight to maximize reach and free your team for high-impact strategy.'} desc3={'Agrorapulse with Mention gives you the tools to track all industry conversation, monitor sentiment, and benchmark your performance side-by-side with industry leaders - stay ahead of the industry trends, compliance updates, supply chain disruptions and competitor product launches.'} mainImage={'https://www.agorapulse.com/assets/higher-study/manufacturing-tab-publishing.webp'} btnHidden={'true'}/>

      <FAQSection />
    </div>
  )
}

export default Manufacturing