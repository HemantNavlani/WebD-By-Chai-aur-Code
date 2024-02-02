//let score = 99;//yaha iska type pata hai ache se 
// let score = "99"
// let score = "99abc"
// let score = null
// let score = undefined
// let score = true
let score = "Hemant"
// const {score} = req.body//manlo ye kahi se aarahi hai toh hame iska type nhi pata 

// score ka type check kar rahe hai 
console.log(typeof score);
//it is important to check hame nhi pata ki value kaha se aayi hai, ho skta hai kahi frontend se aarahi ho ya aisa kuch matter ho toh isliye ham aisa kar te hai 


console.log(typeof (score));

let valueInNumber = Number(score)//score is converted to number

console.log(typeof valueInNumber);
console.log(valueInNumber);//ispe hamesha rely na kare run karke dekho 


//"99"=>33
//"33abc"=>NaN
//true=>1 false=>0

// let isloggedIn = 1;
// let isloggedIn = "";
let isloggedIn = "hemant";

let booleanIsLoggedIn = Boolean(isloggedIn)

console.log(booleanIsLoggedIn);


//1=> true; 0=> false

// "" => false
//"hemant" => true


let someNumber = "100"

let stringNumber  = String(someNumber);
console.log(typeof stringNumber);


//*********** OPERATIONS ***************/

let value = 3

let negValue = -value

console.log(value)
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);


let str1 = "hare"

let str2 = " krishna"

let str3 = str1+str2
console.log(str3);


console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(3+4*5%3);//do not write this much confusing code use brackets

console.log(true);
console.log(+true);
// console.log(true+);//error

console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;


let gameCounter = 100;
gameCounter++;
++gameCounter;

//you should know about prefix and postfix 
console.log(gameCounter);

// link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion