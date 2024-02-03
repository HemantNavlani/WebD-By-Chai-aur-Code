// Go to browser console print a string see its methods and jo smjhna ho usko mdn pe searchkarke smjh lo 


const name = "hitesh"

const repoCount = 50

//outdate syntax
// console.log(name+repoCount+" value");

//modern syntax known as sting interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('hitesh-hc-com');

console.log(gameName[0])

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase())

console.log(gameName.charAt(1))
console.log(gameName.indexOf('t'))
console.log(gameName.indexOf('z'))


const newSting = gameName.substring(0,4);
const newString = gameName.substring(-8,4);//yaha ham negative nhi de skte hai 
console.log(newSting)

const anotherString = gameName.slice(-8,4);//yaha de skte hai negative
console.log(anotherString)


const newString1 = "   hitesh   "
console.log(newString1);
console.log(newString1.trim());
console.log(newString1.trimEnd());

const url = "https://hemant.com/hemant%20navlani"

console.log(url.replace("%20","-"))


console.log(url.includes('hemant'))
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))