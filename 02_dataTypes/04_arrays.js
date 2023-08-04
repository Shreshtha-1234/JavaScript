// arrays are resizable in javascript and can contain different data types


// two ways to create arr
// const arr = [ 2 ,4 , "six" , true]
// const arr2 = new Array(33,34,11,33)



// Array methods

// arr.push("9") //adds element at end
// arr.pop()  // removes last element

// arr.unshift(1)  // inserts the element at the beginning
// arr.shift()  -> removes element from beginning




// join lets you use any parameter in place of "comma" in toString 
// console.log(arr.toString());
// console.log(arr.join("*"));




// IMPORTANT slice() and splice()


// slice() is used to create a new array with sliced elements
// let a = [ 1 ,2 ,3 ,4,5,6]
// console.log(a.slice(2));
// console.log(a.slice(2,4));


// splice() doesn't create new array.It just removes element from original array 
// splice(at which index element to be added , how many elements should be removed, elements to be added)


let a = [1 ,2,3,4,5,6]
// console.log(a.splice(1,2));


// deleting an element from specific position without leaving holes
// console.log(a.splice(2,1));


// adding elements
// a.splice(1,3,999,99,9)
// console.log(a);



