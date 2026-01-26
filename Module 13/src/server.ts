import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { authRouter } from "./modules/auth/auth.route";



const app = express();
const port = config.port;



initDB();



// parser 
app.use(express.json());

// users crud 

app.get('/', logger, (req: Request, res: Response) => {
    res.send("Hello World!!");
})



//User Crud
app.use("/users", userRoutes);

// Auth 
app.use("/auth", authRouter);

// todos crud

//post todo
app.post('/todos', async (req: Request, res: Response) => {
    const { user_id, tittle } = req.body;
    try {
        const result = await pool.query(`INSERT INTO todos(user_id,tittle) VALUES($1,$2) RETURNING *`, [user_id, tittle]);

        res.status(201).json({
            success: true,
            message: "Todos created",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
})


//get all todos
//get specific id todo
// update todo
// delete todo



// not found route [404]
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        messgae: "there is no such route",
        path: req.path
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})