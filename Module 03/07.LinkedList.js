// basic class for building a node
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
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.next = null;
        this.size = 0;
    }
    append(val)
    {
        let new_Node = new Node(val); 
        if (this.head === null)
        {
            this.head = new_Node;
            this.tail = new_Node;
            this.size++;
        }
        else
        {
            // this.head.next = new_Node;
            let temp = this.head; 
            while (temp.next !=null)
            {
                temp = temp.next;
            }
            this.tail = new_Node;
            temp.next = new_Node; 
            this.size++;
        }
    }
    prepend(val)
    {
        let newNode = new Node(val); 
        // let temp = this.head; 
        // newNode.next = temp; 
        // this.head = newNode;
        newNode.next = this.head; 
        this.head = newNode;
        
    }

    insert( )
    {

    }
    print()
    {
        let temp = this.head; 
        while (temp != null)
        {
            console.log(temp.val);
            temp = temp.next;
        }
    }
};

let n1 = new LinkedList();
n1.append(10); 
n1.append(20);
n1.append(30);
n1.append(40);
n1.append(50);
n1.prepend(1000);
n1.print();
let tNode = n1.size;
console.log(tNode);