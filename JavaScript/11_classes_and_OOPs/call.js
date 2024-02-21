function SetUsername(username){
    // complex DB calls

    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    // SetUsername(username)//ye actual me call hi nhi hua , actually call toh hua but return kuch nhi ho paya kyunki uska execution context hi delete ho gaya and iss liye sare variables bhi udd gaye 
    
    SetUsername.call(this,username)//ab hoga call //ye reference hold bhi karega 
    // yaha pe ham this pass kar rahe hai ab vo function is vale this pe kam karega and our problem is cleared
    this.email = email;
    this.password = password
}

const hemant  = new createUser("hemant","hemant@microsoft.com",1234)
console.log(hemant);