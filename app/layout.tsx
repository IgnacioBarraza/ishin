import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-zen-kaku-gothic-new',
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
      <body
        className={`${notoSansJP.variable} ${zenKakuGothicNew.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
