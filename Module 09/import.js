
import fs from 'fs';
import crypto from 'crypto';
setTimeout(() => { console.log("hello"); }, 0);
setImmediate(() => { console.log("hello imidiate"); });

console.log("Threadpool size:", process.env.UV_THREADPOOL_SIZE);
const curr = Date.now();

fs.readFile("sample.txt", 'utf-8', () => {
    console.log('i/o polling finished');

    setTimeout(() => { console.log("timer 2"); }, 5);
    setTimeout(() => { console.log("timer 4"); }, 2);
    setImmediate(() => { console.log("hello imidiate"); });

    // cpu intensive task
    crypto.pbkdf2('hridoy420', 'salt1', 1000, 1024, 'sha512', () => {
        console.log(`${Date.now() - curr} ms`,'password 1 done');
    })
    crypto.pbkdf2('hridoy4200', 'salt1', 1000, 1024, 'sha512', () => {
        console.log(`${Date.now() - curr} ms`, 'password 2 done');
    })
    crypto.pbkdf2('hridoy42000', 'salt1', 1000, 1024, 'sha512', () => {
        console.log(`${Date.now() - curr} ms`, 'password 3 done');
    })
    crypto.pbkdf2('hridoy420000', 'salt1', 1000, 1024, 'sha512', () => {
        console.log(`${Date.now() - curr} ms`, 'password 4 done');
    })
    crypto.pbkdf2('hridoy4200000', 'salt1', 1000, 1024, 'sha512', () => {
        console.log(`${Date.now() - curr} ms`, 'password 5 done');
    })
});

console.log("last line");