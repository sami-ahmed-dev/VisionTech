import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VisionTech - Professional Camera Services',
  description: 'Expert photography, videography, camera repair, and drone services in Hyderabad. Professional camera solutions for all your visual needs.',
  keywords: 'photography, videography, camera repair, drone services, Hyderabad, VisionTech',
  authors: [{ name: 'VisionTech' }],
  openGraph: {
    title: 'VisionTech - Professional Camera Services',
    description: 'Expert photography, videography, camera repair, and drone services in Hyderabad.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}