//https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/

// class Person {  constructor(name) {    this.name = name  }

//   hello() {    return 'Hello, I am ' + this.name + '.'  }}

// class Actor extends Person {  hello() {    return super.hello() + ' I am an actor.'  }}

// var tomCruise = new Actor('Tom Cruise')tomCruise.hello()
 
class Person {
  constructor(name) {
    this.name = name
  }

  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}

class Actor extends Person { 
  hello() {
    return super.hello() + ' I am an actor.' 
  }
}

const tomCruise = new Actor('Tom Cruise')

//tomCruise.hello()

///////////////////////////////////////////////////
//more info
//https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420
/////////////////////////////////////////////////

// class Animal {
//     constructor(name, weight) {
//         this.name = name;
//         this.weight = weight;
//     }

//     eat() {
//         return `${this.name} is eating!`;
//     }

//     sleep() {
//         return `${this.name} is going to sleep!`;
//     }

//     wakeUp() {
//         return `${this.name} is waking up!`;
//     }

// }

class Animal {
  constructor(name, weight) {
    this.name = name
    this.weight = weight
  }

  eat() {
    return `${this.name} is eating.`
  }

  sleep() {
    return `${this.name} is going to sleep!`
  }

  wakeUp() {
    return `${this.name} is waking up!`
  }

}

// const goodDoggie = new Animal("poochie", 5)

// goodDoggie.wakeUp()

// class Gorilla extends Animal {
//     constructor(name, weight) {
//         super(name, weight);
//     }

//     climbTrees() {
//         return `${this.name} is climbing trees!`;
//     }

//     poundChest() {
//         return `${this.name} is pounding its chest!`;
//     }

//     showVigour() {
//         return `${super.eat()} ${this.poundChest()}`;
//     }

//     dailyRoutine() {
//         return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`;
//     }

// }

//ROCKY NOTES:
//extends is extending the class to add more shit
//super is pulling the data from the class
//so like, to get the sleep function from the animal class, you have to use super.

class Gorilla extends Animal {

  constructor(name, weight) {
    super(name, weight)
  }

  climbTrees() {
    return `${this.name} is pounding its chest!`
  }

  poundChest() {
    return `${this.name} is pounding its chest!`
  }

  showVigour() {
    return `${super.eat()} ${this.poundChest()}`
  }

  dailyRoutine() {
    return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`
  }

}

function display(content) {
  console.log(content)
}

const gorilla = new Gorilla('George', '160lbs');

display(gorilla.poundChest())
display(gorilla.sleep())
display(gorilla.showVigour())
display(gorilla.dailyRoutine())

// function display(content) {
//     console.log(content);
// }

// const gorilla = new Gorilla('George', '160Kg');
// display(gorilla.poundChest());
// display(gorilla.sleep());
// display(gorilla.showVigour());
// display(gorilla.dailyRoutine());



/* THIS IS PART 2 - using super */
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  };

  speak() {
    console.log(`${this.name} makes a noise!`);
  }
}


const animal = new Animal('Gregor', 5);
const animal2 = new Animal('Stacy', 4);

animal.speak();
animal2.speak()

console.log(this === window);

class Lion extends Animal {
  constructor(name, height) {
    super(name,height);
    this.specials = 'Lion';
  }

  speak() {
    super.speak();
    console.log(`${this.name} roars!`);
  }
}

const liony = new Lion('fuzzy', 5)
liony.speak()
