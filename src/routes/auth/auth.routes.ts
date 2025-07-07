import { Router } from "express";
// import * as AuthController from "@controllers/auth.controller";
import {
  loginUser,
  logoutUser,
  refreshUserToken,
  registerUser,
} from "@controllers/auth.controller";
import { validate } from "@middlewares/validate";

import {
  loginValidationRules,
  registerValidationRules,
} from "@validators/auth.validator";

const router = Router();

router.post("/login", loginValidationRules, validate, loginUser);

router.post("/register", registerValidationRules, validate, registerUser);

router.post("/refresh-token", validate, refreshUserToken);

router.post("/logout", validate, logoutUser);

export default router;
