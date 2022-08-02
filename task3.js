

let sumValuesArray = (start, end) => {
    let resultSum = 0;
    for (let i = start; i < end; i++) {
        resultSum = resultSum + i;
    }
    return resultSum;
}

console.log(sumValuesArray(50,100))

let showTableMultiplication = (num) =>{
    for (let i = 1; i < 10; i++) {
        console.log(num * i)
    }
}

showTableMultiplication(7)