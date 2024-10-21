// Array 
// NOTE -  java script can have diffrent data types inside a single array unlike other language
//         can be resizable 

const myArr = [0,1,2,3,4,5]
const myheros= ["shaktiman","superman"]
const myArr2= new Array(1,2,3,4)



console.log(myArr[0]);

// array methods

myArr.push(6)      // to add value in array  in last 
myArr.push(7) 

myArr.pop()       // to delete element from last 

console.log(myArr);

myArr.unshift(9)  // to add value in start 
myArr.shift( )    // to delete ement from start 

console.log(myArr);

console.log(myArr.includes(9));    // gives true or false 
console.log(myArr.indexOf(3));     // find index 

const newarr = myArr.join()     // converts intoo string 

console.log(myArr);
console.log(newarr);
console.log(typeof newarr);


//  slice , splice 

console.log("A ",myArr);

const myn1= myArr.slice(1,3)  // index 1 se 3 tk 3rd index include nhi hoga 

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);


// splice me range include hota h or vo original se delete kr deta h 
// slice me uska 1 copy nikalke deta h orignal me se delete nhi krta 























