import express from "express";
import routes from "@routes/index";
import helmet from "helmet";

const app = express();

app.use(helmet())
app.use(express.json());

// Register routes
app.use("/", routes);

export default app;
