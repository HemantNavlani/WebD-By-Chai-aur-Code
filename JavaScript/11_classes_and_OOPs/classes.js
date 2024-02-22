// ES 6 ke feeatures hai ye 

// class User{
//     constructor(username,email,password){
//         this.username =username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User('hemant',"hemant@google.com","12334")
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

// Behind the scene

function User(username,email,password){
    this.username =username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const userA = new User('hemant',"hemant@google.com","12334")
console.log(userA.encryptPassword());
console.log(userA.changeUsername());