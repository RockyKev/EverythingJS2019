
//Checking using Include
//https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/


export function includeTest() {
  array_tester = [1, 2, 3]

  // if (!array_tester.includes(3)) {  
  //   console.log('Not found')
  //   } else {
  //     console.log("totally found")
  //   }

  //rewritten as ternary
  array_tester.includes(3) ? console.log("found") : console.log("not found")

  console.log(array_tester.includes(3))
}
