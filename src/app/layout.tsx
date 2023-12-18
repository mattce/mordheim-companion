import React from 'react'

import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mordheim Companion',
  description: 'A simple Mordheim Companion',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-4">{children}</body>
    </html>
  )
}
