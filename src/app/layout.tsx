import React from 'react'
import { Inter } from 'next/font/google'

import './globals.css'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mordheim Companion',
  description: 'A simple Mordheim Companion',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
