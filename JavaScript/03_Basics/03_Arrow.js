const user = {
    username : "hemant",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcone to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="hitesh"
// user.welcomeMessage()



// console.log(this);


// function chai(){
//     let username = "hemant"
//     // console.log(this);
//     console.log(this.username);//not accessible
// }

// chai()



// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai();

const chai =()=>{
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
}
// chai();



// const addTwo = (num1,num2)=>{
//     return num1+num2
// }


// const addTwo = (num1,num2)=> num1+num2
// const addTwo = (num1,num2)=> (num1+num2)


// const addTwo = (num1,num2)=> {username:"hemant"} //wrong
const addTwo = (num1,num2)=> ({username:"hemant"})//right

console.log(addTwo(3,4));


