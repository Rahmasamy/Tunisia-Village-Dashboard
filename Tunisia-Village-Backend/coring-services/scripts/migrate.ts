import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db, closeDB } from '../src/common/db/index.js';

async function runMigration() {
  try {
    console.log('Running Drizzle migrations...');
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations completed successfully.');
    await closeDB();
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    await closeDB();
    process.exit(1);
  }
}

runMigration();
