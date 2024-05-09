import { and, eq, isNotNull, ne } from "drizzle-orm";
import { db } from "..";
import { skedStages, titles, titleSkeds } from "./schema";
import { alias } from "drizzle-orm/sqlite-core";
import { object } from "zod";

export const getTitleOverviewData = () => {
  const sq = db.query.titles.findMany({
    with: {
      skeds: {
        with: {
          stages: {
            limit: 1,
            where: eq(skedStages.done, false),
          },
        },
      },
    },
  });
  return sq;
};

export const deleteTitle = (id: number) => {
  db.delete(titles).where(eq(titles.workRef, id));
};
export const getUpcomingTasks = () => {
  const data = db
    .select({
      id: skedStages.id,
      text: titles.title,
      done: skedStages.done,
    })
    .from(skedStages)
    .orderBy(skedStages.date)
    .where(and(eq(skedStages.done, false), isNotNull(skedStages.date)))
    .leftJoin(titleSkeds, eq(skedStages.titleSkedId, titleSkeds.id))
    .innerJoin(titles, eq(titleSkeds.titleWorkRef, titles.workRef))
    .limit(5);
  return data;
};
