//singleton
//oblect.create

// oblects literals

/*In JavaScript,
 a Symbol is a unique and immutable primitive data type introduced in ES6.
 Symbols are often used to create unique property keys for objects,
  ensuring that no other code can accidentally overwrite or access these properties.
 Uniqueness: Even if two Symbols have the same description, they are not equal.*/

const mySym=Symbol("key1")      // declaring a symbol
const sym1 = Symbol('foo');
const sym2 = Symbol('foo');
console.log(sym1 === sym2); // false

// oblects literals
const jsuser= {
    name : "sagar",
    "full name":"sagar sharma",
    [mySym]: "mykey1",
    age:18,
    location: "hapur",
    email: "newmailidmeri@gmail.com",
    isLOggedIn: false,
    lastloginDays: ["monday","saturday"]
}
/*imp : object keywords ko string hii manta h 
pr jb keyword me space ho too hme usee string me dalna pdta 
or uss keyword ko acses krne ke lie [" "]  use krna pdta h 
kyuki (." ") error show krta h 
*/

/* imp : to use symbol inside an object we use symbol name inside square bracket 
*/


console.log(jsuser.email);
console.log(jsuser["email"]);

console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email = "sagar@gmail.com" // changing the value 
console.log(jsuser.email);

//Object.freeze(jsuser)          // to freeze the object ( koi changes nhi honge fir uss pr )

jsuser.email="hello@gmail.com"
console.log(jsuser);

//freeze se htana pdega phle   
jsuser.greeting=function(){
    console.log("hello js user ");
    
}
jsuser.greetingTwo=function(){
    console.log(`hello js user,${this.name} `);   // to acsess keyword inside the object this.keyword is used 
    
}
console.log(jsuser.greeting()); 
console.log(jsuser.greetingTwo())









