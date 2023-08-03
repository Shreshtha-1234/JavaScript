// let a = new Number(700)
// let b = 400
// let c = Number(567)
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);



// This declaration explicitly tells that 700 is a number in console
// let balance = new Number(700)
// console.log(balance);

// to String
// console.log(balance.toString);


// precision value : toFixed
// console.log(balance.toFixed(2));

// toPrecision
// let a = 8753.89
// console.log(a.toPrecision(5));
// console.log(a.toPrecision(4));  // roundoff hi krega
// console.log(a.toPrecision(3));  // decimal ke left me kroge to round off nhi exponent krdega


// digits ke beech me comma chahie to jaisa commerce me hota hai
// let rs = 1000000
// console.log(rs.toLocaleString()) // million wala 
// console.log(rs.toLocaleString('en-IN')) // INDIAN way


// max aur min value 
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER); // sirf integer not float
// console.log(Number.MIN_VALUE)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// math library default aaati hai
// console.log(Math.PI);
// console.log(Math.round(6.8))
// console.log(Math.floor(6.8))
// console.log(Math.ceil(6.8))
// console.log(Math.pow(6,3)) // -> same as 6**3
// console.log(6**3)



// Random() returns value between 0(included) & 1 (excluded)    <1

console.log(Math.random())

console.log(Math.floor(Math.random()) )  // random integers here 0 because random gives less than 1

console.log(Math.floor(Math.random()*10) ) //can give 0 as well

console.log(Math.floor(Math.random()*10) + 1) // min 1 aegi value

// Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * (100+1)));


// very important to get random number between min included and max excluded
console.log(Math.floor(Math.random() * (max - min) ) + min);


// very important to get random number between min and max both included
console.log(Math.floor(Math.random() * (max - min + 1) ) + min);

// why adding min ? if random fn gives 0.0-- then multiplying it by 20(lets say) gives 0.87 floor wil give 0
// so to cover that

// why max - min -> to get how many values do you need

// why +1 => just to have max value included as random never gives 1

