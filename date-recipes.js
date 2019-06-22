//date recipes

//common
const currentDate = new Date().getTime()

console.log("Date: " + currentDate)

//shorter
const currentDate2 = +new Date()

console.log("Shorter: " + currentDate2)

//counting the months from zero

const date1 = new Date(2015, 1, 21) //This shows February 21st, 2015

const date2 = new Date(2015, 0, 21) //This shows January 21st, 2015

const date3 = new Date(2015, 12, 21) //Will show 2016

console.log("DATE: " + date1) 
console.log("DATE: " + date2) 
console.log("DATE: " + date3) 

//using SetIntervals

// function myFunction() {
//   console.log("YES")
// }

// const loop = window.setInterval(myFunction, 1000)

//using with

let a, x

with (Math) {
  x = random()
  a = exp(x)
}

console.log ("a -> " + a + "x -> " + x)
