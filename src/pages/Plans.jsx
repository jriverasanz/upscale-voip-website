import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Plans = () => {
  const [clickedPlan, setClickedPlan] = useState(null);
  const plans = [
    {
      name: 'Rocket Pack',
      price: '$25',
      period: 'per user/month',
      description: 'For small teams wanting a powerful, professional phone system.',
      features: [
        'Auto Attendants',
        'Mobile & Web Apps',
        'Voicemail-to-Email',
        'Basic Call Management Tools'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Starship Pack',
      price: '$35',
      period: 'per user/month',
      description: 'For growing teams needing advanced features and integrations.',
      features: [
        'Everything in Rocket',
        'Business Text Messaging',
        'Call Recording',
        'Enhanced Reporting',
        'CRM Integrations'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Satellite Pack',
      price: '$45',
      period: 'per user/month',
      description: 'For large teams requiring enterprise-grade capabilities.',
      features: [
        'Everything in Starship',
        'Video Conferencing',
        'Team Messaging',
        'Custom Integrations',
        'Priority Support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const includedFeatures = [
    'Unlimited calling in US & Canada',
    'HD voice and video',
    '24/7 customer support',
    '99.999% uptime SLA',
    'Secure data encryption',
    'Free number porting',
    'Unlimited extensions',
    'Mobile and desktop apps'
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards and bank transfers.'
    },
    {
      question: 'What support options are available?',
      answer: 'All plans include business hours email and chat support. Phone support is available for Business and Enterprise plans.'
    }
  ];

  return (
    <div className="font-body text-brand-charcoal min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-5xl text-brand-navy sm:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-charcoal/70">
            All the features you need to communicate with your team and customers. No hidden fees, no contracts.
          </p>
        </div>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center my-8">
        <div className="bg-gray-200 p-1 rounded-lg">
          <button className="px-6 py-2 rounded-md bg-white text-gray-900 font-medium shadow-sm">
            Monthly
          </button>
          <button className="px-6 py-2 rounded-md text-gray-600 font-medium">
            Annual (Save 20%)
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform ${
                plan.popular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200'
              } ${
                clickedPlan === plan.name 
                  ? 'scale-105 shadow-2xl ring-4 ring-brand-violet/50' 
                  : 'hover:scale-102 hover:shadow-xl'
              }`}
              onClick={() => setClickedPlan(plan.name === clickedPlan ? null : plan.name)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h2 className={`text-2xl font-display ${plan.popular ? 'text-brand-navy' : 'text-brand-navy'}`}>{plan.name}</h2>
                <p className="mt-4 text-brand-charcoal/70">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-display text-brand-navy">{plan.price}</span>
                  <span className="ml-1 text-lg font-medium text-brand-slate">{plan.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-brand-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    className={`w-full px-6 py-3 border border-transparent text-base font-medium text-white text-center ${
                      plan.popular ? 'bg-[#97499c] hover:bg-[#7a387d]' : 'bg-[#97499c] hover:bg-[#7a387d]'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#97499c] rounded-[80px]`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* All Plans Include Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl text-brand-navy">
              All plans include
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-charcoal">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl text-brand-navy">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-xl text-brand-charcoal/70">
              Can't find the answer you're looking for? <Link to="/contact" className="text-brand-violet hover:text-brand-violet/80">Contact our support</Link>.
            </p>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-brand-navy">{faq.question}</h3>
                <p className="mt-2 text-brand-charcoal/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#231f20]">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl lg:text-4xl text-white">
            <span className="block">Start your new communication journey now.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white/80">
            Get started with modern VoIP solutions today.
          </p>
          <button className="mt-8 w-full flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium text-brand-violet bg-white hover:bg-brand-softblue md:py-4 md:text-lg md:px-10 rounded-[80px]">
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
