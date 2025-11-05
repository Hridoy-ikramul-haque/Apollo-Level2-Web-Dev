const number = [40, 100, 1, 5, 25, 10]; 
const fruits = ["Banana", "apple", "Cherry", "data"];
const sortNumber = number.sort((a, b) => a - b);
const fruitsSort = fruits.sort((a,b)=>a.localeCompare(b)); 
// console.log(sortNumber,number);
// console.log(fruitsSort);


const tagsFromPosts = [
    ["js", "node", "css"],
    ["css", "node", "html"]
];

const uniqueTags = [...new Set(tagsFromPosts.flat(Infinity))];

console.log(uniqueTags);

// array.flat() -break layers;