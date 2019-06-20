//slice() to get to the x digit
//This is to slice it into a limit of 4

let digits = 4
let prefix = "0000"

let myNum = 16

console.log(prefix + myNum) // 000016
console.log((prefix + myNum).slice(-digits)) //0016

console.log("-----------------") 

//------------

//using ~~ to truncate a value of an integer.

console.log(~~ 12.34) //12
console.log(~~"56.78") //56
console.log(~~2.6) //2

//returns 0, not NULL
console.log ( ~~"Sunny") //0
console.log( ~~ []) //0
console.log (~~null ) //0

console.log("-----------------") 

//using toFixed(n) and toPrecision(n)
//toFixed - up to the decimal
//toPrecision - total numbers

let number = 242.44534876
console.log (number.toFixed(5)) //252.44545
console.log (number.toPrecision(5)) //242.45

console.log("-----------------") 

//generate random hex color

let randomHex = '#' + Math.random().toString(16).substr(-6)

console.log(randomHex)
