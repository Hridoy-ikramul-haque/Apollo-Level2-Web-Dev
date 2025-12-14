// console.log(process.version);
// console.log(process.platform);
// import fs from 'fs/promises';
import fs  from 'fs';
console.log("start reading............");

try {
    const data = fs.readFileSync('./sample.txt');
    console.log(data);
} catch (error) {
    // throw error;
    console.error(error.message);
}


// fs.readFile('./sample.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })