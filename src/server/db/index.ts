import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import "dotenv/config";
import { sqliteTableCreator } from "drizzle-orm/sqlite-core";

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client);

export const createTable = sqliteTableCreator((name) => `adso_${name}`);
