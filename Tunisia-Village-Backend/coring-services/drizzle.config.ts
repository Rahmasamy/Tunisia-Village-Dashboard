import { defineConfig } from 'drizzle-kit';
import { env } from './src/common/config/env.config.js';

export default defineConfig({
  schema: './src/common/db/schema/index.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    database: env.db.name,
    ssl: false,
  },
});
