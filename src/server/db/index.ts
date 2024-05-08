import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema"
import postgres from "postgres"

// main connection to database
const client = postgres("postgresql://postgres:post101database@localhost:5432/postgres")
export const db = drizzle(client, { schema,logger:true })





