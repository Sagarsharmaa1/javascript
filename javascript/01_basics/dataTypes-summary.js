// Primitive

   /* 7 types : string, number , boolean, null,
           undefined , symbol , BigInt 
   */
const score= 100
const scorevalue = 100.3

const isLOggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);

const bigNumber= 34353435355677n

// Refrence (non primitive)

   // Array, Objects , functions 

const  heros = [ "shaktiman", "naagraj", "doga"]


let myObj = {
    name : "sagar",
    age : 18,
}

const  myfunction = function(){
   console.log("hello world");
}



//*********************************memory********** */

// stack ( primitive), heap (non primitive)

let myYoutubename = "hiteshchoudhary"

let anothername = myYoutubename
anothername = "chaiaurcode" 

console.log(myYoutubename);
console.log(anothername);



let userOne = {
   email : "sagar@123",
   upi: "user@ybl",
}

let userTwo= userOne
userTwo.email= "sagar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

/*
jb primitive data type use krte h tb vo stack memory me 
jate h jb hm stack me kuch lete h  too vo uska copy hota h

jb non primitive use krte h too vo heap me jata h or jb heap ke andr
kuch value rkhte h too hme uska refrence value milta h 
mtlb hm jo bhi value change krte h vo orignal value ke andr krte h 
*/