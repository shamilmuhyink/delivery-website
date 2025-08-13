'use client'

import { useEffect } from 'react'
import { cleanupBrowserExtensionAttributes, suppressExtensionHydrationWarnings } from '@/utils/hydration'

interface ClientBodyProps {
  children: React.ReactNode
}

/**
 * Client-side body wrapper to handle browser extension interference
 * This component ensures that browser extensions don't cause hydration mismatches
 */
const ClientBody = ({ children }: ClientBodyProps) => {
  useEffect(() => {
    // Initialize hydration warning suppression
    suppressExtensionHydrationWarnings()
    
    // Clean up browser extension attributes
    cleanupBrowserExtensionAttributes()
    
    // Set up a mutation observer to handle dynamic extension attribute additions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.target === document.body) {
          cleanupBrowserExtensionAttributes()
        }
      })
    })
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [
        'cz-shortcut-listen',
        'data-new-gr-c-s-check-loaded',
        'data-gr-ext-installed',
        'data-lt-installed'
      ]
    })
    
    return () => {
      observer.disconnect()
    }
  }, [])

  return <>{children}</>
}

export default ClientBody