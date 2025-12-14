


// []
// [2,1]; add
// [1] remove
// start-> 2-> 1-> end
// peek -> 2 
class Queue{
    constructor()
    {
        this.items = [];
    }
    enqueue(item)
    {
        this.items.push(item);
    }
    dqueue()
    {
        this.items.shift();
    }
    peek()
    {
        console.log(this.items[0]);
    }
    print()
    {
        console.log("start", "->", this.items.join("->"), "->", "end");
    }
}

let Queue_1 = new Queue(); 
Queue_1.print(); 
Queue_1.enqueue(10);
Queue_1.enqueue(20);
Queue_1.enqueue(30);
Queue_1.dqueue();
Queue_1.print(); 
Queue_1.peek();