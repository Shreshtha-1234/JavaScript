// IIFE -> Immediately Invoked Function Expression

// why ?  2 reasons 
// if a file has just db connection so we want as soon as file starts db connection should be made
// global scope se pollution na ho..global variable se problem hoti hai


// (definition)(function call)

// (function greet(){console.log("hello")})()  //named iife 

// always end the self invoking function with ;

// (()=>(console.log('hi')))();  // unnamed iife

// ((num1 , num2)=>console.log(num1+num2))(5,5);  // parameter passing in iife