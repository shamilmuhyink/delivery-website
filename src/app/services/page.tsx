import Link from 'next/link'
import { FiClock, FiTruck, FiPackage, FiGlobe, FiShield, FiDollarSign } from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: FiClock,
      title: 'Same Day Delivery',
      description: 'Get your packages delivered within the same day across UAE',
      features: [
        'Pickup within 2 hours',
        'Delivery within 6-8 hours',
        'Real-time tracking',
        'SMS & email notifications'
      ],
      pricing: 'Starting from AED 25',
      color: 'primary'
    },
    {
      icon: FiTruck,
      title: 'Express Delivery',
      description: 'Fast next-day delivery service for urgent requirements',
      features: [
        'Next-day delivery guarantee',
        'Nationwide coverage',
        'Priority handling',
        'Insurance included'
      ],
      pricing: 'Starting from AED 15',
      color: 'secondary'
    },
    {
      icon: FiPackage,
      title: 'Standard Delivery',
      description: 'Reliable and affordable delivery within 2-3 business days',
      features: [
        '2-3 business days delivery',
        'Cost-effective solution',
        'Secure packaging',
        'Proof of delivery'
      ],
      pricing: 'Starting from AED 10',
      color: 'yellow'
    },
    {
      icon: FiGlobe,
      title: 'International Shipping',
      description: 'Send packages worldwide with our international shipping service',
      features: [
        'Global coverage',
        'Customs clearance',
        'Door-to-door service',
        'Multiple shipping options'
      ],
      pricing: 'Starting from AED 50',
      color: 'purple'
    }
  ]

  const additionalServices = [
    {
      icon: FiShield,
      title: 'Package Insurance',
      description: 'Protect your valuable items with comprehensive insurance coverage'
    },
    {
      icon: FiDollarSign,
      title: 'Cash on Delivery',
      description: 'Collect payments on behalf of your business with our COD service'
    },
    {
      icon: FiPackage,
      title: 'Packaging Service',
      description: 'Professional packaging service to ensure safe delivery'
    }
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Delivery Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of delivery solutions designed to meet 
            your specific needs and budget requirements.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colorClasses = {
              primary: 'bg-primary-100 text-primary-600',
              secondary: 'bg-secondary-100 text-secondary-600',
              yellow: 'bg-yellow-100 text-yellow-600',
              purple: 'bg-purple-100 text-purple-600'
            }

            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">{service.pricing}</div>
                  <Link href="/contact" className="btn-primary">
                    Get Quote
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Coverage Area */}
        <div className="bg-primary-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Service Coverage Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'].map((emirate) => (
              <div key={emirate} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-gray-900">{emirate}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            We provide delivery services across all seven emirates of the UAE
          </p>
        </div>

        {/* Pricing Information */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Pickup and delivery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Real-time tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  SMS notifications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Customer support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Additional Charges:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Fuel surcharge may apply</li>
                <li>• Remote area delivery charges</li>
                <li>• Special handling for fragile items</li>
                <li>• Weekend and holiday delivery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Ship?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get an instant quote for your delivery needs or contact our team for custom solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Instant Quote
            </Link>
            <Link href="tel:+971501234567" className="btn-outline text-lg px-8 py-4">
              Call: +971 50 123 4567
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}