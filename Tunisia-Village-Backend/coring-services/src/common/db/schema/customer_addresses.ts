import { pgTable, bigserial, bigint, varchar, text, decimal, boolean, timestamp, index } from 'drizzle-orm/pg-core';
import { users } from './users.js';

export const customerAddresses = pgTable('customer_addresses', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  userId: bigint('user_id', { mode: 'bigint' }).notNull().references(() => users.id, { onDelete: 'cascade' }),
  label: varchar('label', { length: 255 }),
  lat: decimal('lat', { precision: 10, scale: 7 }).notNull(),
  lng: decimal('lng', { precision: 10, scale: 7 }).notNull(),
  country: text('country').notNull(),
  isDefault: boolean('is_default').default(false).notNull(),
  city: text('city').notNull(),
  street: text('street').notNull(),
  building: text('building'),
  aptNumber: text('apt_number'),
  type: text('type').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('idx_customer_addresses_user_id').on(table.userId),
}));
