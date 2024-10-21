
function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("r");
    
}

 sayMyName()   // function ko execution  ,bina () iske function ka refrence 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// note jb function bnate time ( ) iske andr jb dalte h usee  parameters bolte h 
// jb function ko call krte h tb jo ( ) ke andr dalte h value vo argument hota h 


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
   return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

// pichle vale function me  hmne return nhi kia tha value, iss lie jb function ko va riable ke andr dal kr call kr rhe the undefined aa rha tha 
1// note return likhne ke bad uske niche vala code bexecute nhi hota 

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// yha hmne parameter ke andr value dal di phle se isse function if ke andr jaega hiii nhi chahe hmne argument me kuch na bhi dia hoo 
// or agr argument me kuch dia too vo print hoga 

 console.log(loginUserMessage("sagar sharma"))


// rest operator ( ... )

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))

//  200 val1 me gya 400 val2 me baki ka sb array ke andr 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

 console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));