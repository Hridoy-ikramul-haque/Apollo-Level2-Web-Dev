// some
// return true if at least one value match

const number = [1, 2, 3, 5, 7, 9];
const hasEvenNumber = number.some(data => data % 2 == 0);
// console.log(hasEvenNumber);


const currentUser = ["user", "editor"];
const featuresAccessRole = ["admin", "manager"];

const canAccess = currentUser.some(role => {
    return featuresAccessRole.includes(role);
});
// console.log(canAccess);


// Array.from()
// const arr = Array.from({ length: 5 }).fill(0);
const arr = Array.from({ length: 5 }, (_, i)=>i);

// console.log(arr);

const range = function (start, stop, jump)
{
    let ar_length = Math.ceil((stop - start) / jump);
    let arr = Array.from({ length: ar_length }, (_, i) => {
        return start + i * jump; // 2 + (0*1) 
    });

    return arr;
};

let automateArray = range(1,10,3); 
console.log(automateArray);