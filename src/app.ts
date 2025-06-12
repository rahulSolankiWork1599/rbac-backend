import express from "express";
import routes from "@routes/index";

const app = express();
app.use(express.json());

// Register routes
app.use("/", routes);

export default app;
