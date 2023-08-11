// everytime a function is called , its separate execution context is created...which gets destroyed as function call is removed from call stack....this.username is left only in that context

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
     SetUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);