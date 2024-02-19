// // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting



// //ye abhi naya hi aaya hai 
// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task 
//     // DB calls ,network calls, cryptography
//     setTimeout(function(){
//         console.log("Async Task is complete");
//         resolve()
//     },1000);
// })
// // then and resolve ka aapas me connection hai 
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// // other way

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2 ");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         //resolve me data bhi bhej rahe hai ab 
//         resolve({username:"chai",email:"example@chai.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         let error = false;
//         if (!error){
//             resolve({username:"hemant",password:"123456"})
//         }
//         else{
//             reject('ERROR : Something went wrong')
//         }
//     },2000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Promise is either resolve or rejected ");
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error){
//             resolve({username:"javascript",password:"123456"})
//         }
//         else{
//             reject('ERROR : JS went wrong')
//         }
//     },2000)
// })


// Async await approach
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//     console.log(response);    
//     }
//     catch(err){
//         console.log(err);
//     }
    
// }
// consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json();
//         console.log(data);
//     }catch(e){
//         console.log("Error : ",e);
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
// is chaining ko thenable bolte hai 
.then((data)=>{
    console.log(data);
})
.catch(e=>{ 
    console.log("Error : ",e);
})

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject n HTTP errors (484, etc.). Instead, a then() handler must check the Response.ok and/or Response,status properties.