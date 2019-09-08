// An array of people.
var myFriends = [
  { name: "John", gender: "male" },
  { name: "Kate", gender: "female" },
  { name: "Mike", gender: "male" },
  { name: "Sophie", gender: "female" },
  { name: "Richard", gender: "male" },
  { name: "Keith", gender: "male" }
];

// A simple filter based on gender.
var isMale = function(x){
  return x.gender == "male";
}

myFriends.filter(isMale); // John, Mike, Richard, Keith

/* FILTERING ARRAY */
//old way
const numbers = [1, -1, 2, 3];

const filtered1 = numbers.filter(function(value) {
  return value >= 0;
});
console.log(filtered1);


//arrow function way
const filtered2 = numbers.filter(value => value >= 0 );

console.log(filtered2);
