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