let checkDate = (date) => {
    let dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/
    return dateReg.exec(date) != null
}

let checkEmail = (email) => {
    let emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return emailReg.exec(email) != null;
}

console.log(checkDate("22-03-1981"))
console.log(checkDate("22.03-1981"))
console.log(checkDate("22.03.1981"))


console.log(checkEmail("test@test"))
console.log(checkEmail("test@test.ru"))
console.log(checkEmail("1@test.ru"))