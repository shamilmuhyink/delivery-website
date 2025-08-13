'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { useEffect } from 'react'
import { gsap } from 'gsap'

const WhatsAppButton = () => {
  const phoneNumber = '+918078386890' // UAE phone number
  const message = 'Hello! I would like to inquire about your delivery services.'
  
  useEffect(() => {
    // Animate WhatsApp button entrance
    gsap.fromTo('.whatsapp-btn', 
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', delay: 2 }
    )

    // Add floating animation
    gsap.to('.whatsapp-btn', {
      y: -5,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      delay: 3
    })

    // Pulse animation
    gsap.to('.whatsapp-icon', {
      scale: 1.2,
      duration: 1.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      delay: 3
    })
  }, [])
  
  const handleWhatsAppClick = () => {
    // Add click animation
    gsap.to('.whatsapp-btn', {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    })
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-btn fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 opacity-0"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon h-6 w-6" />
    </button>
  )
}

export default WhatsAppButton