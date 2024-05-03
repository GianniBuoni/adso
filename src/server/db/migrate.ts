import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "./index";

const main = async () => {
  try {
    console.log("Attempting to migrate tables! 😵‍💫");
    await migrate(db, {
      migrationsFolder: "drizzle",
    });
    console.log("🌟 MIGRATION SUCCESS!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
