/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

function createUser(username ,age)
{
    this.username = username ;
    this.age = age;
}

createUser.prototype.greetUser= function()
{
    console.log(`Welcome ${this.username}`);
}

const userOne = new createUser("Rahul",80)
userOne.greetUser();

// on line 26, new keyword is used with userOne so an empty new object is created

// then this object gets linked to prototype property of createUser()

// now fn  createUser() is called with rahul 80 and is bound with object

// if we return something then userOne will have that thing else implicitly this object is returned