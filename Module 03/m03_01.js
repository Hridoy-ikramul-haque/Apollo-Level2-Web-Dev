// stateless & statefull

function count(amount)
{
    let value = 0; 
    let finalAmount = value + amount; 
    console.log(finalAmount);
};

count(2);
count(3);


let obj_count = {
    value: 0,
    addAmount: function (amount) {
        this.value += amount;
        
    },
    viewAmont: function () {
        console.log(this.value);
    }
};

obj_count.addAmount(100); 
obj_count.viewAmont();
obj_count.addAmount(200); 
obj_count.viewAmont(); 