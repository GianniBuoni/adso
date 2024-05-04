import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { editors, illos } from "./schema";
import z from "zod";

// EDITORS
const editorsType = createSelectSchema(editors);
export type editorsType = z.infer<typeof editorsType>;

export const insertEditorSchema = createInsertSchema(editors, {
  email: z.string().email(),
});

// ILLOS
const illosType = createSelectSchema(illos);
export type illosType = z.infer<typeof illosType>;

const insertIlloSchema = createInsertSchema(illos, {
  email: z.string().email(),
  website: z.string().url(),
});
