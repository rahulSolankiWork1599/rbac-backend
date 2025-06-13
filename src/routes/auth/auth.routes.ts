import { Router } from "express";
// import * as AuthController from "@controllers/auth.controller";
import { loginUser, registerUser } from "@controllers/auth.controller";
import { validate } from "@middlewares/validate";

import {
  loginValidationRules,
  registerValidationRules,
} from "@validators/auth.validator";

const router = Router();

router.post("/login", loginValidationRules, validate, loginUser);

router.post("/register", registerValidationRules, validate, registerUser);

export default router;
