import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { AuthProvider } from '@/components/providers/auth-provider'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ishin: Organizador de Salud Personal',
  description:
    'Ishin es un PWA organizador de salud para gestionar medicamentos, citas y signos vitales de manera segura y offline.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Ishin',
    description: 'Organizador de Salud Personal',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { color: '#0a0a0a', media: '(prefers-color-scheme: dark)' },
    { color: '#ffffff', media: '(prefers-color-scheme: light)' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="es">
      <AuthProvider>
        <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
      </AuthProvider>
    </html>
  )
}
