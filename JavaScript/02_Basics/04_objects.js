// const tinderUser = new Object()//single ton object 
const tinderUser={}//non-single ton object 

tinderUser.id="123abc"
tinderUser.name="Ram"
tinderUser.isLoggedIn = false

// console.log(tinderUser);




const regularUser = {
    email : "some@google.com",
    fullname:{
        userfullname:{
            firstname:"hemant",
            lastname:"navlani"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({}//target
// ,obj1,obj2,obj4//source
// )

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id:1,
        email:"hemant@microsoft.com"
    },
    {
        id:1,
        email:"hemant@microsoft.com"
    },
    {
        id:1,
        email:"hemant@microsoft.com"
    }
]

console.log(users[1].email)


console.log(tinderUser);

console.log((Object.keys(tinderUser)));
console.log((Object.values(tinderUser)));
console.log((Object.entries(tinderUser)));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));