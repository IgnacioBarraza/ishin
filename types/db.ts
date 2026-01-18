/**
 * Common fields for all syncable models in Ishin.
 */
export interface BaseEntity {
  id: string // UUID generated on client
  userId: string // Owner ID from NextAuth

  createdAt: string // ISO string (fixed)
  updatedAt?: string // ISO string (changes on every local edit)

  /**
   * lastSync
   * null: Item created offline, never sent to server.
   * ISO string: Last time the server acknowledged this specific record.
   */
  lastSync: string | null

  /**
   * isDeleted
   * Soft delete flag. We don't hard-delete in Dexie to sync the
   * "deletion" to Postgres later.
   */
  isDeleted: boolean
}
