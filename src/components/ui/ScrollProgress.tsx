'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollProgress = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)

      // Create scroll progress animation
      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      })

      // Animate progress bar entrance
      gsap.fromTo('.scroll-progress-container',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1 }
      )
    }
  }, [])

  return (
    <div className="scroll-progress-container fixed top-0 left-0 w-full h-1 bg-gray-200 z-50 opacity-0">
      <div 
        className="scroll-progress h-full bg-gradient-to-r from-primary-500 to-primary-600 origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}

export default ScrollProgress