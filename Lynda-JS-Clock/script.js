/* STEPS
* 1 - tie the hands to a const
* 2 - see if you can modify the css of each value
* 3 - grab a date object, and break into each variable
* 4 - break the clock into math pieces. The goal is to divide the total degrees (360) by how many segments (12 hours, or 60 minutes). 
* 5 - create a function to make it run every second
* 6 - when the second time reaches 60, it does a fucked up swirly thing.
* 7 - fix the swirl
*/

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// //Set a fake value to test
// let hrPosition = 20
// let minPosition = 130
// let secPosition = 267

  //grabbing the date
  var date = new Date()
  console.log(date)
  let hr = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  console.log(`Hour: ${hr} Min: ${min} Sec: ${sec}`)

  //Real time value
  //360 / 60 means - 360 degrees, divided by 60 minutes
  //
  let hrPosition = (hr * 360/12) + (min * (360/60) / 12)
  let minPosition = (min * 360/60) + (sec * (360/60) / 60)
  let secPosition = sec * 360/60


function runTheClock() {
  //this code makes it so the second arm doesn't go into a crazy swirl. 
  hrPosition = hrPosition + (3/360)
  minPosition = minPosition + (1/60)
  secPosition = secPosition + 6

  //modify the CSS value.
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
}

let interval = setInterval(runTheClock, 1000)
