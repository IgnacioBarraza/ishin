'use client'

import { VitalsChart } from '@/components/dashboard/charts/vitals'
import { QuickStats } from '@/components/dashboard/quicks/quicks'
import {
  containerVariants,
  fadeInPage,
  itemVariants,
} from '@/lib/utils/animations'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function Dashboard() {
  const today = new Date()
  const dateStr = today.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <motion.div
      variants={fadeInPage}
      initial="initial"
      animate="animate"
      className="space-y-6 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <header>
          <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
            Buenos días, Usuario
          </h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-1">
            <Calendar className="h-4 w-4" />
            <span className="capitalize">{dateStr}</span>
          </p>
        </header>
      </div>

      {/* Quick Stats */}
      <motion.div variants={containerVariants}>
        <motion.section variants={itemVariants}>
          <h2 className="text-sm font-medium text-black uppercase tracking-wide mb-3">
            Últimos Registros
          </h2>
          <QuickStats />
        </motion.section>

        {/* Main Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <VitalsChart />
            {/* <RecentRecords /> */}
          </div>

          {/* Right Column - Widgets */}
          <div className="space-y-6">
            {/* <Reminders /> */}
            {/* <UpcomingAppointments /> */}
            {/* <ActiveMedications /> */}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
