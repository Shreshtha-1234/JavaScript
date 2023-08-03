// two ways to declare string
// let a = "Rahul"
// let b = new String("Shrey")
// a and b both are same 




// use string interpolation instead of old way
// console.log(a + "and" + b + "are good friends")
// console.log(`${a} and ${b.toUpperCase()} are good friends`);




// we have __proto__which has many functions for this object
// console.log(a.__proto__) // tells {} -> object


// These functions will give new string rather than modifying older one as stack memory wala concept
// console.log(b.charAt(2));
// console.log(b.indexOf('S'));



// slice substr and substring


// slice excludes last index and allows negative value -> starts from back with index -1

// let str = "Hello World ! Shrey here"
// console.log(str.slice(-4))
// console.log(str.slice(-4,-1))
// console.log(str.slice(1,4))


//substring - same as slice but dont allow negative values .. makes it 0
// let str = "Hello World ! Shrey here"
// console.log(str.substring(-4))
// console.log(str.substring(-4,5))
// console.log(str.substring(1,4))


// substr is same as slice except that its second paarmeter is not end index its length of new string
// let str = "Hello World ! Shrey here"
// console.log(str.substr(0,4))
// console.log(str.substr(-9,6))
// console.log(str.substr(1,5))
// @ depricated 


// replace and replaceAll
// let str = "How are you ? Raman . Raman you are great"
// console.log(str.replace("Raman","Kavita"))
// console.log(str.replaceAll("Raman","Kavita"))


// trim
// let str = "   hello  "
// console.log(str.trim());



// split
// let str = "Hello Ji how are you - kahani sunoge - aap ?"
// console.log(str.split(' '))
// console.log(str.split('-'))


