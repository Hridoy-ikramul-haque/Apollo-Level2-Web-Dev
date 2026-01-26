import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";




const createUser = async (req: Request, res: Response) => {
    // console.log(req.body);
    // const { name, email, password } = req.body;
    // console.log(email);
    try {
        const result = await userServices.createUsers(req.body);
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


const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getUsers();
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
}


const getSingleUser = async (req: Request, res: Response) => {
    // console.log(req.params.id);
    // res.send("check");
    try {
        const result = await userServices.getSingleUser(req.params.id as string); //type assertion
        // console.log(result.rows);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Sorry......."
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "User Fetched successfully",
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const updateSignleUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
        const result = await userServices.updateSignleUser(name, email, req.params.id as string)

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "data update failed"
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "data updated",
                data: result.rows[0]

            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: "false",
            error: error.message
        })
    }
}


const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.deleteSingleUser(req.params.id as string);
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "there no such id......."
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: `ID NUMBER ${req.params.id} data deleted`,
                data: result.rows
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateSignleUser,
    deleteSingleUser
};