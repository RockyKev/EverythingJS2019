//https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/

//ES2015 introduced the for-of loop, which combines the conciseness of forEach with the ability to break:
//iterate over the valuefor (const v of ['a', 'b', 'c']) {  console.log(v);}

//get the index as well, using `entries()`for (const [i, v] of ['a', 'b', 'c'].entries()) {  console.log(i, v);}

// for (const v of ['a', 'b', 'c']) {
//   console.log(v)
// }

for (const [i, v] of ['a', 'b', 'c'].entries() ) {
  console.log(i, v)
}


//like python!
