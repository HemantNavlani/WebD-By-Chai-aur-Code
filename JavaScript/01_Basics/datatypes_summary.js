// Javascript is dynamically typed language
//Null is an object


// Data types are mainly of 2 types 
// Primitive and Non-prmitive 
// Kaise data ko memory me rakha jata hai aur kaise usko access kiya jata hai 

//  Primitive
// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

//Examples


const score = 100;
// const score = false;
const scoreValue = 100.3;
const isLoggedIn = false;

const outsideTemp = null
let userEmail;

//symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id)
console.log(anotherId)
console.log(id===anotherId)

// bigInt

const bigNumber = 21239939393993939939393n

// Reference (Non- primitive)
// Arrays, Objects, Functions

//arrays
const heros = ["shaktiman","naagraj","dpga"];

let myObj = {
    name:"hemant",
    age:22
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction) //function (isko kahte hai object function hai vaise)
console.log(typeof heros)
console.log(typeof id)

// non - primitive data types ka typeof karne pe object hi aata hai 

// https://262.ecma-international.org/5.1/#sec-11.4.3


// -------------------------------------------------


//Memory

//Stack (Primitive), Heap(non-primitive)

// stack me copy milta hai jab kuch usme rakhte hai toh
// and heap me uska reference milta hai 

let myYoutubeName = "jaagoreaders"//this goes in stack 
let anothername = myYoutubeName
anothername="hemantnavlani"
console.log(myYoutubeName)
console.log(anothername)


let userOne = {
    email:"hemant@google.com",
    upi:"hemant@ybl"
}
let userTwo = userOne

userTwo.email="hemant@microsoft.com"

console.log(userOne.email)
console.log(userTwo.email)