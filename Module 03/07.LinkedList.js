class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null; 
    }
};

class LinkedList

{
    insertNode(val)
    {
        let newNode = new Node(val);
        if (Head.next == null)
        {
            head.next = newNode; 
        }
        else {
            head = newNode;
            tail = newNode;
        }
        printNode()
        {
            let temp = head; 
            while (temp != null)
            {
                console.log(temp.val);
                temp = temp.next;
            }
        }
        deleteNode(2)
        {
            
        }

    }
}

let a2 = [1, 2, 3, 4, 5]; 
let a3 = a2.filter((elem, index) => {
    console.log(elem, index);
})
console.log(a3);