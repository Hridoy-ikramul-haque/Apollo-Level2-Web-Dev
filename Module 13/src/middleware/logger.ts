import { Request, Response, NextFunction } from "express";
import path from 'path';

// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
    next();
}

export default logger;