import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Common animation configurations
export const animations = {
  // Fade in from bottom
  fadeInUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  },
  
  // Fade in from left
  fadeInLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
  },
  
  // Fade in from right
  fadeInRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
  },
  
  // Scale in
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
  },
  
  // Stagger animation for multiple elements
  stagger: {
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2
  }
}

// Animation helper functions
export const animateOnScroll = (
  element: string | Element,
  animation: any,
  trigger?: string
) => {
  if (typeof window === 'undefined') return

  gsap.fromTo(element, animation.from, {
    ...animation.to,
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  })
}

export const animateStagger = (
  elements: string,
  animation: any,
  trigger?: string
) => {
  if (typeof window === 'undefined') return

  gsap.fromTo(elements, animation.from, {
    ...animation.to,
    stagger: 0.2,
    scrollTrigger: {
      trigger: trigger || elements,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
}

// Hero text animation
export const animateHeroText = () => {
  if (typeof window === 'undefined') return

  const tl = gsap.timeline()
  
  tl.fromTo('.hero-title', 
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  )
  .fromTo('.hero-subtitle',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.5'
  )
  .fromTo('.hero-description',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.3'
  )
  .fromTo('.hero-buttons',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.2'
  )
}

// Button hover animations
export const setupButtonAnimations = () => {
  if (typeof window === 'undefined') return

  // Primary button hover effect
  gsap.utils.toArray('.btn-primary').forEach((button: any) => {
    const tl = gsap.timeline({ paused: true })
    
    tl.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
    
    button.addEventListener('mouseenter', () => tl.play())
    button.addEventListener('mouseleave', () => tl.reverse())
  })
  
  // Card hover animations
  gsap.utils.toArray('.feature-card, .service-card').forEach((card: any) => {
    const tl = gsap.timeline({ paused: true })
    
    tl.to(card, {
      y: -10,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    })
    
    card.addEventListener('mouseenter', () => tl.play())
    card.addEventListener('mouseleave', () => tl.reverse())
  })
}

// Floating animation for icons
export const floatingAnimation = (element: string | Element) => {
  if (typeof window === 'undefined') return

  gsap.to(element, {
    y: -10,
    duration: 2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1
  })
}

// Counter animation
export const animateCounter = (element: string | Element, endValue: number) => {
  if (typeof window === 'undefined') return

  const obj = { value: 0 }
  
  gsap.to(obj, {
    value: endValue,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      if (typeof element === 'string') {
        const el = document.querySelector(element)
        if (el) el.textContent = Math.round(obj.value).toString()
      } else {
        element.textContent = Math.round(obj.value).toString()
      }
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })
}

// Reveal animation for text
export const revealText = (element: string) => {
  if (typeof window === 'undefined') return

  gsap.fromTo(element, 
    { 
      opacity: 0,
      y: 50,
      clipPath: 'inset(100% 0 0 0)'
    },
    {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )
}

// Parallax effect
export const parallaxEffect = (element: string, speed: number = 0.5) => {
  if (typeof window === 'undefined') return

  gsap.to(element, {
    yPercent: -50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}