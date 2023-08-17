const user ={
    username : "Rahul" ,
    get Username()
    {
        return this.username;
    }
}
// console.log(user.username); access direct property
// console.log(user.Username); access via getter

Object.defineProperty(user , 'Username',{set : function(val){
    this.username = val;
}})

user.Username = "pandey ji"
console.log(user.Username);

