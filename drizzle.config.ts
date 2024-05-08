import "dotenv/config"  // required for making .env entries accessible from this file
import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
 
export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/drizzle/migrations",
  driver: 'pg',
  dbCredentials: {
    // connectionString: `${import.meta.env.DB_URL}`, --use this when using vite-env instead
    connectionString: `${process.env.DB_URL}`,
  }
} satisfies Config;