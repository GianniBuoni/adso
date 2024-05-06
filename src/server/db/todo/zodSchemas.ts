import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { todos } from "./schema";
import { z } from "zod";

// Inferring Types viaZod
// This is necessary for passing down the query objects as props!
const todoType = createSelectSchema(todos);
export type todosType = z.infer<typeof todoType>;

//For adding new todo's — for the API endpoint!
export const insertTodoSchema = createInsertSchema(todos, {
  text: (schema) => schema.text,
});
