//pg 88
//https://drive.google.com/drive/folders/1B-eWVHXw6roKhQWpRkiNNwHtb-66Gzif


// //proper array declarations
const a1 = []  
const a2 = [1, 2, 3]
const a3 = Array.of(1, 2, 3)
const a4 = Array(6).fill(1)


//dont use these
const a5 = new Array()
const a6 = new Array(1, 2, 3)
const a7 = new Array(10)

console.log(a1)
console.log(a1.length)

console.log(a2)
console.log(a2.length)

console.log(a3)
console.log(a3.length)

console.log(a4)
console.log(a4.length)

console.log('--------------')
console.log(a5)
console.log(a5.length)

console.log(a6)
console.log(a6.length)

console.log(a7)
console.log(a7.length)

//////////Various functions///////////

//iterating the array
console.log('iterate --------------')
//"every" This checks if all the elements match the function

function isOne(element) {
  return (element === 1)
}

console.log(a3.every(isOne))
console.log(a4.every(isOne))

// OR YOU CAN SHORTCUT IT LIKE This
//console.log(a4.every(element => (element === 1)))


//"some" This checks if some of it is true

console.log(a3.some(isOne))
console.log(a4.some(isOne))

function plusOne(element) {
  if (element > 1) {
    return element
  } else {
    return false
  }
}
console.log('for each --------------')

a4.forEach(v => console.log(v))

console.log('for... of --------------')

for (let v of a4) {
  console.log(v)
}

//reduce function
