import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { editors, creators, titles } from "./schema";
import z from "zod";

//TITLES
const titlesType = createSelectSchema(titles);
export type titlesType = z.infer<typeof titlesType>;

// EDITORS
const editorsType = createSelectSchema(editors);
export type editorsType = z.infer<typeof editorsType>;

export const insertEditorSchema = createInsertSchema(editors, {
  email: z.string().email(),
});

// CREATORS
const creatorsType = createSelectSchema(creators);
export type creatorsType = z.infer<typeof creatorsType>;

const insertCreatorSchema = createInsertSchema(creators, {
  email: z.string().email(),
  website: z.string().url(),
});
