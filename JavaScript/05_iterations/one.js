// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5){
        console.log("5 is good");
    }
    // console.log(element);

}
// console.log(element);//error


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop value : i-> ${i} and j-> ${j}`);
        // console.log(i+'*'+j+' = ' +i*j);
    }
    
}


let myArr = ["flash","batman","superman"]
// console.log(myArr.length)
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

//  break and continue

// for (let i = 1; i <=20; i++) {
//     if (i==5){
//         console.log("detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);    
// }


for (let i = 1; i <=20; i++) {
    if (i==5){
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);    
}