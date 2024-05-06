"use server";

import { db } from "@/server/db/index";
import { editors, creators, titles } from "./schema";
import { eq, lt } from "drizzle-orm";

//TITLES
export const getTitleOverviewData = async () => {
  const data = await db.query.titles.findMany({
    with: {
      sked: {
        with: {
          stages: {
            where: (stages, { eq }) => eq(stages.done, false),
          },
        },
      },
    },
  });
  return data;
};

export const getOneTitle = async (id: string) => {
  const data = await db.query.titles.findFirst({
    where: (title, { eq }) => eq(title.id, id),
  });
  return data;
};
