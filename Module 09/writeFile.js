import fs from 'fs/promises';
console.log('start');
// asyns process
// fs.writeFile('data.txt', 'writting bugichugi', 'utf-8', (err, data) => {
//     if (err) console.error(err.message);
//     console.log("file written");
// });

async function writeFileExample() {
    console.log('write file started');
    await fs.writeFile('data.txt', 'fhweififif', 'utf-8', () => {
        console.log('write buchugi done');
    });
    const data = { name: "fuck", age: 23 };
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', () => {
        console.log('json done');
    });
}

await fs.writeFile('data2.txt', 'last data', 'utf-8', () => {
    console.log('last file');
})

console.log('end');

writeFileExample();