// ----------------------------------
//USING BREAK

// const MIN = 0
// const MAX = 36
// let testNumber = 15
// let i = 1

// while (MAX) {

//   let randomValue = Math.floor(Math.random() * MAX - MIN) + MIN

//   if (randomValue == testNumber) {
//     break
//   }

//   console.log (`Round ${i}: ${randomValue}`)
//   i++
// }

// console.log(`The script went ${i} rounds before finding ${testNumber}.`)


// ----------------------------------
//USING CONTINUE
const CEILING = 100

function primeTest(testValue) {
  let isPrime = true
  for (let i = 2; i < testValue; i++) {
    if (testValue % i === 0) {
      isPrime = false
    }
  }

  return isPrime

}

for (let i = 2; i<= CEILING; i++) {
  let result = primeTest(i)

  //adding a continue statement, so it only shows when it works

  if (result == false) {
    continue
  }

  console.log(`${i} is a prime number: ${result}`)
}


