// -> 1. Copying key values from one or more source objects to a target object .... used as concat
// use assign(source , target1, target2 , .. .,...)  source is optional

// let obj1 = {a:1,b:2};
// let obj2 = {c:3,d:4};

// let obj3 = Object.assign(obj1 , obj2);
// let obj3 = Object.assign({}, obj1 , obj2);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);



// 2-> to get either keys or values or entries
let user ={ name :"Shrey" , age : 18 , city :"Lucknow"}
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// 3-> to check whether you have a particular property
console.log(user.hasOwnProperty("names"));
console.log(user.hasOwnProperty("name"));