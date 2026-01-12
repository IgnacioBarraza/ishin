import { db } from '../db'
import { Medication } from '@/types/medication'

export const MedicationService = {
  /**
   * Retrieve all the medicines by specific user
   * @param userId
   * @returns array of medications
   */
  getByUser: async (userId: string): Promise<Medication[]> => {
    return await db.medications.where('userId').equals(userId).toArray()
  },

  /**
   * Create a new medication record associated to a user
   * @param userId - string - The ID of the user
   * @param data - Medication, omit id, createdAt, updatedAt - data of medication details
   * @returns
   */
  create: async (
    userId: string,
    data: Omit<Medication, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Medication> => {
    const now = Date.now().toLocaleString()
    const newMedication: Medication = {
      ...data,
      id: crypto.randomUUID(),
      userId: userId,
      createdAt: now,
      updatedAt: now,
    }

    return await db.medications.add(newMedication)
  },

  /**
   * Retrieve all the active medicines by specific user
   * @param userId
   * @returns array of medications
   */
  getActive: async (userId: string): Promise<Medication[]> => {
    return await db.medications
      .where('userId')
      .equals(userId)
      .filter((m) => m.isActive === true)
      .toArray()
  },

  /**
   * Update the specific medication record by specific user
   * @param userId - string - User ID
   * @param id - string - Medicine ID
   * @param data - Partial<Medication> - Data that would be updated
   * @returns Updated medicine record
   */
  update: async (
    userId: string,
    id: string,
    data: Partial<Medication>
  ): Promise<Medication> => {
    const record = await db.medications.get(id)

    if (!record || record.userId !== userId) {
      throw new Error('No tienes permisos para editar este registro.')
    }
    const now = new Date().toLocaleString()

    await db.medications.update(id, {
      ...data,
      updatedAt: now,
    })

    return (await db.medications.get(id)) as Medication
  },

  /**
   * Delete the specific medication record
   * @param userId - string - User ID
   * @param id - string - Medicine record ID
   */
  delete: async (userId: string, id: string): Promise<void> => {
    const record = await db.medications.get(id)

    if (!record || record.userId !== userId)
      throw new Error(
        'Medicamento no encontrado o no tienes permisos para modificar este registro.'
      )

    await db.medications.delete(id)
  },
}
