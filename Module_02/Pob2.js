// Grouping and Aggregating Data


// Scenario: Count every survey and group by response
 

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
const obj = surveyResponses.reduce((acc, post) => {
    acc[post] = Number([acc[post] || 0]) + 1;
    return acc;
}, {});

console.log(obj);