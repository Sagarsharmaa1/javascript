const name = "sagar"
const repoCount = 50

console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

 const gameName = new String('sagar-sharma-ds')   // another method to declare a string 
 
 console.log(gameName[0]);
 console.log(gameName.__proto__);      // to check how many prototype we can use ( length (to check length of string ) etc ) in console we can check all the method 


 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt('4'));
 console.log(gameName.indexOf('r'));

 const newstring = gameName.substring(0,4)
console.log(newstring);
 
 const anotherstring= gameName.slice(-4,4) 
 console.log(anotherstring);

 const newstring1 = "   sagar    "
 console.log(newstring1);
 console.log(newstring1.trim());          // trim remove the space from start and last 

 const Url = "https://sagar.com/hitesh%20chaudhary" // browser  convert the space in link by %20 or some value incluiding for that we use replace 


 console.log(Url.replace('%20','-'))
 console.log(Url.includes('sundr'));
 

console.log(gameName.split('-'));     // converting a string to an array  on the basis of (-)  
 
 
 
 


 
 