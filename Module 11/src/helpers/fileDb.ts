import fs from 'fs';
import path from 'path';
const filepath = path.join(process.cwd(), './src/data/users.json');

export function readUser()
{
    const data=fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(data);
}

export function writeUser(user:any)
{
    fs.writeFileSync(filepath,JSON.stringify(user))
}