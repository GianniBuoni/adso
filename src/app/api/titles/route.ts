import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import { skedStages, titles, titleSkeds } from "@/server/db/schemaIndex";
import {
  deleteTitle,
  getTitleOverviewData,
} from "@/server/db/titles/titleActions";
import { eq } from "drizzle-orm/sql";

export async function GET() {
  const data = await getTitleOverviewData();
  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  await db.delete(titles).where(eq(titles.workRef, body.workRef));
  // await db.delete(skedStages).where(eq(skedStages.id, body.id));
  return NextResponse.json({});
}
