import { Calendar, Sun } from 'lucide-react'

export default function Dashboard() {
  const today = new Date()
  const dateStr = today.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
            Buenos días, Usuario
          </h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-1">
            <Calendar className="h-4 w-4" />
            <span className="capitalize">{dateStr}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Sun className="h-4 w-4 text-ishin-gold" />
          <span>Ciudad de México, 22°C</span>
        </div>
      </div>

      {/* Quick Stats */}
      <section>
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
          Últimos Registros
        </h2>
        {/* <QuickStats /> */}
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* <VitalsChart /> */}
          {/* <RecentRecords /> */}
        </div>

        {/* Right Column - Widgets */}
        <div className="space-y-6">
          {/* <Reminders /> */}
          {/* <UpcomingAppointments /> */}
          {/* <ActiveMedications /> */}
        </div>
      </div>
    </div>
  )
}
