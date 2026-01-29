import express from "express";
import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
import logger from "../../middleware/logger";

const router = express.Router();

router.post("/", userController.createUser)
router.get('/', logger, auth(), userController.getUser)
router.get('/:id', userController.getSingleUser);
router.put('/:id', userController.updateSignleUser);
router.delete('/:id', userController.deleteSingleUser);


export const userRoutes = router;