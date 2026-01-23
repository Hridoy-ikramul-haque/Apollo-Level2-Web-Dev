import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import config from "./config";
import initDB, { pool } from "./config/db";



const app = express();
const port = config.port;



initDB();

// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
    next();
}

// parser 
app.use(express.json());

// users crud 

app.get('/', logger, (req: Request, res: Response) => {
    res.send("Hello World!!");
})


app.get('/users', async (req: Request, res: Response) => {
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


app.get("/users/:id", async (req: Request, res: Response) => {
    // console.log(req.params.id);
    // res.send("check");
    try {
        const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [req.params.id]);
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
})


app.post('/users', async (req: Request, res: Response) => {
    // console.log(req.body);
    const { name, email } = req.body;
    // console.log(email);
    try {
        const result = await pool.query(`
            INSERT INTO users(name,email) VALUES($1,$2) RETURNING *
            `, [name, email]);
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
})



app.put('/users/:id', async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
        const result = await pool.query(`UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *`, [name, email, req.params.id])

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
})


app.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`DELETE FROM users WHERE id=$1`, [req.params.id]);
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
})




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