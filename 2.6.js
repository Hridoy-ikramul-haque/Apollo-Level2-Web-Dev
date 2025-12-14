// generate a lookup table

const postsArray = [
    { id: "p-101", title: "Intro to SQL", author: "Alex" },
    { id: "p-102", title: "Data Structure in JS", author: "Beth" },
    { id: "p-103", title: "Understaanding Reduce", author: "Chris" },
    { id: "p-104", title: "CSS Grid tricks", author: "Alex" },
];

const obj = {};
const lookupTable = postsArray.reduce((id, posts) => {
    // console.log(id, posts);
    id[posts.id] = posts;
    return id;
}, {})

// console.log(lookupTable);


// const post = postsArray.find((item, idx, fullarr) => item.id == "p-103"); //O(N)
const post = lookupTable["p-103"]; //O(1)
// console.log(post);

for (let x in lookupTable)
{
    // console.log(x);
}


class Count{
    constructor()
    {
        this.amount = 0;
    }
    addAmount(amount)
    {
        this.amount += amount; 
    }
    printAmount() {
        console.log(this.amount);
    }
};

let amt1 = new Count; 
let amt2 = new Count; 
amt1.printAmount();
amt1.addAmount(100);
amt1.printAmount(); 
amt2.printAmount();
amt2.addAmount(500);
amt2.printAmount();