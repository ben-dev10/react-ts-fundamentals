import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema"
import postgres from "postgres"


// TODO: confirm if this is the best approach
// const client = postgres(env.DATABASE_URL)
const client = postgres("postgresql://postgres:post101database@localhost:5432/postgres")
export const db = drizzle(client, { schema })


