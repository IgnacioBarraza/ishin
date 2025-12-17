'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Heart,
  User,
  Settings,
  LogOut,
  Calendar,
  FileText,
  ChartColumn,
  StickyNote,
  Pill,
  LayoutDashboard,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', label: 'Panel Principal', icon: LayoutDashboard },
  { href: '/profile', label: 'Mi Perfil', icon: User },
  { href: '/calendar', label: 'Calendario', icon: Calendar },
  { href: '/history', label: 'Historial Medico', icon: FileText },
  { href: '/medications', label: 'Medicamentos', icon: Pill },
  { href: '/vitals', label: 'Signos Vitales', icon: Heart },
  { href: '/metrics', label: 'Metricas', icon: ChartColumn },
  { href: '/notes', label: 'Notas', icon: StickyNote },
  { href: '/settings', label: 'Configuración', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col h-full w-full">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">
              医
            </span>
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-sidebar-foreground">
              Ishin
            </h1>
            <p className="text-xs text-muted-foreground">
              Tu salud, organizada
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary/10 text-primary sakura-accent'
                  : 'text-sidebar-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon
                className={cn('h-5 w-5', isActive && 'text-primary')}
              />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Usuario
            </p>
            <p className="text-xs text-muted-foreground truncate">
              usuario@email.com
            </p>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
