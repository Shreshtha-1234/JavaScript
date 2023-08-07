// traversing an array out of its length dont give error but gives undefinded

// for loop
// for(let i=0;i<5;i++)
// console.log(i);


// while loop
// let a = 1 
// while(a<10)
// console.log(a);


//do while
// let a = 10
// do{
//     console.log(a);
//     a++;
// }while(a<20);




// for of loop
// const arr = [ 10 , 20 , 30 , 40 ,50]
// for(var i of arr)
// {
//     console.log(i);
// }


// using Map in js -> maps are ordered and iterable
const m = new Map()
m.set("Lucknow","UP32")
m.set("Kanpur ","UP78")
m.set("Hardoi","UP30")

// // for( let a of m)
// // console.log(a);

// for (let [ key, value] of m)
// {
//     console.log(key +"->"+value);
// }

// for (let key in m)   not allowed  as maps are not enurable
// { 
//     console.log(key);
// }


// for in

// Using for of loop in object is not allowed
// use for in loop for object
// const obj = { name : "Hello",age:19,city :"Lucknow"}
// for( let a in obj)
// {
//     console.log(a + "->" + obj[a]);
// }

// const arr = [ 10 ,20,30,40,50]
// for( let a in arr)
// {
//     console.log(a);
// }




//  for each loop -> It is a high order function that takes a callback fn
// higher order fn is one that either takes a fn as patameter or returns one
// callback fn is one that does not have a name 


// function printWallah(item)
// {
//     console.log(item);
// }
// const stud = [ "Mohit" , "Rahul", "Shobhit","Mayank"]



// stud.forEach( function(val){console.log(val)})
// stud.forEach( (val)=>console.log(`hello ${val}`))
// stud.forEach(printWallah)   we can give our function to it but dont call it just specify



// stud.forEach(function (val , index ,arr)
// {
//     console.log(val +"    "+index+"   "+arr);
// })

