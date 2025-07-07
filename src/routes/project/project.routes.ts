import { Router } from "express";
import { validate } from "@middlewares/validate";
import { createProject } from "@controllers/project.controller";

const router = Router();

router.post("/projects", validate, createProject);
