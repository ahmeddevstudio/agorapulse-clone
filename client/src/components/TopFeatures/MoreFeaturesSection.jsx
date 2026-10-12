import React from 'react'
import { assets } from '../../assets/assets'

const MoreFeaturesSection = ({ title, PMBgColor, LightBgColor, PMTextColor, BgImage, icon1, title1, desc1, icon2, title2, desc2, icon3, title3, desc3, icon4, title4, desc4, icon5, title5, desc5, icon6, title6, desc6, icon7, title7, desc7, icon8, title8, desc8, icon9, title9, desc9 }) => {

    const features = [
        { Icon: icon1, title: title1, desc: desc1 },
        { Icon: icon2, title: title2, desc: desc2 },
        { Icon: icon3, title: title3, desc: desc3 },
        { Icon: icon4, title: title4, desc: desc4 },
        { Icon: icon5, title: title5, desc: desc5 },
        { Icon: icon6, title: title6, desc: desc6 },
        { Icon: icon7, title: title7, desc: desc7 },
        { Icon: icon8, title: title8, desc: desc8 },
        { Icon: icon9, title: title9, desc: desc9 },
    ]

    return (
        <div className="nunito-sans py-16">
            <div className="text-center mb-12 px-4">
                <h2 className="text-4xl font-black text-[#212e44]">{title}</h2>
            </div>

            <div
                className="pt-10 pb-28 px-4 [@media(min-width:1400px)]:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-b-3xl"
                style={{
                    backgroundColor: PMBgColor,
                    backgroundImage: `url(${assets?.integrations_pattern || ''}), url(${BgImage || ''})`,
                    backgroundPosition: 'top center, center bottom',
                    backgroundSize: 'auto, cover',
                    backgroundRepeat: 'repeat, no-repeat'
                }}
            >
                {features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 px-4 md:px-8">
                        <div>
                            <p
                                className="w-fit p-1 rounded"
                                style={{ backgroundColor: LightBgColor }}
                            >
                                {feature.Icon}
                            </p>
                        </div>

                        <div>
                            <h3
                                style={{ color: PMTextColor }}
                                className="font-black text-lg"
                            >
                                {feature.title}
                            </h3>
                            <p className="text-[#212e44] pt-2 leading-snug">
                                {feature.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoreFeaturesSection