// functions can have default value in parameter

// -> 1 . Defining function
// function add(number1 , number2=90)
// {
//     return number1 + number2
// }
// let ans = add(10,20);
// console.log("The answer is ", ans);
// console.log(add(10));




// -> 2. REST OPERATOR : taking multiple parameters in one variable 
//  while the spread operator expands elements of an iterable, the rest operator compresses them.

// function calculate(val1 , val2 , ...num)
// {
//     return  num[0] + num[1] + num[2] + num[3];
// }
// console.log(calculate(10,20,30,40));



// -> 3. passing any object to a function
// function tellName(obj)
// {
//     console.log(`The username is ${obj.name}`);
// }
// tellName({name:"Shrey", age:19})



// -> 4. passing any array to a function
// function tellSecondValue(arr)
// {
//     console.log(`The second value is ${arr[1]}`);
// }
// tellSecondValue([10,100,1000])



// -> 5. The Optional Chaining Operator (?.)
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
// function tellName(obj)
// {
//     console.log(`The username is ${obj?.name}`);
// }
// tellName()



// IMPORTANT calling function before decalring
// in case of direct function..it is allowed because of hoisting
// in case of function stored in variable not allowed just like const

console.log(fun1("Raj"));
console.log(fun2("Shrey"));

function fun1(val)
{
    return `Hello ! ${val} How are you?`
}

const fun2 = function(val){
    return `Hello ! ${val} How are you?`
}