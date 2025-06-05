import React from 'react'
import localFont from 'next/font/local'

import './globals.css'

const fontMordheim = localFont({
  src: '../../public/Mordheim.woff2',
  variable: '--font-local-mordheim',
  display: 'swap',
})

const fontCaslon = localFont({
  src: '../../public/CaslonAntique.woff2',
  variable: '--font-local-caslon',
  display: 'swap',
})

import type { Metadata } from 'next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={[fontMordheim.variable, fontCaslon.variable].join(' ')} lang="en">
      <body className="p-4">{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Mordheim Companion',
  description: 'A simple Mordheim Companion',
}
