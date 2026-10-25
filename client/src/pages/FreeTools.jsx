import React from 'react'
import Hero from '../components/FreeTools/Hero'
import GridSection from '../components/FreeTools/GridSection'

const FreeTools = () => {
  return (
    <div className='nunito-sans'>
        <Hero />
        <GridSection title={'Blind Spot Report'} subTitle={'See what people have to say about your brand, and competitors in the conversations that you missed.'} desc={"Compare your brand's share of voice against up to 3 competitors across the open web in about 2 minutes, see the mentions you never saw, and walk away with Boolean queries and channels that you can integrate into your listening tool."} CTA={'Generate your free report today!'} btn={'Discover'} to={'/reporting'} img={'https://www.agorapulse.com/assets/free-tools/Blind_Spot_Report.webp'}/>

        <GridSection title={'LinkedIn Post Checker'} subTitle={'Stop guessing whether your LinkedIn post will land.'} desc={"The 4Q Checker instantly assesses your content across four key criteria, highlighting what's working and what needs improvement."} CTA={'Use this tool to ensure every post you publish is optimized for maximum reach and engagement.'} btn={'Discover'} to={'/agencies'} img={'https://www.agorapulse.com/assets/free-tools/LinkedIn_4Q_checker.webp'} order={'true'}/>

        <GridSection title={'Tone of Voice Analyzer'} subTitle={"Discover your brand's true voice in seconds."} desc={"Copy and paste your website URL into this free AI tool to analyze your company's tone of voice."} CTA={'Take advantage of our ready-to-use prompt to ensure that every piece of content you create is consistently on-brand.'} btn={'Discover'} to={'/b2b'} img={'https://www.agorapulse.com/assets/free-tools/Tone-of-voice.webp'}/>

        <GridSection title={'Content to Social'} subTitle={"Turn any piece content into ready-to-publish social media posts in seconds."} desc={"Paste a URL, blog post, or text, and this free AI tool generates platform-optimized captions tailored to your audience."} CTA={'No sign-up needed—just instant social copy that saves time and drives engagement.'} btn={'Discover'} to={'/manufacturing'} img={'https://www.agorapulse.com/assets/free-tools/content-to-social.png'} order={'true'}/>

        <GridSection title={'Social Trends'} subTitle={"Follow social media trends"} desc={"Declining impressions on your publications, is this a trend on the social media? What is a good engagement rate on a given social media? What are the main topics of the month in my industry? Worldwide?"} CTA={'Explore the latest social media trends!'} btn={'Discover'} to={'/higher-education'} img={'https://www.agorapulse.com/assets/free-tools-social-trend-screen.webp'}/>
    </div>
  )
}

export default FreeTools