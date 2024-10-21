let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); // very imp date is object


let myCreatedDate = new Date(2023,0,23)      // january start from 0 
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2= new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());


let myTimestamp = Date.now()     // gives us current  time in  milisecond
console.log(myTimestamp);

// now for time stamp we have to acces time from my date because it is a object and we can accees atributes from object 

console.log(myCreatedDate.getTime());

// now we get 2 time we can compare them and we get timestamp 

// to convert time in second divede by 1000
// it give value in decimal to remove use floor 

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long"
    

})















