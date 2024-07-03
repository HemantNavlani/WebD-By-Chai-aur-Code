const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Aligarh"//ye tareeka acha nhi hai but kiya ja skta hai 

let accountState//ye undefined hoga 


// accountId = 2; //not allowed as it was declared const

accountEmail = "hc@hc.com";
accountPassword = "212121"
accountCity = "Banglore"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);


//Now var is not used nowadays, only const and let is mainly used

// {
// This is a scope
//}

/*
Prefer not to use var
because of issue in block scope and functional scope 
 */

console.log("a");
Promise.resolve().then(()=>{
    
})