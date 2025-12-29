export interface Medication {
  id: string
  name: string
  dosage: string

  // Schedules and frequency
  scheduleType: 'daily' | 'interval' | 'as_needed'
  times: string[]
  frequencyText: string

  // Status and control
  isActive: boolean
  startDate: string
  endDate?: string

  // Stock
  stockCount?: number
  totalQuantity?: number

  // UI
  color: string
  category: 'pill' | 'syrup' | 'injection' | 'drops' | 'other'

  // Instructions
  instructions?: string

  // Sync metadata
  createdAt: string
  updatedAt: string
}
