class users{
    constructor(username ,  password)
    {
        this.username = username
        this.password = password
    }

    encryptPass()
    {
        return `******`;
    }
}

const user = new users("Rahul","123");
console.log(user.encryptPass());