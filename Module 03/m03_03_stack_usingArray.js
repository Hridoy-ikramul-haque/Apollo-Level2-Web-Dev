// Mai operation of stack
// push()
// pop()
// peek()
// Lifo(Lat in first out)

class Stack{
    constructor() {
        this.items = [];
    }
    push(item)
    {
        this.items.push(item);
    }
    pop()
    {
        if (this.isEmpty()) return undefined;
        else return this.items.pop();
    }
    isEmpty()
    {
        if (this.items.length === 0) return true;
        else return false;
    }
    print()
    {
        // console.log(this.items);
        console.log(this.items.slice().reverse().join("->"));
    }
    peek()
    {
        console.log(this.items[this.items.length-1]);
    }
};

let stack1 = new Stack(); 
stack1.print();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.print();
stack1.peek();
stack1.pop();
stack1.print();
stack1.peek();