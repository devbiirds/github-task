let sumItemsArray = (arr) => arr.reduce(function (a, b) {
    return +a + +b;
})

let increaseItemsArray = (arr) => arr.map((item) => item * 2)

console.log(sumItemsArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(increaseItemsArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))