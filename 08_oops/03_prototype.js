Object.prototype.greetUser = function()
{
    console.log("user welcomed");
}
Array.prototype.greetMe = function()
{
    console.log("greet me called");
}

const arr  =[ 10 , 20 ,30]
const obj = {name:"shrey"}
arr.greetUser()
arr.greetMe()

obj.greetUser()
// obj.greetMe() not allowed as function dont go in upward direction




// # inheritance

const user = {
    name :"Shrey",
    age : 19,
    email:"shrey@amazon.com"
}

const employee = {
    salary : 200000,
    // __proto__ : user
    
}
Object.setPrototypeOf(employee,user);
// employee can now use prototype of user
// __proto__ points to prototype of other

console.log(employee.name); 




// adding a function in prototype of object to trim spaces

Object.prototype.trimSpaces = function()
{
    console.log(`The length of trimmed string is ${this.trim().length}`);
}

var str = "HELLO  ";
str.trimSpaces();
"shrey   ".trimSpaces();