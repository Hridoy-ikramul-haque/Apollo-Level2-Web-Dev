


class Node{
    constructor(val)
    {
        this.value = val; 
        this.next = null;
    }
    Create_Node(val)
    {

    }
};

let node1 = new Node(10); 
let node2 = new Node(20); 
let node3 = new Node(30); 
// console.log(node1);
node1.next = node2
node2.next = node3
// console.log(node1.next);

let temp = node1;  
while (temp != null)
{
    console.log(temp.value, " ");
    temp = temp.next;
}