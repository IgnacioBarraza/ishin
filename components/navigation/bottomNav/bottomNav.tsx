import { cn } from '@/lib/utils'
import { Calendar, FileText, User, Pill, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const bottomNavItems = [
  { href: '/dashboard', label: 'Inicio', icon: LayoutDashboard },
  { href: '/calendar', label: 'Calendario', icon: Calendar },
  { href: '/history', label: 'Historial', icon: FileText },
  { href: '/medications', label: 'Medicinas', icon: Pill },
  { href: '/profile', label: 'Mi Perfil', icon: User },
  // { href: '/vitals', label: 'Signos Vitales', icon: Heart },
  // { href: '/metrics', label: 'Metricas', icon: ChartColumn },
  // { href: '/notes', label: 'Notas', icon: StickyNote },
  // { href: '/settings', label: 'Configuración', icon: Settings },
]

export function BottonNav() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-lg">
        <div className="flex items-center justify-around h-16 px-2 max-w-lg mx-auto">
          {bottomNavItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center flex-1 h-full py-2 px-1 transition-all duration-200',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <item.icon
                  className={cn(
                    'h-5 w-5 mb-1 transition-transform',
                    isActive && 'scale-110'
                  )}
                />
                <span
                  className={cn(
                    'text-[10px] font-medium truncate',
                    isActive && 'font-semibold'
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
      {/* Safe area padding for iOS */}
      <div className="h-safe-area-inset-bottom bg-card/95" />
    </nav>
  )
}
