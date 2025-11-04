//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }



// sol

const count = surveyResponses.reduce((count, char) => {
    // console.log(count,char);
    count[char] = (Number(count[char]) || 0) + 1;
    return count;
}, {});


// console.log(count);

// let obj = {};
// const count2 = surveyResponses.forEach((data) => {
//     obj[data] = (Number(obj[data] || 0)) + 1;
// });


let obj = {}; 
const count2 = surveyResponses.forEach((data) => {
    if (obj[data]) obj[data] += 1;
    else obj[data] = 1;
})
console.log(obj);