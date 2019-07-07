//function default parameters

 

// function setColor(element, color = 'pink') {
//   element.style.backgroundColor = color

// }

// setColor(divA)
// setColor(divB, undefined)
// setColor(divC, 'blue')

function cube(number = 0) {
  return number * number * number
}

console.log(cube(0)) // 0
console.log(cube(3)) // 27

