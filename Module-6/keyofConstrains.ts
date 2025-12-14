type Boroloks={
    car: string;
    bike: string;
    cng: string
};

type NewBoroloks2 = "car" | "bike" | "cng";
type NewBoroloks = keyof Boroloks; //same as NewBoroloks2


let motin: Boroloks = {
    car: "RangeRover",
    bike: "honda",
    cng: "indian"
};

let kalu: NewBoroloks = "cng";

const user = {
    id: 232,
    name: "ikramul",
    address: {
        city: "Dhaka",
        homeTown: "chandpur"
    }
};

let Myname = user.name;


