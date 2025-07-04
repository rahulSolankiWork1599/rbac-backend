//* Initializes all Routes

import { Router } from "express";
import authRoutes from "@routes/auth/auth.routes";
import userRoutes from "@routes/user/user.routes";
const router = Router();

router.get("/", (req, res) => {
  res.send("RBAC API Running");
});
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
