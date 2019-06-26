const BOX1 = document.querySelector("#box1");
const BOX2 = document.querySelector("#box2");
const BOX3 = document.querySelector("#box3");

const BOX4 = document.querySelector("#box4");
const BOX5 = document.querySelector("#box5");
const BOX6 = document.querySelector("#box6");

const BOX7 = document.querySelector("#box7");
const BOX8 = document.querySelector("#box8");
const BOX9 = document.querySelector("#box9");

const BOX10 = document.querySelector("#box10");
const BOX11 = document.querySelector("#box11");
const BOX12 = document.querySelector("#box12");

//BOX10.innerHTML = "butt"


// BOX10.children[0].src = "https://www.placecage.com/100/100"
// BOX11.children[0].src = "https://www.placecage.com/100/80"
// BOX12.children[0].src = "https://www.placecage.com/100/250"

// function cageGenerator() {


// } 

//--------------------------
//This works for internal objects
// jsonExample = '{ "name":"John", "age":30, "city":"New York"}'

// let jsonParser = JSON.parse(jsonExample);

// console.log(jsonParser.name)

//---------
//This STOPPED WORKING
//   var request = new XMLHttpRequest();
//   var requestURL = "/content.json";
//   request.open('GET', requestURL);
  
//   request.responseType = 'json';
// //  request.send();
  
//   var my_JSON_object = JSON.parse(request.responseText);
  
//   console.log (my_JSON_object[0]);
  // console.log (my_JSON_object);
  // console.log('butts')

  //--------
  //THIS WORKS
//  var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//  var requestURL = 'https://js-Nicolas-Cage--rockykev.repl.co/content2.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  
  request.responseType = 'json';
  request.send();

  //this is with a function  
  request.onload = function() {
    var superHeroes = request.response;
    console.log(superHeroes);
    console.log("done")
  }

  //how about no function -- DOESN'T WORK - needs an onload
    // var superHeroes = request.response;
    // console.log(superHeroes);
  
  //--------
