import { initDatabase } from "@utils/initDatabase";
import app from "app";

export const startServer = async () => {
  try {
    await initDatabase(); // << Sync happens here

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};
