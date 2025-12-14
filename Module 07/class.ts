class Animail {
    public name: string;
    public species: string;
    public sound: string;
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }

};

const dog = new Animail("dog", "nothig", "yes");
const cat = new Animail("cat bhai", "cat", "mew mew");
// cat.makeSound();



class Person {
    constructor(public name: string, public age: number, public id: string) {};
};
const p1 = new Person("kabil", 44, "144");
console.log(p1.id);