const coding = ['js','ruby','java','python','cpp']



//for each loop kuch return nhi karta 
// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

//filter return karta hai 
// const newNums = myNums.filter((num)=>num>4);

// const newNums = myNums.filter((num)=>{
//     return num>4
// });


const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);


const books = [
    {title : "book one", genre:"fiction",publish:1981,edition:2004},
    {title : "book two", genre:"history",publish:1989,edition:2008},
    {title : "book three", genre:"science",publish:1991,edition:2001},
    {title : "book four", genre:"non-fiction",publish:1992,edition:2003},
    {title : "book five", genre:"fiction",publish:1984,edition:2000},
    {title : "book six", genre:"history",publish:1999,edition:2012},
    {title : "book seven", genre:"science",publish:2001,edition:2024},
    {title : "book eight", genre:"fiction",publish:1997,edition:2014},
    {title : "book nine", genre:"non-fiction",publish:1977,edition:2021},
]

// const userBooks = books.filter((bk)=>bk.genre==='history')
let userBooks = books.filter((bk)=>bk.publish>=1990&& bk.genre==='history')


console.log(userBooks);