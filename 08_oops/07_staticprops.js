//  Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
// static properties cant be used by objects of child classes as well in case of inheritrance

class user{
    constructor(username)
    {
        this.username = username;
    }

    static loguserName()
    {
        console.log(`hello`);
    }
}

const sir = new user("hitesh");
// sir.loguserName();
// loguserName();
user.loguserName();
