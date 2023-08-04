// merging two array

// let a = ["rahul","mayank"]
// let b = [ 1,2,3,4,5]

// a.push(b)
// a.push(...b)   //spread operator
// let d = [...a ,...b]
// let d = a.concat(b)   // it returns new array
// console.log(d);


// FLAT reduces dimensionality and takes what depth u need or by default 1
// let arr = [ 1, 2, 3, 4, [5,6,7] , 8 , 9 ,10, [10 ,[11,12,130]]]
// console.log(arr.flat());
// console.log(arr.flat(1));
// console.log(arr.flat(Infinity));


// isArray checks whether it is array
// console.log(Array.isArray("hello"));


// Array.of() - to make an array from given set of values
// let x = 10
// let y = 20
// let z = 30
// let f = Array.of(x,y,z)
// console.log(f);

// from - to make an array from string
// let c = Array.from("mohit")
// console.log(c);

// IMPORTANT when making arrays from object
let obj = {name : "shrey", age : 20};
let d = Array.from(obj)   // it cant do bcoz it doesnt know whether to make array of key or array of values
let e = Array.from(Object.keys(obj))  
let f = Array.from(Object.values(obj))  
let g = Array.from(Object.entries(obj))  
console.log(d);
console.log(e);
console.log(f);
console.log(g);




