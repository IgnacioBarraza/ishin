import { BaseEntity } from './db'

export interface HealthProfile extends BaseEntity {
  userId: string // Primary Key (One profile per user)
  bloodType?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'

  /** List of medical conditions (e.g., Diabetes, Hypertension) */
  conditions: string[]

  /** Known allergies (e.g., Penicillin, Peanuts) */
  allergies: string[]

  /** Routine medications or supplements not tracked in the main schedule */
  baseTreatments?: string

  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }[]

  createdAt: string
  updatedAt: string
}
