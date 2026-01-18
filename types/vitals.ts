import { BaseEntity } from './db'

/**
 * Vitals record interface
 * Represents a vital sign record or medical measurement
 */
export interface Vitals extends BaseEntity {
  id: string
  userId: string
  /** * Type of measurement:
   * 'bp' (Blood Pressure), 'hr' (Heart Rate), 'bg' (Blood Glucose),
   * 'temp' (Temperature), 'weight' (Weight), 'o2' (Oxygen Saturation)
   */
  type: 'bp' | 'hr' | 'bg' | 'temp' | 'weight' | 'o2'
  value: number // Main value (e.g., Systolic for BP, or Weight)
  valueSecondary?: number // Secondary value (e.g., Diastolic for BP)
  unit: string // Units: 'mmHg', 'bpm', 'mg/dL', '°C', 'kg', '%'

  timestamp: string // ISO String for the moment of measurement
  note?: string // Contextual information (e.g., "After exercise")

  createdAt: string
}
