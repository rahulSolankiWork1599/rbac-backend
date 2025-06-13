import { Router } from "express";
// import * as AuthController from "@controllers/auth.controller";
import { registerUser } from "@controllers/auth.controller";

const router = Router();

router.post("/login", (req, res) => {
  res.send("Login endpoint");
});

router.post("/register", registerUser);

export default router;
