import { createTable } from "@/server/db/index";
import { integer, text } from "drizzle-orm/sqlite-core";

export const todos = createTable("todo", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  text: text("text", { length: 255 }).notNull(),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
});
