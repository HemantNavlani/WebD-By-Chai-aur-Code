//Immediately Invoked Function Expressions (IIFE)

// named IIFE 
(function chai(){
    console.log("DB Connected");
})();//yaha par ye ; jaruri hai 


// ()()


//global scope se kaafi bar pollution ho jata hai usko hatane ke liye hi IIFE ko use karte hai 

// chai()


((name)=>{
    console.log(`DB Connected TWO ${name}`);
})("hemant")