"use server";

import { db } from "@/server/db/index";
import { todos } from "@/server/db/todo/schema";
import { asc, count, eq, not, sql } from "drizzle-orm";

export const addTodo = async (id: number, text: string) => {
  await db.insert(todos).values({
    id: id,
    text: text,
  });
};

export const getData = async () => {
  const data = await db.select().from(todos).orderBy(asc(todos.id));
  return data;
};

export const getShortTodo = async () => {
  const data = await db.select().from(todos).limit(3);
  return data;
};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todos)
    .set({
      text: text,
    })
    .where(eq(todos.id, id));
};

export const toggleTodo = async (id: number) => {
  await db
    .update(todos)
    .set({
      done: not(todos.done),
    })
    .where(eq(todos.id, id));
};

export const deleteTodo = async (id: number) => {
  await db.delete(todos).where(eq(todos.id, id));
};
