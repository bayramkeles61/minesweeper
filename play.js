// function sayBoo() {
//     console.log('Boo!')
//     return function () {
//         console.log('Argh!')
//     }
// }
// setTimeout(sayBoo, 2000);

// function saySquared(n) {
//     console.log(`${n} squared is ${n * n}.`)
// }

// const arr = [1, 2, 3, 4]
// arr.forEach(saySquared)
// arr.forEach((item) => saySquared(item))


function sayIndexAndValue(value, index) {
    console.log(`Index ${index} contains: ${value}.`)
}

const arr = ["cat", 5, "boo", { cheese: 'Cheddar' }, 12]
arr.forEach(sayIndexAndValue)
