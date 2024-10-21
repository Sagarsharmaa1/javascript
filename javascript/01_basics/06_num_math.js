const score= 400
console.log(score);


const balance = new Number(100)

console.log(balance);

console.log(balance.toString()); // convert to string 
console.log(balance.toString().length);

console.log(balance.toFixed(1));      // to add zero  after the point 

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));        // to give precision to the value if the value was 123.89666 then output will be 124 bacause it will ntake only 3 value precisely 

const hundreds= 100000
console.log(hundreds.toLocaleString('en-IN'));


//***********************************************************MATH *********************************/

console.log(Math);
console.log(Math.abs(-4));  // works as a magnitude

console.log(Math.round(4.6));  // round 
console.log(Math.ceil(4.2));   // 4 se thoda jada  too 5 lega 
console.log(Math.floor(4.2));   // 4 se thoda jada too bhi 4 lega 


console.log(Math.min(2,3,4,5,));  // min nunmber 
console.log(Math.max(3,4,5,1));   // maxm numnbr 

console.log(Math.random());        // random value from 0 to 1 
console.log((Math.random()*10) +1);

const min = 10
const max= 20

console.log(Math.floor(Math.random() * (max-min +1)+min) )

















