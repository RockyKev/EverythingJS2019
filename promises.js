
//OLD WAY TO DO THIS
//https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/

// setTimeout(function() {  console.log('I promised to run after 1s')  setTimeout(function() {    console.log('I promised to run after 2s')  }, 1000)}, 1000)

setTimeout(function () {
  console.log("ORIGINAL: I promise to run after 1 second.")
  
    setTimeout(function() {
      console.log("ORIGINAL: I promised to run after 2s")
    }, 1000)}, 1000);

setTimeout(function () {
  console.log("ORIGINAL: I promise to run after 1 second.")
  }, 1000);


// NEW WAY TO DO THIS
//const wait = () => new Promise((resolve, reject) => {  setTimeout(resolve, 1000)})
//wait().then(() => {  console.log('I promised to run after 1s')  return wait()}).then(() => console.log('I promised to run after 2s'))

const wait = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)});

wait()
  .then( () => {
  console.log('I primise to run after 1s');
  return wait() } )
  .then( 
    () => console.log ("I promise to run after 2s")
  ) 
