import express from "express";
import routes from "@routes/index";
import helmet from "helmet";
import { setupSwagger } from "@config/swagger";

const app = express();

app.use(helmet());
app.use(express.json());

// Register routes
app.use("/", routes);

// Swagger setup
setupSwagger(app);

export default app;
