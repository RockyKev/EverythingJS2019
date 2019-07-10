// https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/
// function *calculator(input) {    var doubleThat = 2 * (yield (input / 2))    var another = yield (doubleThat)    return (input * doubleThat * another)}

// // We initialize it with

// const calc = calculator(10)

// // Then we start the iterator on our generator:

// calc.next()
// // This first iteration starts the iterator. The code returns this object:

// {  done: false  value: 5}

function *calculator(input) {
  var doubleThat = 2 * (yield (input / 2))

  var another = yield (doubleThat)

  return (input * doubleThat * another);
}

const calc = calculator(10)

calc.next()
calc.next(7)
//calc.next(1000)
