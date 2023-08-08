// There are three functions of array as forEach loop can not return any value even if we want

const arr = [ 10 , 20 , 30 ,40 , 50 , 60 , 70 , 80 , 90 ,100]

// 1-> Filter
// The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

// const ans = arr.filter((item)=>item>50)
// let a = arr.filter((item)=>{return item>60})
// console.log(ans);




// 2 -> Map
// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

// let ans = arr.map((val) => val*10 )
// console.log(ans);




// Chaining of map and filter  the function that is written first will be executed first 
// let ans = arr.map((val)=>val*10).map((val)=>val+5).filter((val)=>val>500)
// console.log(ans);



// 3 -> Reduce()
// The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.


// let initialValue = 0
// let ans = arr.reduce((accumulator , val)=>val+accumulator,initialValue)
// console.log(ans);


// Add amount of cart
const shoppingCart = [ 
    {
        name:"Ishqia Chai",
        price:32,
    },
    {
        name:"Cutting Chai",
        price:26,
    }
]
const ans = shoppingCart.reduce((acc , val) => acc+val.price , 0)
console.log(ans);
