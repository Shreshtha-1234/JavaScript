// if we create object like this {} object literal , then for 50 users we need to write 50 times

const userR = {
    username : "Shrey",
    email : "shreshtha1835.be21@chitkara.edu.in",
    greetUser : function(){
        console.log(`Hello ${this.username} How are you doing?`);
    }
}

userR.greetUser()







// now here we create a function that returns us a SINGLETON object

function user(username,email)
{
    
    this.username = username;
    this.email = email;
    this.greetUser = function()
    {
        console.log(`Hello ${this.username} How are you doing?`);
    }
    // initially this is a empty object inside/outside function also
    // it is optional to return this
    
    return this
}

// const userOne = user("Shrey","shrey@gmail.com");
// const userTwo = user("Manik","manik@yahoo.com");
// console.log(userOne);
// console.log(userTwo);
// in both cases the same object is being referred i.e. userTwo overwrites userone so we get same data 

const userOne = new user("Shrey","shrey@gmail.com");
const userTwo = new user("Manik","manik@yahoo.com");
console.log(userOne);
console.log(userTwo);
// now userOne and userTwo are instances of user function
// new keyword calls constructor function that creates an instance of user

console.log(userOne.constructor);
console.log(userOne instanceof user);
console.log(userOne == userTwo);
console.log(userOne === userTwo);