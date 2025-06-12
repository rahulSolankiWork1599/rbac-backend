//* Initializes all Routes

import { Router } from "express";
import authRoutes from "@routes/auth/auth.routes";
const router = Router();

router.get("/", (req, res) => {
  res.send("RBAC API Running");
});

router.use("/auth", authRoutes);

export default router;
