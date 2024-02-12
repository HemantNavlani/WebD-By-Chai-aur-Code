// const userEmail = "h@hitesh.ai"
// const userEmail = ""
// const userEmail = []
// const userEmail = {}
// const userEmail = undefined
const userEmail = 0

if (userEmail){
    console.log("Got user email");
}
else {
    console.log("Don't have user email ");
}


// Falsy values --> false , 0 , -0, BigInt 0n, null, undefined, NaN iske alawa truthy hoti hai sari 

// Truthy values  --> "0", "false", " " ,[],{},function(){}

// const arr = [];
// if (arr.length===0){
//     console.log('array is empty');
// }

// const emptyObj = {};
// if (Object.keys(emptyObj).length===0){
//     console.log('object is empty');
// }

// false ==0 //true
// false ==''//true
// 0==''//true

// NUllish Coalescing Operator (??) : null undefined

let val1 ;
// val1 = 5 ?? 10
// val1  = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

// console.log(val1);

//Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice>=80 ? console.log("greater than 80 "):console.log('less than 80');