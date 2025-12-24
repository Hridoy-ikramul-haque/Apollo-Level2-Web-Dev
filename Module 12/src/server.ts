import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';
const app = express();
const port = 5000;
dotenv.config({ path: path.join(process.cwd(), '.env') });
const pool = new Pool({
    connectionString: `${process.env.CONNECTION_STR}`
})

const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS USERS(
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
        user_id INT REFERENCES USERS(id) ON DELETE CASCADE,
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


app.get("/", (req: Request, res: Response) => {
    res.end("HELLO WORLDsss");
});

app.use(express.json());
app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.status(201).json({
        learning: 'express',
        position: "noob"
    })
})

app.post('/users', (req: Request, res: Response) => {
    const { name, email } = req.body;
    console.log(name);
    console.log(req.body);
    res.status(201).json({
        url:req.url
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})