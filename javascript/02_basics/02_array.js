const marvel_heroes =["thor","Ironman","Spiderman"]
const dc_heroes= ["superman","Flash","Batman"]

// marvel_heroes.push(dc_heroes)


// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);   // 3rd index pr jo array h uske andr ka 1st index 

const allheroes=marvel_heroes.concat(dc_heroes)

console.log(allheroes);

// push se 1 array dusre ke andr jata h concat element ko lekr new array bna deta h 

const all_newheroes = [...marvel_heroes,...dc_heroes]  // spread operator 
console.log(all_newheroes);

const another_array= [1,2,3,[4,5,6],7,[6,7],[4,5]]

const real_another_array = another_array.flat(Infinity)  // inside ( ) depth is writen 
console.log(real_another_array);

console.log(Array.isArray("sagar")) // to check a string  
console.log(Array.from("sagar"));   // to convert a array 

console.log(Array.from({name: "sagar"})); // inside is an object we have to tell that weather we have to make array of keys or value 
                                        // if we dont mention it will give empty array ( [])

let score1 = 100                                       
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));














