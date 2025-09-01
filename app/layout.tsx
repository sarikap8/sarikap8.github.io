import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sarika Pasumarthy - Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
  keywords: 'portfolio, developer, web development, projects',
  authors: [{ name: 'Sarika Pasumarthy' }],
  creator: 'Sarika Pasumarthy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sarikap8.github.io',
    title: 'Sarika Pasumarthy - Portfolio',
    description: 'Personal portfolio website showcasing my projects and skills',
    siteName: 'Sarika Pasumarthy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarika Pasumarthy - Portfolio',
    description: 'Personal portfolio website showcasing my projects and skills',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
