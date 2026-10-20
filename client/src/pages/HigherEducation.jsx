import React from 'react'
import Hero from '../components/Manufacturing/Hero'
import TrustBar from '../components/TrustBar'
import TabsSection from '../components/Manufacturing/TabsSection'
import { Inbox, Send, Target, TrendingUp, UserRound, UsersRound } from 'lucide-react'
import EBookSection from '../components/Manufacturing/EBookSection'
import FAQSection from '../components/FAQSection'

const HigherEducation = () => {
    return (
        <div className='nunito-sans'>
            <Hero bgImage={'https://www.agorapulse.com/assets/featured-images/bg-higher.png'} gradient={false} tag={'Agorapulse for Higher Education'} title={'Engage, Recruit and Inspire - Simplify Social, Amplify Results'} desc={'Agorapulse is a social media command center for Higher Ed social teams that helps collaboration, creativity, community and your social media strategy thrive so that every student, alum, and partner feels valued.'} />

            <TrustBar />

            <TabsSection title={'The Value Higher Ed Social Teams Deserve - Delivered'} Icon1={UserRound} Icon2={UsersRound} Icon3={Target} title1={'Build Trust and Loyalty with Your Community'} title2={'Maintain Frictionless Social Collaboration'} title3={'Stay Ahead of Crises and Competition'} desc1={'Engage meaningfully and never miss an interaction with students, parents, alumni and all your partners with the all-in-one inbox and social listening that helps your diverse audience stay connected.'} desc2={"Collaborate easily with all the different teams and departments with an intuitive tool that is easy to adopt and features that help you get everyone's buy-in and approval in just a few clicks."} desc3={'Track what is the chatter around your institution and have a 360° view your your social presence and strategy with advanced listening, competitive analysis and customisable reporting to help you stand out.'} mainImage={'https://www.agorapulse.com/assets/higher-study/tab-buil-trust-loyalty-cummunity.webp'} />

            <EBookSection image={'https://www.agorapulse.com/assets/higher-study/imgtext.png'} tag={'Free Ebook'} title={"A Social Media Manager's Guide"} span={'to Working Smarter'} subtitle={"Social media managers do it all: the planning, the writing, the designing, the publishing and that's just before lunch."} desc={"To help you stay relevant (and profitable), we've compiled 10 of our most eye-opening expert insights from our latest agency summit, including how to handle the more than 75% shift in operations to AI industry-wide to one simple strategy that can boost your profits up to 95%."} />

            <TabsSection title={'Features That Drive Results for Higher Education'} Icon1={Send} Icon2={Inbox} Icon3={TrendingUp} title1={'Publishing that helps you save time'} title2={'Inbox that helps you stay engaged'} title3={'Reporting that helps you prove impact'} desc1={'Schedule content in advance for recruitment seasons, graduation events, and campus activities while customising posts for each platform. With bulk scheduling shared calendars, approval workflows and AI writing assistance, your team can focus on creating engaging content rather than manual posting and chasing approvals.'} desc2={"Capture every comment, message, and mention. Use saved replies to answer common questions faster, and automate moderation to flag urgent inquiries and filter out inappropriate content so you can protect your reputation while driving meaningful engagement."} desc3={'Generate comprehensive analytics that demonstrate the real impact of your social media efforts to university leadership. Track engagement across campaigns with custom labels for admissions, alumni outreach, and campus events. Connect social media directly to website traffic and conversions with built-in ROI tracking.'} mainImage={'https://www.agorapulse.com/assets/higher-study/tab-listening-aware-ahead.webp'} btnHidden={'true'}/>

            <FAQSection />
        </div>
    )
}

export default HigherEducation