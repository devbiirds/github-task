function diff(a, b) {
    return Math.abs(a - b)
}

function isWord(str) {
    return str.length == 1 ? true : false
}

console.log(diff(7, 15))
console.log(isWord('a'))
console.log(isWord('ab'))