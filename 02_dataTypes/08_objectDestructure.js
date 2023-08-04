// Object de-structure 

const course = {
    courseName : "JS-Wallah",
    price : 999,
    courseInstructor : "shrey"
}

const {courseName: name, price} = course
// console.log(courseName); -> it wont work now we refer to it with name only
console.log(price);
console.log(name);


//  JSON API intro
// JSON is just like an object with keys as string and values can be string num whatever
// {
//     "name":"shrey",
//     "age":19
// }

