// JavaScript Map is a collection of elements where each element is stored as a key, value pair.

let arr = [["key", "value"], ["abir", "zeba"]]; 
// Create a map
let maparr = new Map(arr);
// console.log(maparr); 



let setMap = new Map(); 
// set map value
setMap.set(1, "abir");
setMap.set(2, "abirzeba");
setMap.set(3, "abir");
// get map value
// console.log(setMap);
// console.log(setMap.get(3));
// console.log(setMap.values());



// methods
// clear( )	Removal of all the elements from a map and making it empty.
// delete ()	Delete the specified element among all the elements which are present in the map.
// entries()	Returning an iterator object which contains all the[key, value] pairs of each element of the map.
// forEach()	The map with the given function executes the given function over each key - value pair.
// get()	Returning a specific element among all the elements which are present in a map.
//  has()	Check whether an element with a specified key exists in a map or not.
// keys()	The keys from a given map object return the iterator object of keys.
// set()	Add key - value pairs to a Map object.
// values()	Return a new Iterator object that contains the value of each element present in Map.



const obj = {
    courseName: "next level bootcamp",
    courseId: 3
}; 

const objmap = new Set(Object.entries(obj)); 
// console.log(objmap);


const abir1 = { mission: "marriage" };
const abir2 = { mission: "body building" };
const abir3 = { mission: "learn css" };
const rah = 5;

// object ultimatey convert key as a string 
const obj2 = {
    nextLevel: { courseId: "level2" },
    "program hero": { duration: "6 months" },
    true: { completion: "all assignments" },
    [abir1]: { missiondoneyet: false },
    [rah]:10
    
}
// In object we can not assing an object as key
// console.log(obj2);
// console.log(obj2.nextLevel);
// // console.log(obj2.program hero); //error
// console.log(obj2["program hero"]);
// console.log(obj2['[object Object]']);

const newAbir = new Map(); 
newAbir.set(abir1, { missonDone: "no" });
newAbir.set(abir2, { missonDone: "middle" });
newAbir.set(abir3, { missonDone: "processing" });

// console.log(newAbir);

newAbir.forEach((value, key) => {
    value.missonDone+=" status"
})
// console.log(newAbir);


const keys = newAbir.keys();
const keysArr = [...newAbir.keys()];
// console.log(keysArr);



// for of loop 
// console.log(newAbir);
console.log(newAbir.entries());
for (let x of newAbir.keys())
{
    // console.log(x);
    x.mission = "duo " + x.mission;
}

console.log(newAbir);