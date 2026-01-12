/**
 * Medication record interface
 * Represents a medication with dosage, schedule, and status information
 * Supports multiple schedule types (daily, interval-based, or as-needed)
 */
export interface Medication {
  id: string
  name: string
  dosage: string
  userId: string

  /** Schedule and frequency management */
  scheduleType: 'daily' | 'interval' | 'as_needed'
  times: ScheduleTime[]
  frequencyText: string

  /** Status and control properties */
  isActive: boolean
  startDate: string
  endDate?: string

  /** Inventory management */
  stockCount?: number
  totalQuantity?: number

  /** UI and categorization */
  color: string
  category: 'pill' | 'syrup' | 'injection' | 'drops' | 'other'

  /** Additional information */
  instructions?: string

  /** Sync and audit metadata */
  createdAt: string
  updatedAt: string
}

/**
 * Schedule time interface
 * Defines when a medication should be taken within a schedule
 * @property day - Day of the week identifier (2-character code: 'mo', 'tu', 'we', 'th', 'fr', 'sa', 'su')
 * @property time - Time of day for medication intake (format: 'HH:MM AM/PM', e.g., '02:00 PM')
 */
interface ScheduleTime {
  day: string
  time: string
}
