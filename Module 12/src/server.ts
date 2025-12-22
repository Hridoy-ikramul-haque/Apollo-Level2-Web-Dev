import express, { Request, Response } from 'express';
import { Pool } from 'pg';
const app = express();
const port = 5000;
const pool = new Pool({
    connectionString:`postgresql://neondb_owner:npg_tIo6pyNdmcM3@ep-rough-tree-ad8uzm15-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
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
    
    
};

initDB();


app.get("/", (req:Request, res:Response) => {
    res.end("HELLO WORLDsss");
});

app.use(express.json());
app.post("/", (req:Request,res:Response) => {
    console.log(req.body);
    res.status(201).json({
        learning: 'express',
        position:"noob"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})