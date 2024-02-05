function sayMyName(){
    console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName//reference
// sayMyName();//execute

// function addTwoNumbers(number1, number2){
    // console.log(number1+number2);
// }
function addTwoNumbers(number1, number2){
    // let res = number1+number2;
    // return res;

    return number1+number2;
}

const res = addTwoNumbers(3,8);
console.log(res);



function loginUserMessage(username='sam'){//default value bhi de skte hai 
    // if (username===undefined) {
    //     console.log("Please enter user name");
    //     return
    // }
    //same code 
    if (!username) {
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hemant"))

console.log(loginUserMessage()) 



function calculateCartPrice(val1,val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(2,400,2000,"1","cd",450));


const user = {
    username : "hemant",
    price :"2121"
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObject(user)
handleObject({
    username:"sma",
    price:300
})

const mynewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,100,222,221]));