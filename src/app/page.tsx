'use client'

import Link from "next/link";
import {
  FiTruck,
  FiClock,
  FiShield,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";
import { useEffect } from "react";
import { 
  animateHeroText, 
  setupButtonAnimations, 
  animateOnScroll, 
  animateStagger,
  floatingAnimation,
  animations,
  revealText
} from "@/utils/gsap";

export default function Home() {
  useEffect(() => {
    // Initialize animations after component mounts
    animateHeroText()
    setupButtonAnimations()
    
    // Animate section titles
    revealText('.section-title')
    
    // Animate features section
    animateStagger('.feature-card', animations.scaleIn, '.features-section')
    
    // Animate services section
    animateStagger('.service-card', animations.fadeInUp, '.services-section')
    
    // Animate CTA section
    animateOnScroll('.cta-content', animations.fadeInUp, '.cta-section')
    
    // Add floating animation to feature icons
    setTimeout(() => {
      floatingAnimation('.feature-icon')
    }, 1500)
    
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6 opacity-0">
              <span className="hero-subtitle block">Fast & Reliable</span>
              <span className="text-primary-600 block">Delivery Services</span>
              <span className="text-2xl md:text-3xl font-normal text-gray-600 block mt-2">
                Across UAE
              </span>
            </h1>

            <p className="hero-description text-xl text-gray-600 mb-8 max-w-3xl mx-auto opacity-0">
              Your trusted delivery partner in the UAE. We provide same-day
              delivery, express shipping, and reliable courier services for
              businesses and individuals.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center opacity-0">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Instant Quote
                <FiArrowRight className="ml-2" />
              </Link>

              <Link href="/track" className="btn-outline text-lg px-8 py-4">
                Track Your Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose UAE Delivery Express?
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine speed, reliability, and affordability to deliver
              exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card text-center p-6 rounded-lg hover:shadow-lg transition-shadow opacity-0 cursor-pointer">
              <div className="feature-icon bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="h-8 w-8 text-primary-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>

              <p className="text-gray-600">
                Same-day and express delivery options available across UAE
              </p>
            </div>

            <div className="feature-card text-center p-6 rounded-lg hover:shadow-lg transition-shadow opacity-0 cursor-pointer">
              <div className="feature-icon bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="h-8 w-8 text-secondary-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Service
              </h3>

              <p className="text-gray-600">
                Round-the-clock delivery service for urgent requirements
              </p>
            </div>

            <div className="feature-card text-center p-6 rounded-lg hover:shadow-lg transition-shadow opacity-0 cursor-pointer">
              <div className="feature-icon bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="h-8 w-8 text-yellow-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Safe
              </h3>

              <p className="text-gray-600">
                Your packages are insured and handled with utmost care
              </p>
            </div>

            <div className="feature-card text-center p-6 rounded-lg hover:shadow-lg transition-shadow opacity-0 cursor-pointer">
              <div className="feature-icon bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="h-8 w-8 text-purple-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                5-Star Rated
              </h3>

              <p className="text-gray-600">
                Trusted by thousands of customers across UAE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive delivery solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow opacity-0 cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Same Day Delivery
              </h3>

              <p className="text-gray-600 mb-6">
                Need it delivered today? Our same-day delivery service ensures
                your packages reach their destination within hours.
              </p>

              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Pickup within 2 hours</li>
                <li>• Delivery within 6-8 hours</li>
                <li>• Real-time tracking</li>
              </ul>

              <Link
                href="/services"
                className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
              >
                Learn More <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow opacity-0 cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Express Delivery
              </h3>

              <p className="text-gray-600 mb-6">
                Fast and reliable express delivery service for urgent business
                and personal needs across UAE.
              </p>

              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Next-day delivery</li>
                <li>• Nationwide coverage</li>
                <li>• Competitive pricing</li>
              </ul>

              <Link
                href="/services"
                className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
              >
                Learn More <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="service-card bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow opacity-0 cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Bulk Delivery
              </h3>

              <p className="text-gray-600 mb-6">
                Special rates for bulk deliveries. Perfect for e-commerce
                businesses and large-scale distribution needs.
              </p>

              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Volume discounts</li>
                <li>• Dedicated support</li>
                <li>• Flexible scheduling</li>
              </ul>

              <Link
                href="/services"
                className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
              >
                Learn More <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>

            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get an instant quote for your delivery needs or contact us for
              custom solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                Get Quote Now
                <FiArrowRight />
              </Link>

              <Link
                href="tel:+971501234567"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                Call Now: +971 50 123 4567
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}