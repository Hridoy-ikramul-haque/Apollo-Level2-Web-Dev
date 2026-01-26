import { pool } from "../../config/db"
import bcrypt from "bcryptjs";

const loginUser = async (email: string, password: string) => {
    const result = await pool.query(`SELECT * FROM users where email=$1`, [email]);
    if (result.rows.length === 0) return null;
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return null;

    const token =
}