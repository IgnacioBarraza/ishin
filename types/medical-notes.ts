import { BaseEntity } from './db'

/**
 * User's personal journal for symptoms, feelings, or doctor's advice.
 */
export interface MedicalNotes extends BaseEntity {
  id: string
  userId: string
  title?: string
  content: string // The main text of the note
  mood?: 'happy' | 'neutral' | 'sad' | 'sick' | 'pain'
  tags: string[] // e.g., ["back-pain", "morning"]
  timestamp: string // Date and time of the note
  createdAt: string
}
