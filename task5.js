let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr.reduce(function (a, b) {
    return +a + +b;
})
)

let arr2 = [];
arr.forEach((item) => {
    arr2.push(item * 2)
})

console.log(arr2)