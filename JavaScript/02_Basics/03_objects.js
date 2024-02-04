// single ton //jab literals ki tarah declare karte hai toh single ton nhi banega aur constructor se agar banega toh single ton  banega 
// Object.create()


//object literals

// objects is in form of key-value pairs

const mySym = Symbol("key1")


const JsUser = {
    name:"Hemant",
    "full name":"Hemant Navlani",
    [mySym]:"mykey1",//ye symbol ka syntax hai todha special hai 
    age:"20",
    location:"Aligarh",
    email:"hemant@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
// console.log(JsUser[email]);//error
console.log(JsUser["email"]); // aise karna hoga if using this way

console.log(JsUser["full name"]);// yaha pe ye hi tareeka hai aur koi nhi hai


console.log( JsUser[mySym]);//symbol syntax is todha different

JsUser.email="hemant@microsoft.com"

// Object.freeze(JsUser)

JsUser.email="hemant@meta.com"//ye chnages honge nhi kyunki object is freezed

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Radhey Radhey");
}

JsUser.greetingTwo = function(){
    console.log(`Radhey Radhey,${this.name}`);
}

// console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());