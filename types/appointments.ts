import { BaseEntity } from './db'

/**
 * Future or past medical appointments.
 */
export interface Appointment extends BaseEntity {
  id: string
  userId: string
  doctorName: string
  specialty: string // e.g., "Cardiology"
  date: string // ISO String for the appointment time
  location?: string // Clinic name or address
  notes?: string // Questions to ask the doctor
  isCompleted: boolean
  createdAt: string
  updatedAt: string
}
