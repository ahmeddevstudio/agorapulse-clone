import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    const footerLinks = [
        {
            title: 'Compare',
            links: [
                'Sprout Social vs Agorapulse',
                'Hootsuite vs Agorapulse',
                'Meltwater vs Agorapulse',
                'Brandwatch vs Agorapulse',
                'Sprinklr vs Agorapulse',
                'Why Marketers Prefer Agorapulse'
            ]
        },
        {
            title: 'Product',
            links: [
                'Social Media Inbox',
                'Social Media Publishing',
                'Social Media Monitoring',
                'Social Media Reporting',
                'Social Media ROI',
                'For Agencies',
                'Social Media AI',
                'AI Content Repurposing'
            ]
        },
        {
            title: 'Company',
            links: [
                'Contact Us',
                'Our Customers',
                'Careers',
                'Press',
                'Partners'
            ]
        },
        {
            title: 'Support',
            links: [
                'Quick Start Guide',
                'Customer Support',
                'Platform Status',
                'Talk to Sales'
            ]
        },
        {
            title: 'Resources',
            links: [
                'Free Tools',
                'Agorapulse Blog',
                'Agorapulse Academy',
                'Release Notes',
                'Video Tutorials',
                'Social Pulse Community',
                'Trust Center',
                'Resources'
            ]
        }
    ];

    const socialPartnerLinks = [
        {
            title: 'Tiktok Marketing Partner',
            image: 'https://www.agorapulse.com/assets/partners/footer-tiktok.svg'
        },
        {
            title: 'Meta Business Partner',
            image: 'https://www.agorapulse.com/assets/partners/footer-meta.svg'
        },
        {
            title: 'LinkedIn Marketing Partner',
            image: 'https://www.agorapulse.com/assets/partners/footer-linkedin-marketing-partner.svg'
        },
        {
            title: 'SOC',
            image: 'https://www.agorapulse.com/assets/partners/footer-soc2.svg'
        },
        {
            title: 'Vadaata',
            image: 'https://www.agorapulse.com/assets/partners/footer-vaadata.svg'
        },
        {
            title: 'ISO',
            image: 'https://www.agorapulse.com/assets/partners/footer-iso-27001-2022.svg'
        },
    ];

    const currentYear = new Date().getFullYear();

    const socialMediaLinks = [
        {
            platform: 'Facebook',
            url: 'https://www.agorapulse.com/assets/footer-fb-1.png'
        },
        {
            platform: 'Instagram',
            url: 'https://www.agorapulse.com/assets/footer-ig.png'
        },
        {
            platform: 'Threads',
            url: 'https://www.agorapulse.com/assets/footer-threads-logo.png'
        },
        {
            platform: 'X',
            url: 'https://www.agorapulse.com/assets/footer-x-logo.png'
        },
        {
            platform: 'YouTube',
            url: 'https://www.agorapulse.com/assets/footer-yt-1.png'
        },
        {
            platform: 'Pinterest',
            url: 'https://www.agorapulse.com/assets/footer-pinterest.png'
        },
        {
            platform: 'LinkedIn',
            url: 'https://www.agorapulse.com/assets/footer-linkedin.png'
        },
        {
            platform: 'Tiktok',
            url: 'https://www.agorapulse.com/assets/footer-tt.svg'
        },
    ];

    return (
        <>
            <footer className='px-6 sm:px-10 [@media(min-width:1400px)]:px-32 py-16 flex flex-col items-center md:items-start'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 text-center md:text-left'>
                    <div className='lg:col-span-1 flex flex-col items-center md:items-start'>
                        <img src={assets.agorapulse_logo} alt="Agorapulse Logo" className='w-35 object-contain' />
                    </div>

                    {footerLinks.map((section, index) => (
                        <div key={index} className='flex flex-col'>
                            <h3 className='font-bold text-xl text-[#344563] mb-4'>
                                {section.title}
                            </h3>
                            <ul className='flex flex-col gap-1'>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#_"
                                            className='text-[#5d6a82] hover:underline hover:text-[#0056b3] text-sm transition-colors duration-150'
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='pt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5'>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <a href="https://play.google.com/store/apps/details?id=com.agorapulse.app&utm_source=website_footer" target='_blank'>
                            <img src="https://www.agorapulse.com/assets/footer/hv2-play-store-badge-en.svg" alt="" className='w-40' />
                        </a>

                        <a href="https://apps.apple.com/us/app/agorapulse-companion-app/id990677994?ct=website_footer&pt=117701879" target='_blank'>
                            <img src="https://www.agorapulse.com/assets/footer/hv2-app-store-en.svg" alt="" className='w-37' />
                        </a>
                    </div>

                    <div className='flex gap-5 md:gap-10 flex-col md:flex-row'>
                        {socialPartnerLinks.map((partner, idx) => (
                            <div key={idx}>
                                <img src={partner.image} alt={partner.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </footer>

            <div className='px-6 sm:px-10 [@media(min-width:1400px)]:px-32 flex flex-col lg:flex-row justify-between items-center border-t border-[#0000001a]'>
                <div className='py-5 flex items-center gap-7 flex-col lg:flex-row'>
                    <div>
                        <p className='text-[#344563]'>&copy; {currentYear} Agorapulse</p>
                    </div>

                    <div>
                        <ul className='flex gap-8 text-sm underline text-[#344563] cursor-pointer'>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li>GDPR</li>
                            <li>Security</li>
                        </ul>
                    </div>

                    <div className='flex gap-3 flex-wrap'>
                        {socialMediaLinks.map((social, idx)=>(
                            <div key={idx}>
                                <img src={social.url} alt={social.platform} className='h-6 w-6 object-contain'/>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <select name="language" id="language" className='border text-[#344563]'>
                        <option value="english">English</option>
                        <option value="francias">Français</option>
                        <option value="espanol">Español</option>
                        <option value="deutsch">Deutsch</option>
                        <option value="portugues">Portugues</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Footer;