import { Appointment } from '@/types/appointments'
import { BaseEntity } from '@/types/db'
import { db } from '../db'

export const AppointmentService = {
  /**
   * Schedules a new appointment locally.
   * @param {string} userId - Current authenticated user ID.
   * @param {Omit<Appointment, keyof BaseEntity>} data - Appointment details.
   */
  create: async (
    userId: string,
    data: Omit<Appointment, keyof BaseEntity>,
  ): Promise<string> => {
    const id = crypto.randomUUID()
    const now = new Date().toISOString()

    const newAppointment: Appointment = {
      ...data,
      id,
      userId,
      createdAt: now,
      updatedAt: now,
      lastSync: null,
      isDeleted: false,
    }

    await db.appointments.add(newAppointment)
    return id
  },

  /**
   * Gets upcoming appointments that are not completed.
   * @param {string} userId - The user ID.
   */
  getUpcoming: async (userId: string): Promise<Appointment[]> => {
    const today = new Date().toISOString()
    return await db.appointments
      .where('userId')
      .equals(userId)
      .filter((app) => app.date >= today && !app.isCompleted && !app.isDeleted)
      .sortBy('date')
  },
}
