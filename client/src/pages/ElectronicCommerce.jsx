import React from 'react'
import Hero from '../components/TopFeatures/Hero'
import TrustBar from '../components/solutions/TrustBar'
import { Clock, Magnet, PaperBag, Podium, Rocket, Settings, WashingMachine } from 'lucide-react'
import Cards from '../components/solutions/Cards'
import SolutionsSection from '../components/solutions/SolutionsSection'
import SocialSection from '../components/solutions/SocialSection'
import SupportSection from '../components/solutions/SupportSection'
import MobileAppSection from '../components/solutions/MobileAppSection'
import PricingSection from '../components/solutions/PricingSection'
import VideoSection from '../components/solutions/VideoSection'

const ElectronicCommerce = () => {
    return (
        <div className='nunito-sans'>
            <Hero title={'Social commerce made simple with'} PMText={'Agorapulse'} PMColor={'#ff6726'} desc={'Easily manage all your social media interactions and boost sales with powerful social commerce features all in one place.'} image={'https://www.agorapulse.com/assets/social-commerce/featured-image-social-commerce-1.png'} />

            <TrustBar title={'Brands who love us'} c1={'Decathlon'} image1={'https://www.agorapulse.com/assets/social-commerce/logo-decathlon.svg'} c2={'Ogilvy'} image2={'https://www.agorapulse.com/assets/hv2-agencies/logo-ogilvy.png'} c3={'McCaNN'} image3={'https://www.agorapulse.com/assets/hv2-agencies/logo-mc-cann.png'} c4={'Dove'} image4={'https://www.agorapulse.com/assets/social-commerce/logo-dove.svg'} c5={'Isobar'} image5={'https://www.agorapulse.com/assets/hv2-agencies/logo-isobar.png'} c6={'Danone'} image6={'https://www.agorapulse.com/assets/social-commerce/logo-danone.svg'} />

            <Cards title={'Why online businesses'} span={'love Agorapulse'} image1={<Clock size={40} color='#ff6726' />} image2={<PaperBag size={40} color='#ff6726' />} image3={<Settings size={40} color='#ff6726' />} image4={<Magnet size={40} color='#ff6726' />} image5={<Podium size={40} color='#ff6726' />} image6={<Rocket size={40} color='#ff6726' />} title1={'Save time'} title2={'Collaborate faster'} title3={'Streamline efforts'} title4={'Engage and take action'} title5={'Make data-driven decisions'} title6={'Be more effective'} desc1={'Effortlessly manage all your social profiles from one place, without navigating away from a single tab.'} desc2={'Seamlessly collaborate with your team on content creation and community management.'} desc3={'Harness the power of the asset library, UTM tracking, and dynamic personalization for multi-location accounts.'} desc4={'Reply to all comments, ad comments, and direct messages instantly from one platform.'} desc5={'Run experiments, analyze easy-to-read reports, and make quick decisions to optimize your campaigns.'} desc6={'Speed up your content creation process with Canva integration and AI Writing Assistant.'} />

            <SolutionsSection title={'Limitless growth,'} span={'powerful solutions'} title1={'Boost conversions'} desc1={'Boost your online traffic with clickable PulseLink bio links and maximize sales using Instagram Product Tagging'} image1={'https://www.agorapulse.com/assets/social-commerce/screenshot-tag-en-1.webp'} title2={'Speed up content creation'} desc2={'Accelerate content creation by leveraging a suite of in-tool features including image cropping, video thumbnail customization, saved hashtags, post previews, and Canva integration'} image2={'https://www.agorapulse.com/assets/social-commerce/screenshot-edit-image-en.webp'} title3={'Quickly enhance your content'} desc3={'Leverage Custom Fields for scheduling and adding tailored text to each post, plus, easily refine your message with the AI-powered Writing Assistant to ensure it resonates with your audience.'} image3={'https://www.agorapulse.com/assets/social-commerce/screenshot-ia-writing-en-2.webp'} title4={'Connect your CRM'} desc4={'Integrate your Salesforce or HubSpot CRM into your Social Inbox workflows for increased customer support and for a smooth conversation workflow between social media and your customers'} image4={'https://www.agorapulse.com/assets/social-commerce/screenshot-crm-integration-en-2.webp'} title5={'Collaborate with ease'} desc5={'Effortlessly bring your team onboard, designate roles for precise access control, and elevate teamwork with real-time tools like Internal Approval Workflows, Saved Replies, Bulk Actions, a Content Calendar, and Team Performance reports.'} image5={'https://www.agorapulse.com/assets/social-commerce/screenshot-collaborate-en-1.webp'} />

            <SocialSection mainTitle1={'Discover how'} span={'Agorapulse empowers'} mainTitle2={'ecommerce businesses:'} />

            <SupportSection />

            <MobileAppSection />

            <PricingSection />

            <VideoSection />
        </div>
    )
}

export default ElectronicCommerce