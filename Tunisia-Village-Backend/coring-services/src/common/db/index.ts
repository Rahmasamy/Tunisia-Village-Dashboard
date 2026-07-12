import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '../config/env.config.js';
import * as schema from './schema/index.js';

export const pool = new pg.Pool({
  host: env.db.host,
  port: env.db.port,
  user: env.db.user,
  password: env.db.password,
  database: env.db.name,
  max: env.db.poolMax,
});

export const db = drizzle(pool, { schema });

export async function PingDB() {
  const client = await pool.connect();
  try {
    await client.query('SELECT 1');
  } finally {
    client.release();
  }
}

export async function closeDB() {
  await pool.end();
}
