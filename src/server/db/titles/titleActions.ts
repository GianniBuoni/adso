"use server";

import { db } from "@/server/db/index";
import { editors, creators, titles } from "./schema";
import { eq, lt } from "drizzle-orm";

//TITLES
export const getAllTitles = async () => {
  const data = await db.select().from(titles);
  return data;
};

export const getOneTitle = async (id: string) => {
  const data = await db.select().from(titles).where(eq(titles.id, id));
  return data[0];
};

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
  const data = await db.select().from(creators);
  return data;
};

export const deleteIllo = async (id: string) => {
  await db.delete(creators).where(eq(creators.id, id));
};
