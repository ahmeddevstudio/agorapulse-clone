import { Check, ChevronDown, CircleAlert, LockKeyhole, X } from 'lucide-react'
import React, { useState } from 'react'

const SecurityComparePricing = () => {

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const securityFeatures = [
        {
            title: "Two-factor authentication (2FA)",
            message: 'Add an extra layer of security to your account with two-factor authentication',
            availability: [true, true, true, true],
        },
        {
            title: "Profile-level access restrictions",
            message: 'Control who can access specific social profiles within your team',
            availability: [true, true, true, true],
        },
        {
            title: "Profile Connector",
            message: 'Securely invite clients or execs to connect their social profiles',
            availability: [false, false, true, true],
        },
        {
            title: "Custom roles & permissions",
            message: "Create custom roles with detailed access controls tailored to your team's structure and workflows",
            availability: [false, false, false, true],
        },
        {
            title: "Feature visibility controls",
            message: 'Let team members only see the features they actually need and use',
            availability: [false, false, false, true],
        },
        {
            title: "Single Sign-On (SSO)",
            message: "Enable secure authentication through your organization's identity provider",
            availability: [false, false, false, true],
        },
    ];

    return (
        <div className='pt-5'>
            <div className='bg-[#f9f9fa] py-5 px-8 rounded-xl'>
                <div>
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <div className='flex gap-5 items-center'>
                            <div className='bg-white p-2 rounded-full'>
                                <LockKeyhole size={24} color='#3a9efe' />
                            </div>
                            <h4 className='text-2xl font-superbold text-[#212e44]'>Security</h4>
                        </div>

                        <div>
                            <ChevronDown size={20} strokeWidth={2.5} className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                    </div>

                    <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                        }`}>
                        <div className="min-h-0 overflow-hidden">
                            <div className='mt-10 bg-white rounded-xl py-3 px-5 flex flex-col gap-8'>
                                {securityFeatures.map((feature, idx) => (
                                    <div key={idx}>
                                        <div className='flex lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0'>
                                            <div className='flex gap-2 items-center'>
                                                <p className='text-[#212e44] font-bold'>{feature.title}</p>
                                                <CircleAlert
                                                    size={18}
                                                    className="cursor-pointer text-[#212e44]"
                                                    onClick={() => setSelectedMessage(feature.message)}
                                                />
                                            </div>

                                            <div className="flex gap-12 items-center overflow-x-auto scrollbar-none">
                                                {feature.availability.map((value, index) => (
                                                    <div key={index} className="w-28 flex justify-center">
                                                        {typeof value === "boolean" ? (
                                                            value ? (
                                                                <div className='bg-[#e8f4ff] rounded-full h-5 w-5 flex items-center justify-center'>
                                                                    <Check strokeWidth={2.5} className="text-[#3a9efe] h-4 w-4" />
                                                                </div>
                                                            ) : (
                                                                <div className='bg-[#fff9f4] rounded-full h-5 w-5 flex items-center justify-center'>
                                                                    <X strokeWidth={2.5} className="text-[#ff6726] h-4 w-4" />
                                                                </div>
                                                            )
                                                        ) : (
                                                            <p className="text-[#212e44] font-medium">{value}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedMessage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                    onClick={() => setSelectedMessage(null)}
                >
                    <div
                        className="relative w-full max-w-2xl rounded-[18px] bg-white px-8 py-12 md:px-12 md:py-12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="text-[#212e44] text-lg font-medium">
                            {selectedMessage}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SecurityComparePricing