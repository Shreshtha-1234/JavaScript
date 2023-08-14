class user{
    constructor(username)
    {
        this.username = username;
    }
    seeResult()
    {
        return "Result is 9.0 CGPA";
    }
}

class teacher extends user{
    constructor(username , teacherid)
    {
        super(username);
        this.teacherid = teacherid;
    }
    createResult()
    {
        console.log('Result created')
    }
}

const student = new user("Rahul");
const sir = new teacher("Hitesh" ,"JS6");

sir.createResult();
// student.createResult();  // gives error
sir.seeResult();

console.log(sir instanceof teacher);
console.log(sir instanceof user);
console.log(student instanceof user);
console.log(student instanceof teacher);