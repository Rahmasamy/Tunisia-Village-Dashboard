import pg from 'pg';
import { env } from '../src/common/config/env.config.js';

async function createDatabase() {
  const client = new pg.Client({
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    database: 'postgres', // Connect to default database
  });

  try {
    await client.connect();
    console.log(`Checking if database "${env.db.name}" exists...`);
    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [env.db.name]);
    if (res.rowCount === 0) {
      console.log(`Database "${env.db.name}" does not exist. Creating it...`);
      await client.query(`CREATE DATABASE "${env.db.name}"`);
      console.log(`Database "${env.db.name}" created successfully.`);
    } else {
      console.log(`Database "${env.db.name}" already exists.`);
    }
  } catch (err) {
    console.error('Error creating database:', err);
  } finally {
    await client.end();
  }
}

createDatabase();
