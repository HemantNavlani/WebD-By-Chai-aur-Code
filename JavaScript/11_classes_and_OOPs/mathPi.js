// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)


// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)
// Output 
/* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

// Isse ham change nhi kar skte hai  

const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable: true,
    orderChai : function(){
        console.log("chai nhi bani ")
    }
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    // writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

chai.name = "tea"
console.log(chai.name)

// filhal name par iteration nhi kar paa rhe as we have done enumerable as false
for (let [key,value] of Object.entries(chai)) {
    if (typeof value != 'function')
    console.log(`${key}:${value}`)
}