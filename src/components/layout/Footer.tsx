import Link from 'next/link'
import { FiTruck, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <FiTruck className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">UAE Delivery Express</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted delivery partner across the UAE. We provide fast, reliable, 
              and affordable delivery services for businesses and individuals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FiPhone className="h-4 w-4 text-primary-500" />
                <span className="text-gray-300">+971 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="h-4 w-4 text-primary-500" />
                <span className="text-gray-300">info@uaedeliveryexpress.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="h-4 w-4 text-primary-500" />
                <span className="text-gray-300">Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-gray-300 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Same Day Delivery</li>
              <li className="text-gray-300">Express Delivery</li>
              <li className="text-gray-300">Bulk Delivery</li>
              <li className="text-gray-300">International Shipping</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 UAE Delivery Express. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer