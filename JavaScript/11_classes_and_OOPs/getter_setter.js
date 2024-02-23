class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    //agar getter define kiya hai toh setter bhi karna hi hoga else error aayega and vice versa also 
    get password(){
        return `${this._password.toUpperCase()}hemant`;
    }
    set password(value){
        this._password = value;
    }

    get email (){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email= value
    }
}

const hitesh = new User('h@hitesh.ai',"abc")
console.log(hitesh.password)
console.log(hitesh.email)

console.log(hitesh._password)
console.log(hitesh._email)