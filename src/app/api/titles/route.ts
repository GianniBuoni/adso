import { db } from "@/server/db";
import { creators, titles } from "@/server/db/titles/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  const response = await db.insert(creators);
}
