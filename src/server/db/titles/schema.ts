import { createTable } from "@/server/db/createTable";
import { createId } from "@paralleldrive/cuid2";
import { relations, sql } from "drizzle-orm";
import { integer, real, text } from "drizzle-orm/sqlite-core";

//TITLES
export const titles = createTable("titles", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text("title", { length: 255 }).notNull(),
  subtitle: text("subtitle", { length: 255 }),
  isbn: integer("isbn", { mode: "number" }),
  width: real("width"),
  height: real("height"),
  price: real("price"),
  priority: text("priority", { enum: ["high", "low", "normal"] }),
  note: text("note", { length: 255 }),
  skedId: text("sked_id", { length: 255 }).references(() => titleSked.id),
});

//ONE TITLE TO ONE SKED
export const titleRelations = relations(titles, ({ one }) => ({
  sked: one(titleSked, {
    fields: [titles.skedId],
    references: [titleSked.id],
  }),
}));

//TITLE SKEDS
export const titleSked = createTable("title_schedule", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  osd: text("osd"),
});

//ONE SKED TO MANY STAGES
export const scheduleRelations = relations(titleSked, ({ many }) => ({
  stages: many(skedStage),
}));

//SKED STAGE
export const skedStage = createTable("sked_stage", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name", {
    enum: [
      "Text to Design",
      "Illo Signed Up",
      "GSP",
      "Sketches In",
      "Sketches Approved",
      "Art In",
      "Forecast 1",
      "Art Approved",
      "Proofreading",
      "Specs Finalized",
      "Design Editorial Sign-off",
      "Production Sign-off",
      "Files to Pinter",
      "Proofs In",
      "Proofs Approved",
      "Advanced In",
      "Advanced Approved",
      "Archived",
      "Launch",
      "Conference",
      "Intermediate",
      "Final",
    ],
    length: 255,
  }).notNull(),
  due: text("due"),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
  loggedInBiblio: integer("logged_in_biblio", { mode: "boolean" })
    .notNull()
    .default(false),
  skedId: text("skedId").references(() => titleSked.id),
});

//EACH STAGE ROW BELONGS TO ONLY ONE SKED
export const skedStageRelations = relations(skedStage, ({ one }) => ({
  sked: one(titleSked, {
    fields: [skedStage.skedId],
    references: [titleSked.id],
  }),
}));

// EDITORS: MANY EDITORS TO MANY TITLES
export const editors = createTable("editors", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name", { length: 255 }),
  email: text("email", { length: 255 }).notNull().unique(),
});

//CREATOR: MANY CREATORS TO MANY TITLES
export const creators = createTable("creators", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name", { length: 255 }).notNull(),
  role: text("role", { enum: ["illustrator", "author"] }),
  email: text("email", { length: 255 }).unique(),
  background: text("background", { length: 255 }),
  haveWorkedWith: integer("have_worked_with", { mode: "boolean" })
    .notNull()
    .default(false),
  pronouns: text("pronouns", { length: 255 }),
  website: text("website", { length: 255 }),
  address: text("address", { length: 255 }),
  tel: integer("tel"),
});

//AGENT: ONE AGENT TO MANY ILLUSTRATORS
export const agents = createTable("agents", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name", { length: 255 }).notNull(),
  email: text("email", { length: 255 }).unique(),
  haveWorkedWith: integer("have_worked_with", { mode: "boolean" })
    .notNull()
    .default(false),
});

//AGENCY: ONE AGENCY TO MANY AGENTS
export const agencies = createTable("agencies", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name", { length: 255 }).notNull(),
  website: text("website", { length: 255 }),
  address: text("address", { length: 255 }),
  tel: integer("tel"),
});
