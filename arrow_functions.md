# Arrow Functions

Arrow functions uses the fat arrows (=>). 

They are useful to create Anonymous functions. 


## How they look like

(arg1, arg2, ... argN) => {
    //nbody
}


## Use cases


    const add = (a, b) => a + b;

//leaving off the parenthesis
    const getFirst = array => array[0]


//Advanced methods

//To return an object literal  -- 

    (name, description) => ({name: name, description: description})

## This statement

    This is based on context. So watch out. 
    
## When not to use it

```
//BAD
//https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1

class Counter {
    counter = 0;
    handleClick = () => {
        this.counter++;
    }
}

//GOOD
class Counter {
    counter = 0;
    
    handleClick() {
        this.counter++
    }

    constructor() {
        this.handleClick = this.handleClick.bind(this);
    }

```
## Uses

```
//#1
var ninjaGreeting = () => console.log("hiiiiya");

ninjaGreeting();
```
```
//#2
var ninjaGreeting = (name) => {console.log(`${name} says hiiiiya`)};

ninjaGreeting('Mark');
```
```
//#3
var ninjaGreeting = name => console.log(`${name} says hiiiiya`);

ninjaGreeting('Mark');
```

```
//#4 -- when you don't use arrow function.
//"CodePen chopped the enemy x times."
// Solve by doing something like '_this = this', and then calling that.
var ninja = {
   name: "Ryu",
  
   chop(x) {
     window.setInterval(function() {
       if (x > 0) {
       console.log(this.name + " chopped the enemy " + x + " times." );
       x--;
       }    
     }, 1000);
   }
 }; 

 ninja.chop(5);
```
```
//#5 -- when you use arrow function.
"Ryu chopped the enemy x times."
var ninja = {
  name: "Ryu",
  
  chop(x) {
    window.setInterval(() => {
      if (x > 0) {
      console.log(this.name + " chopped the enemy " + x + " times." );
      x--;
      }    
    }, 1000);
  }
}; 

ninja.chop(5);
```
