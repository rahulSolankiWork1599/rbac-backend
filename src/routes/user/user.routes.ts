import { getUsersList } from "@controllers/user.controller";
import { validate } from "@middlewares/validate";
import { Router } from "express";

const router = Router();

router.get("/", validate, getUsersList);

export default router;
