import { HealthProfile } from '@/types/health-profile'
import { db } from '../db'

export const HealthProfileService = {
  /**
   * Retrieve the health profile for a user
   * @param userId - string - The user ID
   * @returns user health profile
   */
  getByUser: async (userId: string): Promise<HealthProfile | undefined> => {
    return await db.healthProfile.get(userId)
  },

  /**
   * Creates or updates a health profile
   * @param profile - healthProfile data -
   * @returns the userId of the saved health profile
   */
  save: async (profile: HealthProfile): Promise<string> => {
    const now = new Date().toISOString()
    return await db.healthProfile.put({
      ...profile,
      createdAt: now,
      updatedAt: now,
      lastSync: null,
      isDeleted: false,
    })
  },

  /**
   *
   * @param userId
   * @param updates
   * @returns
   */
  patch: async (
    userId: string,
    updates: Partial<HealthProfile>,
  ): Promise<number> => {
    return await db.healthProfile.update(userId, {
      ...updates,
      updatedAt: new Date().toISOString(),
    })
  },
}
