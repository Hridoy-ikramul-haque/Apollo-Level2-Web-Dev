
class Parent {
    name: string; //common
    age: number; //common
    address: string; //commom

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address
    }
    getSleep(hour: number) {
        console.log(`${this.name} ${hour} ghonta ghumai`);
    }
}


class Student extends Parent {



};



const student1 = new Student("Mr fakibaj", 44, "Nikunja");
student1.getSleep(15);


class Teacher  extends Parent{

    noOfStudents: number //extra properties

    constructor(name: string, age: number,address:string,noOfStudents: number) {
        super(name, age, address);
        this.noOfStudents = noOfStudents;
    }

    takeClass(hours: number) {
        console.log(`${this.name}  ${hours} hour class nei. tar student hoilo ${this.noOfStudents}`);
    }
};

const teacher1 = new Teacher("kudduds kha", 102, "khbnir kha", 34);
teacher1.takeClass(74);