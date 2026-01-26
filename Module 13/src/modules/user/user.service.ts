import { pool } from "../../config/db";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const createUsers = async (payload: Record<string, unknown>) => {
    const { name, email, password } = payload;
    const hashPass = await bcrypt.hash(password as string, 10)
    const result = await pool.query(`
            INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *
            `, [name, email, hashPass]);
    return result;
}


const getUsers = async () => {
    const result = await pool.query(`Select * from users`);
    return result;
}


const getSingleUser = async (id: string) => {
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    return result;
}


const updateSignleUser = async (name: string, email: string, id: string) => {
    const result = await pool.query(`UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *`, [name, email, id])
    return result;
}

const deleteSingleUser = async (id: string) => {
    const result = await pool.query(`DELETE FROM users WHERE id=$1`, [id]);
    return result;
}

export const userServices = {
    createUsers,
    getUsers,
    getSingleUser,
    updateSignleUser,
    deleteSingleUser
}

