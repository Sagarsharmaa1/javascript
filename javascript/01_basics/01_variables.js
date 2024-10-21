const accountId = 144553;
let accountEmail = "sagar@google.com"
var accountPassword = "12345"
accountCity= "hapur"
let accountState;


// accountId = 2    not allowed 


accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "noida"

// accountState=123

/*
prefer not to use var 
because of issue in block scope({}) and functional scope

*/
console.log(accountId);

console.table([accountEmail,accountPassword,accountCity,accountState]);

