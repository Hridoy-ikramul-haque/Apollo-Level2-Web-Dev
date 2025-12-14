import path from 'path';
import url from 'url';

const filePath = url.fileURLToPath(import.meta.url);
// console.log(filePath);
// console.log(path);
// const base_path = path.basename('D:/Apollo-Level2-Web-Dev/Module 09');
const base_path = path.basename(filePath);
// const dir_path = path.dirname('D:/Apollo-Level2-Web-Dev/Module 09');
const dir_path = path.dirname(filePath);
// console.log(base_path, dir_path);


// create a path
const fullPath = path.join(dir_path, 'hridoy', 'rafa', 'alu', 'node.js');
console.log(fullPath);
console.log(path.extname(fullPath));
