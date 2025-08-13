/**
 * Utility functions to help debug and prevent hydration mismatches
 */

/**
 * Logs hydration mismatches in development mode
 */
export const logHydrationMismatch = (element: string, serverValue: any, clientValue: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Hydration mismatch detected on ${element}:`, {
      server: serverValue,
      client: clientValue,
      timestamp: new Date().toISOString()
    })
  }
}

/**
 * Checks if code is running on the client side
 */
export const isClient = () => typeof window !== 'undefined'

/**
 * Safe way to access client-only APIs
 */
export const safeClientAccess = <T>(clientFn: () => T, fallback: T): T => {
  return isClient() ? clientFn() : fallback
}

/**
 * Hook to detect and handle browser extension interference
 */
export const cleanupBrowserExtensionAttributes = () => {
  if (!isClient()) return

  const body = document.body
  const extensionAttributes = [
    'cz-shortcut-listen',
    'data-new-gr-c-s-check-loaded', 
    'data-gr-ext-installed',
    'data-lt-installed',
    'spellcheck'
  ]

  extensionAttributes.forEach(attr => {
    if (body.hasAttribute(attr)) {
      body.removeAttribute(attr)
      if (process.env.NODE_ENV === 'development') {
        console.log(`Removed browser extension attribute: ${attr}`)
      }
    }
  })
}

/**
 * Suppresses hydration warnings for known browser extension interference
 */
export const suppressExtensionHydrationWarnings = () => {
  if (!isClient() || process.env.NODE_ENV !== 'development') return

  // Override console.error to filter out known extension-related hydration warnings
  const originalError = console.error
  console.error = (...args) => {
    const message = args[0]
    if (
      typeof message === 'string' && 
      (message.includes('cz-shortcut-listen') ||
       message.includes('data-new-gr-c-s-check-loaded') ||
       message.includes('data-gr-ext-installed') ||
       message.includes('data-lt-installed'))
    ) {
      // Suppress these specific warnings
      return
    }
    originalError.apply(console, args)
  }
}