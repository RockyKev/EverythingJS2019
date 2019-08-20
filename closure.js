//page 87
//https://drive.google.com/drive/folders/1B-eWVHXw6roKhQWpRkiNNwHtb-66Gzif

//closure - they all work btw

//attempt 1 

// const bark = dog => {
//   const say = `${dog} barked!`; 
//   (() => console.log(say)) ()
// }

// bark(`roger`)



//attempt 2

// const prepareBark = dog => {
//   const say = `${dog} barked!`
//   return () => console.log(say)
// }

// const bark = prepareBark(`roger`)

// bark()


//attempt 3

const prepareBark = dog => {
  const say = `${dog} barked!`
  return () => {
    console.log(say)
  }
}

const rogerBark = prepareBark(`Roger`)
const sydBark = prepareBark(`Syd`)

rogerBark()
sydBark()


/* Optimizing with Closure
https://medium.com/@bretcameron/13-tips-to-write-faster-better-optimized-javascript-dc1f9ab063d8
*/

function whichSideOfTheForce(name) {
  const light = ['Luke', 'Obi-Wan', 'Yoda']; 
  const dark = ['Vader', 'Palpatine'];
  
  return light.includes(name) ? 'light' : 
    dark.includes(name) ? 'dark' : 'unknown';
};
whichSideOfTheForce('Yoda');   // returns "light"
whichSideOfTheForce('Anakin'); // returns "unknown"

/* The problem with this code is that every time we call whichSideOfTheForce , we create a new object. With every function call, memory is unnecessarily re-allocated to our light and dark arrays.
Given the values in light and dark are static, a better solution would be to declare these variables once and then reference them when calling whichSideOfTheForce . While we could do this by defining our variables in global scope, this would allow them to be tampered with outside of our function. A better solution is to use a closure, and that means returning a function:

*/ 
function whichSideOfTheForce2(name) {
  const light = ['Luke', 'Obi-Wan', 'Yoda'];
  const dark = ['Vader', 'Palpatine'];
  return name => light.includes(name) ? 'light' :
    dark.includes(name) ? 'dark' : 'unknown';
};

