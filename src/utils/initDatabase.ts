import { sequelize } from "@config/database";
import "@models/index"; // Loads all models and associations

export const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established.");

    if (process.env.NODE_ENV !== "production") {
      await sequelize.sync({ alter: true }); // or { force: true } in dev only
      console.log("✅ All models synchronized.");
    }
  } catch (error) {
    console.error("❌ Failed to connect or sync the database:", error);
    process.exit(1);
  }
};
