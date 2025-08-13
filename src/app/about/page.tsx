import { FiUsers, FiTruck, FiAward, FiHeart } from 'react-icons/fi'

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About UAE Delivery Express
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are UAE's leading delivery service provider, committed to connecting people 
            and businesses through fast, reliable, and affordable delivery solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, UAE Delivery Express started with a simple mission: to make 
              delivery services more accessible, reliable, and affordable for everyone in the UAE.
            </p>
            <p className="text-gray-600 mb-4">
              What began as a small local delivery service has grown into one of the most 
              trusted delivery networks across the Emirates, serving thousands of customers 
              daily with our commitment to excellence.
            </p>
            <p className="text-gray-600">
              Today, we continue to innovate and expand our services, always keeping our 
              customers' needs at the heart of everything we do.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide exceptional delivery services that exceed customer expectations 
              while contributing to the growth of businesses and communities across the UAE.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and innovative delivery service provider in the UAE, 
              setting new standards for speed, reliability, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Deliveries Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">7</div>
              <div className="text-gray-600">Emirates Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, ensuring your packages reach their destination safely and on time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Our customers are at the center of everything we do. Their satisfaction is our success.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every delivery, continuously improving our services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We are committed to supporting local businesses and communities across the UAE.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our dedicated team of professionals works around the clock to ensure your 
            delivery experience is seamless and satisfactory.
          </p>
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Join Our Growing Team</h3>
            <p className="text-primary-100 mb-6">
              We're always looking for passionate individuals to join our mission of 
              delivering excellence across the UAE.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              View Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}