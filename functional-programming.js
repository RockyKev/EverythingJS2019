//https://medium.com/free-code-camp/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064

// step 1 - for loop

let LISTA = [1, 2, 3];
// Part 1: for-loop as an iterator / increment-er
for (let i= 0; i< LISTA.length; i++) {
    // Part 2: the statement to execute on each iteration
    LISTA[i] = LISTA[i] + 1;
}
console.log(LISTA); // [2, 3, 4]

//---------------------
// step 2 - rewriting for it to be pure

let LISTB = [1, 2, 3];

//testing it as a map function
//LISTB.map( item => item + 1)

//isolating the chunk and using it as a variable

let addOne = item => item + 1

//DOES NOT WORK
//LISTB.map(addOne)

//console.log(LISTB)

/*
The reason that the list is not incremented is because map does not mutate the list in place. It returns a copy of the list with the callback applied to each of its elements. To capture the incrementation all we need to do is assign LIST.map( add ) to a variable as in the following example: */

let LISTC = LISTB.map(addOne)

console.log(LISTC)

// -------------------------------
// TEST 3 - a pure function program

// let LIST = [1,2,3];
// let add = item => item + 1;
// let sum = (A, I) => A + I;
// let val = LIST.map(add).reduce(sum, 0);
// console.log( val ); // 9

let LISTD = [1, 2, 3]
let add = item => item + 1
let sum = (A, I) => A + I //That is, Accumulator + Item. 
let val = LISTD.map(add).reduce(sum, 0)
console.log(val)


