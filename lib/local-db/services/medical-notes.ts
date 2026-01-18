import { MedicalNotes } from '@/types/medical-notes'
import { db } from '../db'
import { BaseEntity } from '@/types/db'

export const MedicalNotesService = {
  /**
   * Create a new medical note record associated to a user
   * @param userId - string - The user ID
   * @param data - MedicalNotes, omit id -
   * @returns the medical note id
   */
  create: async (
    userId: string,
    data: Omit<MedicalNotes, keyof BaseEntity>,
  ): Promise<string> => {
    const now = new Date().toISOString()
    const id = crypto.randomUUID()

    const newMedicalNote: MedicalNotes = {
      ...data,
      id,
      userId,
      createdAt: now,
      updatedAt: now,
      lastSync: null,
      isDeleted: false,
    }

    await db.medicalNotes.add(newMedicalNote)
    return id
  },

  /**
   * Retrieves notes for a user, sorted by timestamp (newest first).
   * @param userId - string - The user ID.
   * @param tag - string - Optional tag to filter notes.
   * @returns medical notes by user
   */
  getByUser: async (userId: string, tag?: string): Promise<MedicalNotes[]> => {
    const collection = db.medicalNotes.where('userId').equals(userId)

    if (tag) {
      return await collection
        .filter((note) => note.tags.includes(tag) && !note.isDeleted)
        .reverse()
        .sortBy('timestamp')
    }

    return await collection
      .filter((note) => !note.isDeleted)
      .reverse()
      .sortBy('timestamp')
  },
}
