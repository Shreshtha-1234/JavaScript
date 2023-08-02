// This code will tell you everything about let var and cosnt

var a = "Hello ji"
let b = 34
const c ="Namaste India"; // gives error as const should be initialised while declaring 
d = 900
//console.table([a,b,c,d])
var a = 847

//console.table([a,b,c,d])


//console.log(x);
//console.log(y); it gives error 
var x = "Rahul"
let y = 78

console.log("This shows functional scope of var as variable index is available on each new interation so gets updated")
for (var index = 0; index < 5; index++) {
    setTimeout(function () {
        console.log(index);
    }, 100)
    
}

console.log("Using let");
for (let index = 0; index < 5; index++) {
    setTimeout(function () {
        console.log(index);
    }, 1000)
    
}