'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What areas do you deliver to?',
          answer: 'We provide delivery services across all seven emirates of the UAE: Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain. We also offer international shipping to selected countries.'
        },
        {
          question: 'What are your operating hours?',
          answer: 'We operate 24/7 for deliveries. Our customer service is available from 8 AM to 10 PM daily. For urgent deliveries outside business hours, you can contact us via WhatsApp or our emergency hotline.'
        },
        {
          question: 'How can I track my package?',
          answer: 'You can track your package using the tracking number provided via SMS and email. Visit our tracking page, enter your tracking number, and get real-time updates on your delivery status.'
        },
        {
          question: 'Do you provide insurance for packages?',
          answer: 'Yes, we offer comprehensive insurance coverage for your packages. Basic insurance is included in all our services, and additional coverage is available for high-value items.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      faqs: [
        {
          question: 'How are delivery charges calculated?',
          answer: 'Delivery charges are based on several factors including distance, package weight and size, delivery speed, and any special handling requirements. Contact us for a personalized quote.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit/debit cards, bank transfers, and digital payments. For business accounts, we also offer monthly billing and credit terms.'
        },
        {
          question: 'Do you offer bulk delivery discounts?',
          answer: 'Yes, we offer attractive discounts for bulk deliveries and regular customers. Contact our sales team to discuss volume pricing and corporate packages.'
        },
        {
          question: 'Are there any additional charges?',
          answer: 'Additional charges may apply for remote areas, weekend/holiday deliveries, special handling, and fuel surcharges. All charges are clearly communicated before booking.'
        }
      ]
    },
    {
      title: 'Delivery Services',
      faqs: [
        {
          question: 'What is same-day delivery?',
          answer: 'Same-day delivery means your package will be picked up and delivered within the same day. Pickup is usually within 2 hours of booking, and delivery within 6-8 hours depending on the distance.'
        },
        {
          question: 'Can I schedule a specific delivery time?',
          answer: 'Yes, we offer scheduled delivery options. You can choose specific time slots for delivery, though this may incur additional charges. Contact us to arrange scheduled deliveries.'
        },
        {
          question: 'What if the recipient is not available?',
          answer: 'If the recipient is not available, we will attempt delivery up to 3 times. We also offer safe drop-off options, delivery to neighbors (with permission), or holding at our facility for pickup.'
        },
        {
          question: 'Do you deliver on weekends and holidays?',
          answer: 'Yes, we provide delivery services on weekends and public holidays. Additional charges may apply for weekend and holiday deliveries.'
        }
      ]
    },
    {
      title: 'Package Requirements',
      faqs: [
        {
          question: 'What items can I send?',
          answer: 'We accept most general items including documents, electronics, clothing, gifts, and business materials. Prohibited items include hazardous materials, illegal substances, and perishable food items.'
        },
        {
          question: 'What are the size and weight limits?',
          answer: 'Standard packages can be up to 30kg and 100cm in any dimension. For larger or heavier items, we offer special handling services. Contact us for oversized package requirements.'
        },
        {
          question: 'Do you provide packaging services?',
          answer: 'Yes, we offer professional packaging services to ensure your items are properly protected during transit. This includes bubble wrap, boxes, and special packaging for fragile items.'
        },
        {
          question: 'How should I prepare my package?',
          answer: 'Ensure items are properly packed in sturdy boxes or envelopes. Include clear delivery addresses and contact information. For fragile items, use appropriate padding and mark the package clearly.'
        }
      ]
    },
    {
      title: 'Business Services',
      faqs: [
        {
          question: 'Do you offer corporate accounts?',
          answer: 'Yes, we provide dedicated corporate accounts with special rates, monthly billing, dedicated account managers, and priority support for businesses with regular delivery needs.'
        },
        {
          question: 'Can you handle e-commerce deliveries?',
          answer: 'Absolutely! We specialize in e-commerce deliveries with features like cash-on-delivery, return management, bulk shipping, and integration with popular e-commerce platforms.'
        },
        {
          question: 'Do you provide cash-on-delivery services?',
          answer: 'Yes, we offer cash-on-delivery (COD) services where we collect payment from the recipient and transfer it to you. This is perfect for e-commerce businesses and online sellers.'
        },
        {
          question: 'What reporting do you provide for business customers?',
          answer: 'Business customers receive detailed delivery reports, analytics, and tracking data. We provide monthly statements, delivery performance metrics, and custom reporting as needed.'
        }
      ]
    }
  ]

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our delivery services, pricing, and policies
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary-50 px-6 py-4 border-b">
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => {
                  const itemIndex = categoryIndex * 100 + faqIndex
                  const isOpen = openItems.includes(itemIndex)
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <FiChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <FiChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our customer support team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/971501234567?text=I have a question about your delivery services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              WhatsApp Support
            </a>
            <a 
              href="tel:+971501234567"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              Call: +971 50 123 4567
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Contact Form
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Get a Quote</h3>
            <p className="text-gray-600 mb-4">Need pricing for your delivery requirements?</p>
            <a href="/contact" className="text-primary-600 font-semibold hover:text-primary-700">
              Request Quote →
            </a>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Track Package</h3>
            <p className="text-gray-600 mb-4">Check the status of your current delivery</p>
            <a href="/track" className="text-primary-600 font-semibold hover:text-primary-700">
              Track Now →
            </a>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Services</h3>
            <p className="text-gray-600 mb-4">Learn more about our delivery options</p>
            <a href="/services" className="text-primary-600 font-semibold hover:text-primary-700">
              View Services →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}