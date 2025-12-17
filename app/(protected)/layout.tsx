'use client'

import { BottonNav } from '@/components/navigation/bottomNav/bottomNav'
import { Sidebar } from '@/components/navigation/sidebar/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { ReactNode } from 'react'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex w-full bg-background washi-texture">
      {/* Sidebar desktop */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50">
        <Sidebar />
      </aside>
      {/* Main content */}
      <main className="flex-1 lg:ml-64 overflow-x-hidden">
        <div className="min-h-screen p-4 lg:p-8 pb-24 lg:pb-8">{children}</div>
      </main>
      {/* Bottom nav mobile */}
      <BottonNav />
      <Toaster />
    </div>
  )
}
