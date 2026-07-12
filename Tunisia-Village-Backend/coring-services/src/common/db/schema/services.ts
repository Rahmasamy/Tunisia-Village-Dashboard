import { pgTable, bigserial, text, bigint, index, boolean, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users.js';

export const services = pgTable('services', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  userId: bigint('user_id', { mode: 'bigint' }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull(),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
}, (table) => ({
  userIdIdx: index('idx_services_user_id').on(table.userId),
}));

