// Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?


const twoNumbers = function(array, finalTotal) {

  length = array.length

  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      compare = array[x] + array[y]

      if (compare == finalTotal) {
        console.log(`${array[x]} and ${array[y]} are it to equal ${finalTotal}`)
        //to exit out of it
        return
      }
    }
  }

}

twoNumbers([10, 15, 3, 7], 17)

twoNumbers([25, 18, 200, 85, 50, 101], 250)
