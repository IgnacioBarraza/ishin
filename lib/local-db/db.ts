import Dexie, { type Table } from 'dexie'
import { Medication } from '@/types/database'

export class IshinDatabase extends Dexie {
  medications!: Table<Medication>

  constructor() {
    super('IshinDB')

    this.version(1).stores({
      medications: 'id, name, isActive, category, updatedAt',
    })
  }
}

export const db = new IshinDatabase()
