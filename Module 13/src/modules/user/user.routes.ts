import express from "express";
import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/", userController)



router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`Select * from users`);
        res.status(200).json({
            success: true,
            message: "user retrieved successfully",
            data: result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.meassage
        })
    }
})

export const userRoutes = router;