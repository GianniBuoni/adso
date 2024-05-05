import { createTable } from "@/server/db";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
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
  skedId: text("sked_id", { length: 255 }).references(() => titleSchedule.id),
});

//ONE TITLE TO ONE SKED
export const titleRelations = relations(titles, ({ one }) => ({
  schedule: one(titleSchedule, {
    fields: [titles.skedId],
    references: [titleSchedule.id],
  }),
}));

//TITLE SKEDS:
export const titleSchedule = createTable("title_schedule", {
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  osd: integer("osd", { mode: "timestamp" }),
});

//SKED STAGE ONE SKED to MANY STAGES
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
  value: integer("value", { mode: "timestamp" }),
  status: integer("status", { mode: "boolean" }).notNull().default(false),
  loggedInBiblio: integer("logged_in_biblio", { mode: "boolean" })
    .notNull()
    .default(false),
});

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
