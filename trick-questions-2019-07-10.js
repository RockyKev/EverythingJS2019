//https://dev.to/aman_singh/so-you-think-you-know-javascript-5c26?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email

/*********************************** */

/* 
Question 1: What will be printed on the browser console?
*/

// var a = 10;
// function foo() {
//     console.log(a); // ??
//     var a = 20;
// }
// foo();

/* Rocky Answer:
It's going to show 10. Because var a is scoped inside foo. 

RIGHT ANSWER: Undefined. Since var hoisted things.

*/



/*********************************** */

/*
Question 2: Will output be the same if we use let or const instead of var?
*/


// var a = 10;
// function foo() {
//     console.log(a); // ??
//     let a = 20;
// }
// foo();

/* Rocky Answer:
still undefined. Because it's after the console.log. 

REAL ANSWER: 
ERROR! Referror.


*/

/*********************************** */

/*
Question 3: What elements will be in the “newArray”?
*/

// var array = [];
// for(var i = 0; i <3; i++) {
// // array.push(() => i);
// //array.push(i);
// }
// var newArray = array.map(el => el());
// console.log(newArray); // ??
//console.log(array)

/* Rocky Answer:
array = [0, 1, 2]
functions? 

REAL ANSWER: 
THis is a trick question. 

*/

/*********************************** */

/*
Question 4: If we run the ‘foo’ function in the browser console, will it cause a stack overflow error?
*/

// function foo() {
//   setTimeout(foo, 0); // will there by any stack overflow error?
// };

/* Rocky Answer:
no. It's valid.


*/

/*********************************** */

/*
Question 5: Will the UI of the page (tab) remains responsive if we run the following function in the console?
*/

// function foo() {
//   return Promise.resolve().then(foo);
// };

/* Rocky Answer:
No. It's a infinite loop. 
After the promise, it will do another foo. 

*/

/*********************************** */

/*
Question 6: Can we somehow use the spread syntax for the following statement without causing a TypeError?
*/

// var obj = { x: 1, y: 2, z: 3 };
// [...obj]; // TypeError

/* Rocky Answer:
No idea.

*/

/*********************************** */

/*
Question 7: What will be printed on the console when we run the following code snippet?
*/

// var obj = { a: 1, b: 2 };
// Object.setPrototypeOf(obj, {c: 3});
// Object.defineProperty(obj, 'd', { value: 4, enumerable: false });

// what properties will be printed when we run the for-in loop?
// for(let prop in obj) {
//     console.log(prop);
// }

//console.log (obj["e"])
/* Rocky Answer:
unknown.

ASSUMPTION BASED ON RUNNING: 
setPrototypeOf adds the c: 3
but defineProperty is temperatory? 

*/

/*********************************** */

/*
Question 8: What value xGetter() will print?
*/

var x = 10;
var foo = {
  x: 90,
  getX: function() {
    return this.x;
  }
};
foo.getX(); // prints 90
var xGetter = foo.getX;
xGetter(); // prints ??

/* Rocky Answer:
I would assume 90. 
But it's 10. 

REASON: 
this.x is the tricky part. What is this.x referencing?
In foo.getX(), it's referencing itself. So 90.
In xGetter(), it's referencing window.x, so 10. 


*/

