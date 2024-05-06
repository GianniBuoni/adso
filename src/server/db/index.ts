import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

//schema imports
import * as schema from "@/server/db/schemaIndex";

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema: schema });
