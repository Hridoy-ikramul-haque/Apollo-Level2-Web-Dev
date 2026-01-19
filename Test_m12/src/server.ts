import express, { Request, Response } from "express";
import { Pool } from "pg";
import path from "path"
import dotenv from "dotenv";
dotenv.config({ path: path.join(process.cwd(), '.env') });
const app = express();
const port = 5000;

// Create a new Pool
const pool = new Pool({
    connectionString: `${process.env.CONNECTION_STR}`
})

// writting query
const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(15),
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        tittle VARCHAR(200) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT false,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
};

initDB();



// parser 
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send("Hello World!!");
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})