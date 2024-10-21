console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2"==2);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null >= 0);

/*
the reason is that equality check (==) and comparision >< >= <= 
works differently.
comparision convert null to a number, treating it as 0.
thats why
null >= 0 is true (because null is o and one of the thing is happening )
and null > 0 is false
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check , not only it checks value it  also checks its datatypes

console.log("2"===2); // this time string will not change to number while doing comparision
console.log("2"==2);  // this time string will change to number while doing comparision


