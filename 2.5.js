const postsArray = [
    { id: "p-101", tittle: "Intro to SQL", author: "Alex", price: 2000 },
    { id: "p-102", tittle: "Data Structure in JS", author: "Beth", price: 1500 },
    { id: "p-103", tittle: "Understanding Reduce", author: "Chris", price: 200 },
    { id: "p-104", tittle: "CSS Grid tricks", author: "Alex", price: 1000 },
];

// count subtotal

const subtotal = postsArray.reduce((acc, item) => {
    return  acc + item.price;
},0);

// console.log(subtotal);

// find best scorer
const players = [
    
        {name: "Jamal Bhyan", score: 88},
       { name: "Jamal", score: 128},
       { name: "abir", score: 43},
       { name: "sheikh", score: 99},
       { name: "sohel", score: 65},
        {name: "bakkar", score: 87}
    
];

const best_scorer = players.reduce((bs, players) => {
    return (bs < players.score ? players.score : bs);
}, 0);

console.log(best_scorer);