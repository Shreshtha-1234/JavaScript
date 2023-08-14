// Q1. Can you change value of Math.PI in JavaScript?

console.log(Math.PI);
Math.PI = 5.90
console.log(Math.PI);
// This wont change value of pi to 5.90 as PI property of Math has been defined with enumerable as false
const desc = Object.getOwnPropertyDescriptor(Math , 'PI');
// console.log(desc);


// creating our own object and checking its peoperties

const obj = { username :"Rahul", id :2110991802, pass :"abcrt" ,gatepass:function(){
    console.log("approved");
}};

console.log(Object.getOwnPropertyDescriptor(obj , 'id'));

// changing these props
Object.defineProperty(obj , 'id' , {enumerable: false,})

console.log(Object.getOwnPropertyDescriptor(obj , 'id'));

for( var [key , value] of Object.entries(obj))
{
    if(typeof value != 'function')
    console.log(`The key ${key} has value ${value}`);
}
// you can see that now id cant be traversed