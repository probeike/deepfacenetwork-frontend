import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RetroSpaceBackground from '../components/RetroSpaceBackground'
import RetroChatBox from '../components/RetroChatBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deepface Network',
  description: 'The deepface planetary exploration network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <RetroSpaceBackground />
        <RetroChatBox />
        {children}
      </body>
    </html>
  )
}