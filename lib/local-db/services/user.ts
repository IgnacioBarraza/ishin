import { User } from '@/types/user'
import { db } from '../db'

export const UserService = {
  /**
   * Syncs user data from Auth provider to local storage.
   */
  upsertUser: async (userData: User): Promise<string> => {
    const now = new Date().toISOString()
    await db.users.put({
      ...userData,
      updatedAt: now,
      lastSync: now, // We consider it synced as it comes from auth
      isDeleted: false,
    })
    return userData.id
  },

  getCurrentUser: async (id: string): Promise<User | undefined> => {
    return await db.users.get(id)
  },
}
