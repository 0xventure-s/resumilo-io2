import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reumilo.io',
  description: 'Reumi tus documentos en segundos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className={cn( "min-h-screen font-sans antialiased grainy", inter.className
      )}>
      <Navbar />
        {children}
        
        </body>
        </Providers>
    </html>
  )
}
