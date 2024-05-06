import { NextResponse } from "next/server";
import { insertTodoSchema } from "@/server/db/todo/zodSchemas";
import { db } from "@/server/db/index";
import { todos } from "@/server/db//todo/schema";
import { revalidatePath } from "next/cache";

export async function POST(response: NextResponse) {
  const body = await response.json();
  const validation = insertTodoSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newTodo = await db.insert(todos).values({
    text: body.text,
  });
  revalidatePath("/");
  return NextResponse.json(newTodo);
}

export async function GET(response: NextResponse) {
  const body = await db.select().from(todos);
  return NextResponse.json(body);
}
