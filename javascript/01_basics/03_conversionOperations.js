let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score)
console.log(typeof(ValueInNumber));
console.log(ValueInNumber);


/*
"33" => 33
"33abc"=> nan
true => 1; false => 0
*/


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false
"" => false
"sagar" => true   any non empty string will give true as a output after converting into a boolean

*/

let someNumber =  33
let stringnumber = String(someNumber)
console.log(stringnumber);
console.log(typeof stringnumber);


//***************************Operations*********************** */

let value = 3 
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3); 

let str1 = "hello"
let str2 = " sagar"

let str3 = str1 +str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);  // if string is in first then remaning all will consider as string 
console.log(1+2+"2");  // if string is in last then first operation will happen and then add as a string

console.log(true);
console.log(+true);
//console.log(true+);  show error
console.log(false);
console.log(+false);
console.log(+"");  // it is showing o because after converting empty string as boolean it gives value 0 which is value for false

let num1, num2, num3
num1= num2= num3= 2+2
console.log(num1);

//prefix and postfix operators

let gamescore = 100
gamescore++;
console.log(gamescore);

let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`);  // Expected output: "x:4, y:3"

let a = 3;
let b = ++a;

console.log(`a:${a}, b:${b}`);  // Expected output: "a:4, b:4"



