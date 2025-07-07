import { getRolesList } from "@controllers/role.controller";
import { validate } from "@middlewares/validate";
import { Router } from "express";

// Swagger documentation import
import "@docs/roles.doc";

const router = Router();

router.get("/", validate, getRolesList);

export default router;
