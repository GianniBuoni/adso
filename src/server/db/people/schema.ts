import { relations } from "drizzle-orm";
import { integer, real, text } from "drizzle-orm/sqlite-core";
import { createTable } from "../createTable";
import { titles } from "../schemaIndex";
import { createId } from "@paralleldrive/cuid2";

// AGENCIES
export const agencies = createTable("agencies", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  name: text("name", { length: 255 }).notNull(),
  website: text("website", { length: 255 }).unique(),
  address: text("address", { length: 255 }),
  tel: integer("tel"),
  flagged: integer("flagged", { mode: "boolean" }).notNull().default(false),
});

export const agencyRelations = relations(agencies, ({ many }) => ({
  agents: many(agents),
}));

export const agents = createTable("agents", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  firstName: text("first_name", { length: 50 }),
  lastName: text("last_name", { length: 50 }),
  email: text("email", { length: 255 }).unique(),
  tel: integer("tel"),
  haveWorkedWith: integer("have_worked_with", { mode: "boolean" })
    .notNull()
    .default(false),
  agencyId: text("agency_id", { length: 10 }).references(() => agencies.id),
});

export const agentRelations = relations(agents, ({ one, many }) => ({
  agency: one(agencies, {
    fields: [agents.agencyId],
    references: [agencies.id],
  }),
  illustrators: many(illos),
  authors: many(authors),
}));

// AUTHORS
export const authors = createTable("authors", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  firstName: text("first_name", { length: 50 }),
  lastName: text("last_name", { length: 50 }),
  email: text("email", { length: 255 }).unique(),
  tel: integer("tel"),
  addressLine1: text("address_line_1", { length: 255 }),
  addressLine2: text("address_line_2", { length: 255 }),
  addressLine3: text("address_line_3", { length: 255 }),
  addressLine4: text("address_line_4", { length: 255 }),
  addressLine5: text("address_line_5", { length: 255 }),
  haveWorkedWith: integer("have_worked_with", { mode: "boolean" })
    .notNull()
    .default(false),
  lastAdvance: real("last_advance"),
  agentId: text("agent_id", { length: 10 }).references(() => agents.id),
});

export const authorRelations = relations(authors, ({ one, many }) => ({
  agent: one(agents, {
    fields: [authors.agentId],
    references: [agents.id],
  }),
  developments: many(developments),
}));

// ILLOS
export const illos = createTable("illos", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  firstName: text("first_name", { length: 50 }),
  lastName: text("last_name", { length: 50 }),
  email: text("email", { length: 255 }).unique(),
  tel: integer("tel"),
  addressLine1: text("address_line_1", { length: 255 }),
  addressLine2: text("address_line_2", { length: 255 }),
  addressLine3: text("address_line_3", { length: 255 }),
  addressLine4: text("address_line_4", { length: 255 }),
  addressLine5: text("address_line_5", { length: 255 }),
  haveWorkedWith: integer("have_worked_with", { mode: "boolean" })
    .notNull()
    .default(false),
  lastAdvance: real("last_advance"),
  agentId: text("agent_id", { length: 10 }).references(() => agents.id),
});

export const illoRelations = relations(illos, ({ one, many }) => ({
  agent: one(agents, {
    fields: [illos.agentId],
    references: [agents.id],
  }),
  developments: many(developments),
}));

//EDITORS
export const editors = createTable("editors", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  firstName: text("first_name", { length: 50 }),
  lastName: text("last_name", { length: 50 }),
  email: text("email", { length: 255 }).unique(),
});

//DEVELOPMENTS
export const developments = createTable("developments", {
  id: text("id", { length: 24 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  authorId: text("author_id", { length: 10 }).references(() => authors.id),
  editorId: text("editor_id", { length: 10 }).references(() => editors.id),
  illoId: text("illo_id", { length: 10 }).references(() => illos.id),
});

export const developmentRelations = relations(
  developments,
  ({ one, many }) => ({
    author: one(authors, {
      fields: [developments.authorId],
      references: [authors.id],
    }),
    editor: one(editors, {
      fields: [developments.editorId],
      references: [editors.id],
    }),
    illo: one(illos, {
      fields: [developments.illoId],
      references: [illos.id],
    }),
    titles: many(titles),
  }),
);
