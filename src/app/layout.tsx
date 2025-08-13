import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import ClientBody from '@/components/layout/ClientBody'
import ScrollProgress from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'UAE Delivery Express - Fast & Reliable Delivery Services',
  description: 'Professional delivery services across UAE. Fast, reliable, and affordable delivery solutions for businesses and individuals.',
  keywords: 'UAE delivery, Dubai delivery, Abu Dhabi delivery, express delivery, courier service',
  authors: [{ name: 'UAE Delivery Express' }],
  robots: 'index, follow',
  openGraph: {
    title: 'UAE Delivery Express - Fast & Reliable Delivery Services',
    description: 'Professional delivery services across UAE. Fast, reliable, and affordable delivery solutions.',
    type: 'website',
    locale: 'en_AE',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <ScrollProgress />
        <ClientBody>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ClientBody>
      </body>
    </html>
  )
}