// // let myName = "hitesh    "

// // console.log(myName.length);
// // console.log(myName.truelength);
// // ye banana chahte hai har string ke liye




// let myHeros = ["thor","spiderman"]

// let heroPower = {
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }
// Object.prototype.hemant = function(){
//     console.log(`hemant is present in all objects`)
// }

// Array.prototype.heyHemant = function(){
//     console.log("Hemant says hello");
// }
// heroPower.hemant()
// myHeros.hemant()
// myHeros.heyHemant()
// // heroPower.heyHemant()//error



// // Inheritance 

// const User = {
//     name : "hemant",
//     email : "hemant@google.com"
// }
// const Teacher = {
//     makeVideo : true
// }

// const TeachingSupport = {
//     isAvailable: false
// }
// const TASupport = {
//     makeAssignment : "JS Assignment",
//     fullTime:true,
//     __proto__:TeachingSupport
// }

// Teacher.__proto__ = User 

// // modern syntax

// Object.setPrototypeOf(TeachingSupport,Teacher)


let userName2 = "chai aur code        "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is : ${this.trim().length}`);
}
userName2.trueLength();


"hitesh".trueLength();
"chaiTea".trueLength();