const myArr = []
// %DebugPrint(myArr)

// two types of array --> continuous, holey

//further types

// SMI (small integer)
// Packed element
// Double (float, string,function)

const arr2 = [1,2,3,4,5,6]

// PACKED_SMI_ELEMENTS

arr2.push(6.0);
// PACKED_DOUBLE_ELEMENTS

arr2.push("2")
// PACKED_ELEMENTS




arr2[10] =11
//HOLEY_ELEMENTS


console.log(arr2);
console.log(arr2.length)
console.log(arr2[9])
console.log(arr2[19])
//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,9)
//hasOwnProperty(Object.prototype,9)

// holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2])

// Optimised order
// SMI > DOUBLE > PACKED 

// H_SMI> H_DOUBLED > H_PACKED 

const arr4 = new Array(3)
//just 3 holes //HOLEY_SMI_ELEMENTS

arr4[0]= "1"//HOLEY_ELEMENTS
arr4[1]= "2"//HOLEY_ELEMENTS
arr4[2]= "3"//HOLEY_ELEMENTS

const arr5 = []
arr5.push('1')
arr5.push('2')
arr5.push('3')

//note --> try to use the inbuilt methods --> vo jyada optimised hai 