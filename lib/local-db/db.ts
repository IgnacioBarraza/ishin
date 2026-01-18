import Dexie, { type Table } from 'dexie'
import { Medication } from '@/types/medication'
import { Vitals } from '@/types/vitals'
import { HealthProfile } from '@/types/health-profile'
import { MedicalNotes } from '@/types/medical-notes'
import { Appointment } from '@/types/appointments'
import { User } from '@/types/user'

export class IshinDatabase extends Dexie {
  medications!: Table<Medication>
  vitals!: Table<Vitals>
  healthProfile!: Table<HealthProfile>
  medicalNotes!: Table<MedicalNotes>
  appointments!: Table<Appointment>
  users!: Table<User>

  constructor() {
    super('IshinDB')

    this.version(1).stores({
      medications: 'id, userId, name, isActive, isDeleted',
      vitals: 'id, userId, type, timestamp, isDeleted',
      healthProfile: 'userId',
      medicalNotes: 'id, userId, timestamp, isDeleted',
      appointments: 'id, userId, date, isDeleted',
      users: 'id, email',
    })
  }
}

export const db = new IshinDatabase()
