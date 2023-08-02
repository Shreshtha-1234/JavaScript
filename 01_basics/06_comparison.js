// comparing two variables of same data type is simple

// for numbers take care of ===

// console.log(2===2)
// console.log(2==="2");



// for strings
// Strings are compared letter-by-letter in the “dictionary” order.

// console.log("Rahul" < "Shrey")
// console.log("Rahul" >  "Rahuk");
// console.log("32">"9") string comparison so false
// console.log("32">9) 32 gets converted to int so true




// comparing two different data types
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

// console.log("2"==2)
// console.log("3">=2)
// console.log("3"==2)


// null special
// console.log(null == 0)
// console.log(null >= 0)
// console.log(null <= 0)
// console.log(null > 0)
// console.log(null < 0)

// the reason for this strange behaviour is that == & others (> < >= <=) work differently
// >= & > convert null to 0 and hence give true but == dont
// == does not perform any conversion && UNDEFINED ONLY EQUALS NULL

// undefined special
// console.log(undefined == 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)
// console.log(undefined > 0)
// console.log(undefined < 0)

// > < >= <= converts undefined to NaN
// == undefined equals only null not others

console.log(undefined >= NaN)

// NaN returns false for all comparison

console.log(isNaN(undefined));



// undefined and null
// The values null and undefined equal == each other and do not equal any other value.
console.log(undefined == null)
console.log(undefined === null)



