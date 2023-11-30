import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LinkRoute',
  description: 'Open Source Redirect Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
