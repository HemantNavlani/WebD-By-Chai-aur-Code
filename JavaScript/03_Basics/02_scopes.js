// let a = 10;
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// {//scope//}

var c = 300
let a = 300
if (true){
    let a = 10;
    const b = 20
    var c = 30
    // console.log("inner",a);
} 

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hemant"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)//error 
    two()
}
// one()

if (true){
    const username = "hemant"
    if (username==="hemant"){
        const website = "youtube"
        // console.log(username+website);
    }
    // console.log(website); //error
}
// console.log(username);//error

// Interesting example ++++++++++++++++++++++++++++


console.log( addone(5))

function addone(num){
    return num+1;
}

console.log( addone(5))


// console.log(addTwo(5))//error
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))
