//isInfinite

console.log(Number.isFinite(Infinity)) //false

console.log(Number.isFinite(100)) //true


//isInteger
console.log("--------------------")
console.log(Number.isInteger(1))
console.log(Number.isInteger(0.1))

//isNan
console.log("--------------------")
console.log(Number.isNaN(1)) //false
console.log(Number.isNaN('1')) //false
console.log(Number.isNaN(Number.NaN)) //true

//Number.EPSILON

//it is the smallest value less than 1 that can be reprsented as a number is intended for advanced uses such as testing equality

Number.EPSILON
