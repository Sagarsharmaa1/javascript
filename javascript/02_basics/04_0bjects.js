const tinderuser = new Object()  // singleton object

const tinder={}        // non singleton rest all property will same 

console.log(tinderuser);

tinder.id="123abc"
tinder.name="sagar sharma"
tinder.isloggedin=false

console.log(tinder);

const regularuser={
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "sagar",
            lastname: "sharma"
        }
    }
}
console.log(regularuser.fullname.username.firstname);

const object1={
    1: "a",
    2: "b",
}
const object2={
    3: "a",
    4: "b",
}

// const object3={object1,object2} array ki trah 2no object ko dal dega 1 object me 

const object3=Object.assign({},object1,object2)
// object 1 or object2 ke key or value ko utha kr 1 object me dal dega 
/*imp: 
{} ye target h baki ke sb source h , source ki sari key target me jati h
 
agr empty obj nhi rkhenge to bhi output same aaega pr ye iss bar target object1 ko man lega or 
 object2 ko source fir object2 ke sare key object 1 me 
 */

const object4={...object1,...object2}  // spread opertator

console.log(object3); 
console.log(object4); 

const users=[
    {
      id: 1,
      email: "sagar@1.com"

    }
     ,
    {   id: 2,
        email: "sgharna@gmil.com"
    }

]
users[1].email

console.log(tinder);

// very imp 
console.log(Object.keys(tinder)); // object to array 
console.log(Object.values(tinder));
console.log(Object.entries(tinder));  // hr key or value ko 1 array bna dega 

console.log(tinder.hasOwnProperty("isloggedin"));  // tells that this object have this property or not 


/*********************** destructuring************************************** */

const course = {
    coursename: "js in hindi ",
    courseprice: "999",
    courseInstructor: "sagar"

}
//course.courseInstructor
// changing the name of key and calling key using diffrent syntex

const{courseInstructor: instructor}=course  
console.log(instructor);

/***********************JSON API ************************************** */ 
/*
{
    name : "sagar",
    coursename: "js in hindi ",
    price: "free"
}*/
/*
[
  {},
  {},
  {}
]*/