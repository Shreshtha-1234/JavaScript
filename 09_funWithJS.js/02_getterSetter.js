
class user
{
    constructor(val)
    {
        console.log("invoked constructor");
        this.name = val;
    }
    set Name(val)
    {
        console.log("invoked set");
        this.name = val;
    }
    get Name()
    {
        return this.name;
    }

}

const usr1 = new user("Mayank");
// usr1.name = "raju"  direct changing name prop
// usr1.Name = "rahul" changing name via set()
console.log(usr1.Name);