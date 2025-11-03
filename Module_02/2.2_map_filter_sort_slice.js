const cart = [
  {
    id: 101,
    name: "Wireless Earbuds",
    price: 49.99,
    quantity: 2,
    thumbnail: "https://example.com/img/earbuds.png",
    category: "Electronics",
    brand: "SoundMax",
    rating: 4.5,
    variant: "Matte Black",
    inStock: true
  },
  {
    id: 102,
    name: "Mechanical Keyboard",
    price: 89.99,
    quantity: 1,
    thumbnail: "https://example.com/img/keyboard.png",
    category: "Accessories",
    brand: "KeyPro",
    rating: 4.8,
    variant: "Blue Switch",
    inStock: true
  },
  {
    id: 103,
    name: "USB-C Cable (1m)",
    price: 9.99,
    quantity: 3,
    thumbnail: "https://example.com/img/cable.png",
    category: "Accessories",
    brand: "ChargeX",
    rating: 4.2,
    variant: "White",
    inStock: true
  },
  {
    id: 104,
    name: "Bluetooth Speaker",
    price: 59.99,
    quantity: 1,
    thumbnail: "https://example.com/img/speaker.png",
    category: "Electronics",
    brand: "BassBoom",
    rating: 4.6,
    variant: "Navy Blue",
    inStock: true
  },
  {
    id: 105,
    name: "Laptop Stand",
    price: 29.99,
    quantity: 1,
    thumbnail: "https://example.com/img/stand.png",
    category: "Office",
    brand: "ErgoLift",
    rating: 4.4,
    variant: "Silver Aluminum",
    inStock: true
  },
  {
    id: 106,
    name: "Smart Watch",
    price: 129.99,
    quantity: 1,
    thumbnail: "https://example.com/img/smartwatch.png",
    category: "Wearable",
    brand: "FitSync",
    rating: 4.7,
    variant: "Black Strap",
    inStock: true
  },
  {
    id: 107,
    name: "Noise Cancelling Headphones",
    price: 189.99,
    quantity: 1,
    thumbnail: "https://example.com/img/headphone.png",
    category: "Electronics",
    brand: "SilentPro",
    rating: 4.9,
    variant: "Graphite Gray",
    inStock: false
  },
  {
    id: 108,
    name: "Portable SSD 1TB",
    price: 109.99,
    quantity: 1,
    thumbnail: "https://example.com/img/ssd.png",
    category: "Storage",
    brand: "DataLite",
    rating: 4.8,
    variant: "1TB",
    inStock: true
  },
  {
    id: 109,
    name: "Gaming Mouse",
    price: 39.99,
    quantity: 2,
    thumbnail: "https://example.com/img/mouse.png",
    category: "Accessories",
    brand: "ClickStorm",
    rating: 4.5,
    variant: "RGB",
    inStock: true
  },
  {
    id: 110,
    name: "4K HDMI Cable",
    price: 14.99,
    quantity: 2,
    thumbnail: "https://example.com/img/hdmi.png",
    category: "Accessories",
    brand: "VideoLink",
    rating: 4.3,
    variant: "2m",
    inStock: true
    },
    {
        id: 111,
        name: "Wireless Earbuds pro",
        price: 56.99,
        quantity: 2,
        thumbnail: "https://example.com/img/earbuds.png",
        category: "Electronics",
        brand: "SoundMax",
        rating: 4.3,
        variant: "Matte Black",
        inStock: true
    }
];




//code

// const electronics_item = cart.filter((val, id) => {
//     return (cart[id].category === "Electronics");
    
// });

const electronics_item = cart.filter(item => {
    // console.log(item.category);
    return item.category === "Electronics";
})

// console.log(electronics_item);


// sort by rating
const sort_electronics = electronics_item.sort((a,b) => b.rating-a.rating);


// console.log(sort_electronics);

// slice best three
const b3_electronics = sort_electronics.slice(0, 3);
console.log(b3_electronics);


const product_name = b3_electronics.map(item => {
    return { name: item.name ,inStock:item.inStock};
});

console.log(product_name);