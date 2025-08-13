# GSAP Animations Documentation

## Overview
This project uses GSAP (GreenSock Animation Platform) to create smooth, performant animations that enhance user experience and make the website more reactive and engaging.

## Installed Dependencies
- `gsap`: ^3.13.0 - Core GSAP library with ScrollTrigger plugin

## Animation Features Implemented

### 1. Hero Section Animations
- **Hero Title**: Slides up from bottom with staggered text reveal
- **Subtitle & Description**: Cascading fade-in animations
- **CTA Buttons**: Delayed entrance with bounce effect

### 2. Header Animations
- **Header Container**: Slides down from top on page load
- **Logo**: Scales in with rotation and bounce effect
- **Navigation Items**: Staggered fade-in from top
- **Mobile Menu**: Smooth toggle animations

### 3. Scroll-Triggered Animations
- **Feature Cards**: Scale-in animation with stagger effect
- **Service Cards**: Fade-up animation triggered on scroll
- **Section Titles**: Text reveal with clip-path animation
- **CTA Section**: Fade-up animation when in viewport

### 4. Interactive Animations
- **Button Hovers**: Scale and color transitions
- **Card Hovers**: Lift effect with subtle scale
- **Feature Icons**: Continuous floating animation
- **WhatsApp Button**: Entrance animation with floating and pulse effects

### 5. UI Enhancements
- **Scroll Progress Bar**: Shows reading progress at top of page
- **Loading Animation**: Truck animation on initial page load
- **Parallax Effects**: Subtle background movement on scroll

## File Structure

```
src/
├── utils/
│   └── gsap.ts                 # GSAP utility functions and configurations
├── components/
│   ├── ui/
│   │   ├── LoadingAnimation.tsx # Initial loading screen
│   │   ├── ScrollProgress.tsx   # Scroll progress indicator
│   │   └── WhatsAppButton.tsx   # Animated WhatsApp button
│   └── layout/
│       └── Header.tsx           # Animated header component
└── app/
    └── page.tsx                 # Main page with animations
```

## Animation Utilities (`src/utils/gsap.ts`)

### Core Functions
- `animateHeroText()` - Hero section text animations
- `setupButtonAnimations()` - Interactive button effects
- `animateOnScroll()` - Scroll-triggered animations
- `animateStagger()` - Staggered element animations
- `floatingAnimation()` - Continuous floating effects
- `revealText()` - Text reveal animations
- `parallaxEffect()` - Parallax scroll effects

### Animation Presets
- `fadeInUp` - Fade in from bottom
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale in with bounce
- `stagger` - Staggered timing configuration

## Performance Considerations

1. **ScrollTrigger Optimization**: Uses `toggleActions` to prevent unnecessary re-animations
2. **Hardware Acceleration**: Animations use transform properties for GPU acceleration
3. **Conditional Loading**: Animations only initialize on client-side
4. **Cleanup**: Proper cleanup of animation instances to prevent memory leaks

## Browser Compatibility
- Modern browsers with ES6+ support
- Graceful degradation for older browsers
- Mobile-optimized animations with reduced motion support

## Customization

### Adding New Animations
1. Create animation function in `gsap.ts`
2. Import and call in component's `useEffect`
3. Add appropriate CSS classes for initial states

### Modifying Timing
- Adjust `duration` values in animation objects
- Modify `delay` and `stagger` values for timing
- Use `ease` property for different animation curves

### Performance Tuning
- Use `will-change: transform` CSS for elements that will animate
- Minimize DOM queries by caching selectors
- Use `gsap.set()` for initial states instead of CSS when possible

## Animation Timeline

```
Page Load:
0s    - Header slides down
0.3s  - Logo scales in with rotation
0.5s  - Navigation items stagger in
0.8s  - Hero title animates up
1.0s  - Hero subtitle fades in
1.3s  - Hero description appears
1.5s  - CTA buttons animate in
1.5s  - Feature icons start floating
2.0s  - WhatsApp button appears
3.0s  - WhatsApp button starts pulsing

On Scroll:
- Feature cards animate when 80% in viewport
- Service cards stagger in on scroll
- Section titles reveal with clip-path
- CTA section fades up when visible
```

## Best Practices Implemented

1. **Accessibility**: Respects `prefers-reduced-motion` settings
2. **Performance**: Uses `transform` and `opacity` for smooth animations
3. **User Experience**: Animations enhance rather than distract from content
4. **Progressive Enhancement**: Site works without JavaScript/animations
5. **Mobile Optimization**: Reduced animation complexity on mobile devices

## Troubleshooting

### Common Issues
- **Animations not working**: Check if GSAP is properly imported and ScrollTrigger is registered
- **Performance issues**: Reduce animation complexity or add `will-change` CSS property
- **Mobile problems**: Test on actual devices, not just browser dev tools

### Debug Mode
Add `markers: true` to ScrollTrigger configurations to visualize trigger points during development.

## Future Enhancements
- Add page transition animations
- Implement more complex scroll-driven animations
- Add loading states for dynamic content
- Create animation presets for different page types