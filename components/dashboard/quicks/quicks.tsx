import { Heart, Activity, Droplets, Scale } from 'lucide-react'

const stats = [
  {
    label: 'Presión Arterial',
    value: '120/80',
    unit: 'mmHg',
    icon: Activity,
    trend: 'normal',
    color: 'text-accent',
  },
  {
    label: 'Frecuencia Cardíaca',
    value: '72',
    unit: 'bpm',
    icon: Heart,
    trend: 'normal',
    color: 'text-primary',
  },
  {
    label: 'Glucosa',
    value: '95',
    unit: 'mg/dL',
    icon: Droplets,
    trend: 'normal',
    color: 'text-ishin-gold',
  },
  {
    label: 'Peso',
    value: '68.5',
    unit: 'kg',
    icon: Scale,
    trend: 'stable',
    color: 'text-secondary',
  },
]

export function QuickStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="stat-card animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {stat.label}
            </span>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-display font-bold text-foreground">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.unit}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground capitalize">
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
