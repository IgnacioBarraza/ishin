import { BaseEntity } from './db'

/**
 * Local cache of the authenticated user's profile.
 */
export interface User extends BaseEntity {
  id: string
  name: string
  email: string
  avatarUrl?: string
  languagePreference: 'es' | 'jp' | 'en'
}
