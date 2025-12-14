import fs from 'fs';
// import fs from 'fs/promises';

// try {
//     fs.writeFileSync('delete.txt', 'i want to delete this file', 'utf-8')
//     console.log('file written done');
// } catch (error) {
//     console.error(error.meaasage);
// }

// fs.appendFile('delete.txt', '\nthis is the append text', (err, data) => {
//     if (err) console.error(err.message);
//     console.log('data append');
// })

// if (fs.existsSync('delete.txt'))
// {
//     console.log('file exists');
//     fs.unlinkSync('delete.txt');
//     console.log('deleted succesfully');
// }
// else console.log("not exists");


// try {
//     fs.unlinkSync('delete.txt');
//     console.log('deleted again');
// } catch (error) {
//     console.error(error.message);
// }



// fs.writeFile('delete.txt', 'this is a deleted file', 'utf-8', (err, data) => {
//     if (err) return err;
//     console.log('files with data created');
// });

// await fs.writeFile('delete.txt', 'this is a deleted file', 'utf-8');

// await fs.unlink('delete.txt');

fs.writeFile('delete.txt', 'this is a deleted file', 'utf-8', (err, data) => {
    if (err) return err;
    else console.log('file crteated');
    fs.unlink('delete.txt', (err) => {
        if (err) console.error(err.message);
        else console.log("succesfully deleted");
    });
})