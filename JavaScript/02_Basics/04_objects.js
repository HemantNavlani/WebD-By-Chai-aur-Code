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








const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor;//correect hai ye bhi 

const {courseInstructor} = course//ye todha bdya tareeka hai 
const {courseInstructor:instructor} = course//ye todha bdya tareeka hai 

console.log(courseInstructor);
console.log(instructor);


// //For React 
// const navbar = ({company})=>{

// }
// navbar(company = "hitesh")


// Backend se data json me aata hai


// Ye JSON data hai 
// {
//     "name" :"hitesh",
//     "coursename" : "js in hindi",
//     "price":"free"
// }

//Example// const api = "https://api.github.com/users/HemantNavlani" 

//hamesha api me object hi mile aisa jaruri nhi hai 