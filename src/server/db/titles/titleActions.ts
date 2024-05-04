"use server";

import { db } from "@/server/db/index";
import { editors, illos } from "./schema";
import { eq } from "drizzle-orm";

// EDITORS
export const getEditors = async () => {
  const data = await db.select().from(editors);
  return data;
};

export const deleteEditors = async (id: string) => {
  await db.delete(editors).where(eq(editors.id, id));
};

// ILLOS
export const getIllos = async () => {
  const data = await db.select().from(illos);
  return data;
};

export const deleteIllo = async (id: string) => {
  await db.delete(illos).where(eq(illos.id, id));
};
