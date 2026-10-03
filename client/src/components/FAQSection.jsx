import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const TypewriterText = ({ text, isOpen }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setDisplayedText('');
      }, 300);
      return () => clearTimeout(timeout);
    }

    let currentIndex = 0;
    const speed = 12;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isOpen, text]);

  return <span>{isOpen ? displayedText : text}</span>;
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Agorapulse?",
      answer:
        "Agorapulse is a social media management platform that helps businesses and teams manage, publish, monitor, and analyze their social media content from one place."
    },
    {
      question: "How is Agorapulse different from other social media management tools?",
      answer:
        "Agorapulse brings publishing, social inbox, monitoring, reporting, and collaboration together in one easy-to-use platform, helping teams manage their social media more efficiently."
    },
    {
      question: "Who is Agorapulse for?",
      answer:
        "Agorapulse is designed for businesses, marketers, social media managers, agencies, and teams that manage one or multiple social media accounts."
    },
    {
      question: "Can I use Agorapulse for free?",
      answer:
        "Yes. Agorapulse offers a free plan with limited features, allowing you to manage your social media without paying for a subscription."
    },
    {
      question: "Can bigger teams or agencies use Agorapulse?",
      answer:
        "Yes. Agorapulse supports larger teams and agencies with features for collaboration, multiple users, multiple social profiles, client management, and advanced reporting."
    },
    {
      question:
        "How can I request a personalized demo to see whether Agorapulse fits my needs?",
      answer:
        "You can request a personalized demo through Agorapulse's website. A member of the team can walk you through the platform and answer questions based on your specific needs."
    },
    {
      question: "Is there an on-demand demo available?",
      answer:
        "Yes. Agorapulse provides on-demand resources that let you explore how the platform works at your own convenience."
    },
    {
      question: "I'm not sure which plan is right for me. Who do I talk to?",
      answer:
        "If you're unsure which plan fits your needs, you can contact the Agorapulse team for guidance. They can help you understand the available plans and features."
    },
    {
      question: "What kind of support is included when I sign up for Agorapulse?",
      answer:
        "Agorapulse provides customer support and resources to help you get started, learn the platform, and make the most of its social media management features."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='px-10 [@media(min-width:1400px)]:px-32 py-16 bg-[#fbfbfc]'>
      <div className='max-w-5xl mx-auto'>
        <div className='mb-12'>
          <h3 className='text-4xl text-[#021a41] font-bold tracking-tight'>
            Frequently asked questions
          </h3>
        </div>

        <div className='divide-y divide-gray-200 border-b border-gray-200'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className='py-6 transition-colors duration-200'>
                <button
                  onClick={() => toggleFaq(index)}
                  className='w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer'
                  aria-expanded={isOpen}
                >
                  <span className='text-lg md:text-xl font-semibold text-[#021a41] pr-6'>
                    {faq.question}
                  </span>
                  <div className='w-8 h-8 rounded-full flex items-center justify-center bg-white shrink-0 transition-colors'>
                    <ChevronDown
                      strokeWidth={3}
                      className={`w-5 h-5 text-[#021a41] transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-180' : ''
                        }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                >
                  <div className='overflow-hidden'>
                    <p className='text-[#021a41] text-base leading-relaxed pr-8'>
                      <TypewriterText text={faq.answer} isOpen={isOpen} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;