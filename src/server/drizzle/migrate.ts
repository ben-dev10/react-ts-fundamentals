import "dotenv/config"
import {drizzle} from "drizzle-orm/postgres-js"
import {migrate} from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"

const migrationClient = postgres(process.env.DB_URL as string,{max:1})

async function migrateDB(){
    await migrate(drizzle(migrationClient),{
        migrationsFolder: "./src/server/drizzle/migrations",
    })

    await migrationClient.end()
}

migrateDB()