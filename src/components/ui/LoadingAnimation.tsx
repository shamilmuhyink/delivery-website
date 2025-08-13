'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { FiTruck } from 'react-icons/fi'

const LoadingAnimation = ({ onComplete }: { onComplete?: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete()
      }
    })

    // Animate loading screen
    tl.fromTo('.loading-screen', 
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    )
    .fromTo('.loading-truck', 
      { x: -100, opacity: 0, rotation: -10 },
      { x: 0, opacity: 1, rotation: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo('.loading-text', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
    .to('.loading-truck', {
      x: window.innerWidth + 100,
      rotation: 5,
      duration: 1.5,
      ease: 'power2.in',
      delay: 1
    })
    .to('.loading-screen', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.5')

  }, [onComplete])

  return (
    <div className="loading-screen fixed inset-0 bg-gradient-to-br from-primary-50 to-blue-100 flex items-center justify-center z-[9999] opacity-0">
      <div className="text-center">
        <div className="loading-truck mb-4 opacity-0">
          <FiTruck className="h-16 w-16 text-primary-600 mx-auto" />
        </div>
        <div className="loading-text opacity-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">UAE Delivery Express</h2>
          <p className="text-gray-600">Loading your delivery experience...</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation