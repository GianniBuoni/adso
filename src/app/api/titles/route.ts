import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import { titles } from "@/server/db/schemaIndex";

export async function GET() {
  const data = await db.query.titles.findMany({
    with: {
      sked: {
        with: {
          stages: true,
        },
      },
    },
  });
  return NextResponse.json(data);
}
