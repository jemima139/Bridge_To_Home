// const isString = function (x, y, z) {
//     if (typeof x === 'string' && typeof y === 'string' && typeof z === 'string') {
//         return true
//     }
//     return false;
// }

// console.log(isString("1", "2", "3"));

const vowelCheck = function (x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i].toLowerCase() === 'a' || x[i].toLowerCase() === 'e' || x[i].toLowerCase() === 'i' || x[i].toLowerCase() === 'o' || x[i].toLowerCase() === 'u') {
            console.log("vowel")
            sum++;
        } else {
            console.log("consonant")
        }
    }
    return sum;
}
console.log(vowelCheck("laeiouaio"));