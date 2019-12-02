
//just 2 values
function sumTwoNumbers (a, b) {
    return a + b; 
}
console.log(sumTwoNumbers(1, 5)); // => 6

//multiple values

function sumLotsNumbers (a, b, ...values) {
    let sum = a + b; 
    values.forEach(value => (sum += value));
    return sum;
}

console.log(sumLotsNumbers(1, 1, 1, 1, 1, 1, 1)); // => 7