// -> 1. this refers to current context

// this inside object refers to the object i.e. prints object values

// this alone gives {} empty object in node environment

// this alone in browser gives window object (global object) in browser

//In a function, the global object is the default binding for this (window object for browser)




// arrow function

// const fun = () => {
//     console.log("hello");
// }
// fun()

// const add = (a,b) => (a+b);  // implicit return 
// to return object : wrap in paranthesis

// we can use this in normal function but cant use this in arrow function