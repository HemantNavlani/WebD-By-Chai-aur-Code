const myObj = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


const arr = ['js','java','cpp','rb']
for (const key in arr) {
    // console.log(key);
    // console.log(arr[key]);
}


const map = new Map();
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')

// for (const key in map) {
//     //not possible
//     console.log(key);
// }