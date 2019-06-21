//method chaining
//NOT using ES6 shortcuts


const Bar = function() {
  this.first = "not"
  this.last = "FizzBuzz"
}

Bar.prototype.setFirst = function(first) {
  this.first = first
  return this
}

Bar.prototype.setLast = function(last) {
  this.last = last
  return this
}

let foo = new Bar()

foo.setFirst('fizz').setLast('fizzy')

console.log(foo)

console.log("---- V2 -------")

const Rectangle = function() {
  this.width = null
  this.length = null
}

Rectangle.prototype.setWidth = function(width) {
  this.width = width
  return this
}

Rectangle.prototype.setLength = function(length) {
  this.length = length
  return this
}

const r = (new Rectangle())
  .setWidth(20)
  .setLength(30)

console.log(r)

console.log("---- prototype -------")

function Animal(name) {
  this.name = name
  this.feline = true
  this.hasFur = true
}

//inherited prototype method
Animal.prototype.sayName = function() {
  console.log("my name is " + this.name);
}

function Cat(name) {
  this.name = name
}


Cat.prototype = new Animal()

let Kitty = new Cat("Kitty")

Kitty.sayName()

console.log("---- prototype 2 -------")

function Hobby(hobby) {
  this.hobby = hobby
}

Hobby.prototype.sayHobby = function() {
  console.log("I enjoy " + this.hobby)
}

function MyHobby(hobby) {
  this.hobby = hobby
}

MyHobby.prototype = new Hobby()
const student = new MyHobby("Studying the swang")

student.sayHobby()

