import { createTable } from "@/server/db/index";
import { createId } from "@paralleldrive/cuid2";
import { integer, text } from "drizzle-orm/sqlite-core";

// EDITORS
export const editors = createTable("editors", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name", { length: 255 }),
  email: text("email", { length: 255 }).notNull().unique(),
});

export const titles = createTable("titles", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text("title", { length: 255 }).notNull(),
  subtitle: text("subtitle", { length: 255 }),
});

//ILLOS
export const illos = createTable("illos", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name", { length: 255 }).notNull(),
  email: text("email", { length: 255 }).unique(),
  background: text("background", { length: 255 }),
  haveWorkedWith: integer("have_worked_with", { mode: "boolean" })
    .notNull()
    .default(false),
  pronouns: text("pronouns", { length: 255 }),
  website: text("website", { length: 255 }),
});
