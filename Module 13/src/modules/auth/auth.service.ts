import { pool } from "../../config/db"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from "../../config";

const loginUser = async (email: string, password: string) => {
    const result = await pool.query(`SELECT * FROM users where email=$1`, [email]);
    console.log(result);
    if (result.rows.length === 0) return null;
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch, user);
    if (!isMatch) return null;

    // const secret = config.jwtSecret;

    const token = jwt.sign({ name: user.name, email: user.email }, config.jwtSecret as string, {
        expiresIn: "7d",
    });

    console.log({ token });
    return { token, user };
}


export const authServices = {
    loginUser
}