import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";




const createUser = async (req: Request, res: Response) => {
    // console.log(req.body);
    const { name, email } = req.body;
    // console.log(email);
    try {
        const result = await userServices.createUsers(name, email);
        // console.log(result.rows[0]);

        // res.send({ message: "data inserted..." });
        res.status(201).json({
            success: true,
            message: "Data inserted successfully",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({ success: false, meassage: error.message })
    }
    // res.status(201).json({
    //     name: "billu",
    //     status: 201,
    //     message: "Api is working"
    // })
}

export const userController = createUser;