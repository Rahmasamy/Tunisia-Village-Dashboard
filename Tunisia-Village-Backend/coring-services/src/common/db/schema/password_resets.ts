import { pgTable, bigserial, bigint, text, timestamp, index } from 'drizzle-orm/pg-core';
import { users } from './users.js';

export const passwordResets = pgTable('password_resets', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  userId: bigint('user_id', { mode: 'bigint' }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  otpHash: text('otp_hash').notNull(),
  expiresAt: timestamp('expires_at', { mode: 'date' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  consumedAt: timestamp('consumed_at', { mode: 'date' }),
}, (table) => ({
  userIdIdx: index('idx_password_resets_user_id').on(table.userId),
  expiresAtIdx: index('idx_password_resets_expires_at').on(table.expiresAt),
}));
