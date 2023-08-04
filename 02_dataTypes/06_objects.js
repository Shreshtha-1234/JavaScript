// -> 1. three ways to create objects

// way 1 : object literak
// const a = {}

// way2 : constructor method that creates singlton object
// Object.create()
//singleton means we can create only one object of a class and that object can be accessed globally

// way 3: let a = new Object() SINGLETON OBJECT



//  -> 2. Accessing object members
// let a = { name : "Shrey","full name":"Shrey Gupta" ,age : 19 , location:"Lucknow", isLoggedIn:true}
// console.log(a.name);
// console.log(a["name"]);
// console.log(a["full name"]);



//  -> 3. Using symbol() to get key
// while using symbol in object make sure to wrap it in [] and also using it by this way obj[sym]

// let myKey = Symbol("2110991835")
// let a = { name : "Shrey","full name":"Shrey Gupta" ,
// age : 19 , location:"Lucknow", isLoggedIn:true,
// [myKey]:1835}
// console.log(a[myKey]);



// -> 4. if you dont want anyone to change the object use freeze()
// dont give error but wont get changed
// console.log(a);
// Object.freeze(a);
// a.name="hey"
// console.log(a);



// -> adding function to object
let obj = { name : "Shrey"}
obj.fun = function()
{
    console.log(`Welcome! ${this.name}`);
}
console.log(obj.fun());