import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { Analytics } from '@vercel/analytics/react'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import Header from '@/components/Header'

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/map-elements.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/background.webp" />
      </head>
      <body>
        <Header />
        {children}
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  )
}
