
var dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/

console.log("22-03-1981".match(dateReg)) 
console.log("22.03-1981".match(dateReg)) 
console.log("22.03.1981".match(dateReg)) 

var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

console.log("test@test".match(emailReg)) 
console.log("test@test.ru".match(emailReg)) 
console.log("1@test.ru".match(emailReg)) 