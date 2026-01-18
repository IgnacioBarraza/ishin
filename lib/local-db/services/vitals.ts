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
    return await db.vitals
      .where('userId')
      .equals(userId)
      .filter((v) => !v.isDeleted)
      .toArray()
  },

  /**
   * Create a new vital record associated to a user
   * @param userId - string - The user ID
   * @param data - Vitals, omit id, userId, createdAt - data of the vital sign
   * @returns vital record id
   */
  create: async (
    userId: string,
    data: Omit<Vitals, keyof BaseEntity>,
  ): Promise<string> => {
    const now = new Date().toISOString()
    const id = crypto.randomUUID()
    const newVital: Vitals = {
      ...data,
      id: id,
      userId: userId,
      createdAt: now,
      lastSync: null,
      isDeleted: false,
    }

    await db.vitals.add(newVital)
    return id
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
      .toArray()
      .then((results) =>
        results
          .reverse()
          .sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
          ),
      )
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
      .filter((v) => !v.isDeleted)
      .toArray()
      .then((results) =>
        results
          .sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
          )
          .slice(0, limit),
      )
  },
}
