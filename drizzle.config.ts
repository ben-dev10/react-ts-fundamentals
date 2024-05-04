import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
 
// connect to database
export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    // connectionString: import.meta.env.DB_URL,
    // TODO: fix env for database url 
    connectionString: "postgresql://postgres:post101database@localhost:5432/postgres",
  }
} satisfies Config;