const sales = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
    { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
    { category: "Home", item: "Chair", price: 150, quantity: 1 },
    { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
    { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

let totalRevenue = 0;
let itemCount = 0;

const result = sales.reduce((acc, cur) => {
    if (!acc[cur.category])
    {
        acc[cur.category] = { totalRevenue: 0, itemCount: 0 };
    }
    acc[cur.category].totalRevenue += (Number(cur.price) * Number(cur.quantity));
    acc[cur.category].itemCount += (Number(cur.quantity));
    return acc;
}, {})

console.log(result);