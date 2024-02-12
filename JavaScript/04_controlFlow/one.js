// if 

// if (condition){//condition should be true to execute inside code 
// 
// }

// if (true){
    // 
// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn){
    // body
// }

// < , <= ,>,>= == ,!= ,===, !==

// if (2=='2'){
//     console.log("executed");
// }
// if (2==='2'){
//     console.log("executed");
// }

// const temp = 41
// if (temp<50){
//     console.log("less than 50");
// }
// // console.log("temp greater than 50");
// else{
//     console.log("temp greater than 50");
// }

const score = 200
if (score>100){
    const power = "fly"
    // var power = "fly"

    // console.log(`User power : ${power}`);

}
// console.log(`User power : ${power}`);


const balance = 1000;
// if (balance>500) console.log("test"),console.log('test2'); // bad readability

// if (balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (isUserLoggedIn && debitCard && 2==3){
    console.log("Allowed to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}