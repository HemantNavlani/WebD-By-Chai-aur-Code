class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log( hitesh.createId())//static hai it cannot be accessed from outside

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
    
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()
console.log(iphone.createId())