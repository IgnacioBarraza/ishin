import { ReactNode } from 'react'
import { Toaster } from 'sonner'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex w-full bg-background washi-texture">
      <main className="flex-1 lg:ml-64 overflow-x-hidden">
        <div className="min-h-screen p-4 lg:p-8 pb-24 lg:pb-8">{children}</div>
      </main>
      <Toaster />
    </div>
  )
}
