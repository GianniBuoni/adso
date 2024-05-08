import { createTable } from "@/server/db/createTable";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { integer, real, text } from "drizzle-orm/sqlite-core";
import { developments } from "../people/schema";

export const titles = createTable("titles", {
  workRef: integer("work_ref").notNull().primaryKey(),
  title: text("title", { length: 255 }),
  subtitle: text("subtitle", { length: 255 }),
  isbn: integer("isbn").unique(),
  price: real("price"),
  width: integer("width"),
  height: integer("height"),
  developmentId: text("developmentId", { length: 10 }).references(
    () => developments.id,
  ),
});

export const titleRelations = relations(titles, ({ one, many }) => ({
  development: one(developments, {
    fields: [titles.developmentId],
    references: [developments.id],
  }),
  skeds: many(titleSkeds),
}));

export const titleSkeds = createTable("title_skeds", {
  id: text("id", { length: 24 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  osd: text("osd", { length: 10 }),
  titleWorkRef: integer("title_work_ref").references(() => titles.workRef),
});

export const skedRelations = relations(titleSkeds, ({ one, many }) => ({
  title: one(titles, {
    fields: [titleSkeds.titleWorkRef],
    references: [titles.workRef],
  }),
  stages: many(skedStages),
}));

export const skedStages = createTable("sked_stages", {
  id: text("id", { length: 10 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name", {
    enum: [
      "Text To Designer",
      "Illo Sign Up GSP",
      "Sketches In",
      "Sketches Sign Off",
      "Launch Materials",
      "Art In",
      "Conference Materials",
      "Art Sign Off",
      "Forecast 1",
      "Proofreading",
      "Final Sign Off",
      "Files To Printer",
      "Intermediate Materials",
      "Proofs In",
      "Proofs Approved",
      "Final Materials",
      "Advances In",
      "Archiving",
      "On Sale Date",
    ],
  }).notNull(),
  date: text("date", { length: 10 }),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
  loggedInBiblio: integer("logged_in_biblio", { mode: "boolean" })
    .notNull()
    .default(false),
  titleSkedId: text("title_sked_id", { length: 24 }).references(
    () => titleSkeds.id,
  ),
});

export const skedStageRelations = relations(skedStages, ({ one }) => ({
  titleSked: one(titleSkeds, {
    fields: [skedStages.titleSkedId],
    references: [titleSkeds.id],
  }),
}));
