const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

/* The order you want to go in:
1) Detect the typing
2) Build the count-up timer
3) Build the helper function for leading zeroes in the timer
4) Detect spelling errors by matching strings
5) Stop the timer whe nthe test is document
6) Add a reset button


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:


// Start the timer:


// Reset everything:


// Event listeners for keyboard input and the reset button:
