import { pgTable, bigserial, varchar, text, timestamp, index, pgEnum } from 'drizzle-orm/pg-core';

export const systemRoleEnum = pgEnum('system_role', ['user', 'ambassedor', 'service_provider', 'system_admin']);

export const users = pgTable('users', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  phone: varchar('phone', { length: 20 }).unique(),
  name: varchar('name', { length: 255 }).notNull(),
  membershipNumber: varchar('membership_number', { length: 20 }).unique(),
  passwordHash: text('password_hash'),
  systemRole: systemRoleEnum('system_role').notNull(),
  certificatePdfUrl: text('certificate_pdf_url'),
  certificateImageUrl: text('certificate_image_url'),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull(),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
}, (table) => ({
  emailIdx: index('idx_users_email').on(table.email),
  systemRoleIdx: index('idx_users_system_role').on(table.systemRole),
}));
