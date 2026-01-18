import { Vitals } from '@/types/vitals'
import { db } from '../db'
import { BaseEntity } from '@/types/db'

export const VitalsService = {
  /**
   * Retrieve all the vitals by specific user
   * @param userId - string - The user ID
   * @returns array of vitals
   */
  getByUser: async (userId: string): Promise<Vitals[]> => {
    return await db.vitals.where('userId').equals(userId).toArray()
  },

  /**
   * Create a new vital record associated to a user
   * @param userId - string - The user ID
   * @param data - Vitals, omit id, userId, createdAt - data of the vital sign
   * @returns vital record
   */
  create: async (
    userId: string,
    data: Omit<Vitals, keyof BaseEntity>,
  ): Promise<Vitals> => {
    const now = new Date().toISOString()
    const newVital: Vitals = {
      ...data,
      id: crypto.randomUUID(),
      userId: userId,
      createdAt: now,
      lastSync: null,
      isDeleted: false,
    }

    return await db.vitals.add(newVital)
  },

  /**
   * Retrieve all the vitals by type associated to a user
   * @param userId - string - The user ID
   * @param type - vitals['type'] - The type of the vital sign
   * @returns vitals array records
   */
  getByType: async (
    userId: string,
    type: Vitals['type'],
  ): Promise<Vitals[]> => {
    return await db.vitals
      .where(['userId', 'type'])
      .equals([userId, type])
      .filter((v) => !v.isDeleted)
      .reverse()
      .sortBy('timestamp')
  },

  /**
   * Retrieve the most recent records for the dashboard
   * @param userId - string - The user ID
   * @param limit - number - Numbers of records to fetch
   * @returns vitals array record
   */
  getLatest: async (userId: string, limit: number = 5): Promise<Vitals[]> => {
    return await db.vitals
      .where('userId')
      .equals(userId)
      .reverse()
      .sortBy('timestamp')
      .then((results) => results.slice(0, limit))
  },
}
