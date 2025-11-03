// Generate a lookup table
// input 
const postsArray = [
    { id: "p-101", tittle: "Intro to SQL", author: "Alex" },
    { id: "p-102", tittle: "Data Structure in JS", author: "Beth" },
    { id: "p-103", tittle: "Understanding Reduce", author: "Chris" },
    { id: "p-104", tittle: "CSS Grid tricks", author: "Alex" },
];

// postsArray.forEach((data) => console.log(`"${data.id}":${JSON.stringify(data)}`))
// postsArray.forEach((data) => console.log(`${data}`));

const lookup = {}; 
postsArray.forEach((data) => {
    lookup[data.id] = data;
}); 

// console.log(lookup);


const lookupTable = postsArray.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
    
},{})

// console.log(lookupTable);