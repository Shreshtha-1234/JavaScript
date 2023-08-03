let d = new Date()

// console.log(d);
// console.log(d.toString());
// console.log(d.toDateString());
//  console.log(d.toLocaleString());
// console.log(d.toISOString());
// console.log(d.toJSON());

// typeof date -> object 





// taking user defined time

// let a =  new Date(2023 , 0, 23)  // 0 based indexing for months
// let a = new Date(2023 , 0 , 12 , 5 , 3, 1)
// let a = new Date("01-26-2023")
 let a = new Date("02-27-2023")

// console.log(a.toLocaleString());




// creating timestamp i.e. number of milli seconds from 1 jan 1970 till now
let b = Date.now();
// console.log(b);
// console.log(a.getTime());
// you can compare these two timestamps one is right now one is created by user

// getting timestamp in seconds divide by 1000 but use floor
// console.log(Math.floor(b/1000));



// to get specific date months time etc from time
// console.log(a);
// console.log(a.getDay);
// console.log(a.getMonth);  // kindly add 1 because it gives index




// toLocaleString() important
// you can tell which internationalization and then object (it has diff property)
console.log(a.toLocaleString('default', {weekday:"long"}));
