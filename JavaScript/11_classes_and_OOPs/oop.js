const user = {
    username:"hitesh",
    loginCount: 8,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

// this keyword --> used for talking about current context 


console.log(this);


// constructor function and new keyword

function User (username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting =function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;//ye likho ya mat likho ye hota hi hai return 
}

// const userOne = User('hitesh',12,true);
// const userTwo = User('hemant',11,false);
// userTwo ne userOne ki value over write kardi so we need new keyword


const userOne = new User('hitesh',12,true);
const userTwo = new User('hemant',11,false);
// userTwo ne userOne ki value over write kardi so we need new keyword

console.log(userOne);
console.log(userTwo);

//  new keyword use kiya toh 
// 1. ek naya object generate hota hai 
// 2. constructor function call hota hai 
// 3. this object ke andar sb add hota hai 
// 4. fir return kar diya jata hai object ko 

console.log(userOne.constructor);