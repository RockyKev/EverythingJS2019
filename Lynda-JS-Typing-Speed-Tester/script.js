//Things to add
// words per minute
// how many errors
// removing the 'truetype', so const and lower doesn't matter.


//We aleady brought all the elements in as variables, so we can mess with them later in the code. 
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0, 0, 0, 0]
let interval 
let timerRunning = false

// Add leading zero to numbers 9 or below (purely for aesthetics):

function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time
  }

  return time
}

// --------------------------------------
// Run a standard minute/second/hundredths timer:
// 
// This is to test that it works
// function runTimer() {
//   theTimer.innerHTML = timer
//   timer ++
// }

function runTimer() {
  //let currentTime = `${timer[0]}:${timer[1]}:${timer[2]}`

  let currentTime = leadingZero(timer[0]) + 
  ":" + leadingZero(timer[1]) + 
  ":" + leadingZero(timer[2]); 

  theTimer.innerHTML = currentTime

  timer[3]++

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));


}


// --------------------------------------
// Match the text entered with the provided text on the page:

const colorGreen = '#429890'
const colorBlue = '#65CCf3'
const colorOrange = '#E85D0F'


function spellCheck() {
  let textEntered = testArea.value
  //console.log(textEntered)

  //to test the string, you have to test one character at a time.
  let originTextMatch = originText.substring(0, textEntered.length)

  if (textEntered == originText) {

    //if the text is complete, stop the timer
    clearInterval(interval)

    //if the whole string matches, turn it green
    testWrapper.style.borderColor = colorGreen
  } else {
    //if the next char is correct
    if (textEntered == originTextMatch) {
      testWrapper.style.borderColor = colorBlue
    } else {
      testWrapper.style.borderColor = colorOrange
    }
  }

}


// --------------------------------------
// Start the timer:
function start() {
  let textEnteredLength = testArea.value.length

  //This says - if it's at 0, set the runTimer function.
  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true
    setInterval(runTimer, 10)
  }

  console.log(textEnteredLength)
}


// --------------------------------------
// Reset everything:
function reset() {
  //console.log("reset has been pressed")

  clearInterval(interval)
  interval = null
  timer = [0, 0, 0, 0]
  timerRunning = false


  //clear the visuals
  testArea.value = ""
  theTimer.innerHTML = "00:00:00"
  testWrapper.style.borderColor = "grey"
}

// --------------------------------------
// Event listeners for keyboard input and the reset button:
//How this works is that it checks the class, and looks for specific events. addEventListener(COMMAND, FUNCTION, ???)

testArea.addEventListener("keypress", start, false) 
testArea.addEventListener("keyup", spellCheck, false) 
resetButton.addEventListener("click", reset, false)