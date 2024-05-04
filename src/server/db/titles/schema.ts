import { createTable } from "@/server/db/index";
import { createId } from "@paralleldrive/cuid2";
import { text } from "drizzle-orm/sqlite-core";

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
  title: text("tite", { length: 255 }).notNull(),
  subtitle: text("subtitle", { length: 255 }),
});
